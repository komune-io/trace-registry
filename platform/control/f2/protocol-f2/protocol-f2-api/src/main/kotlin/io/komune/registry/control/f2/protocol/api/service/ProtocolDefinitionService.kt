package io.komune.registry.control.f2.protocol.api.service

import io.komune.registry.control.core.cccev.concept.InformationConceptAggregateService
import io.komune.registry.control.core.cccev.concept.InformationConceptFinderService
import io.komune.registry.control.core.cccev.concept.command.InformationConceptCreateCommand
import io.komune.registry.control.core.cccev.requirement.RequirementAggregateService
import io.komune.registry.control.core.cccev.requirement.RequirementFinderService
import io.komune.registry.control.core.cccev.requirement.command.RequirementCreateCommand
import io.komune.registry.control.core.cccev.requirement.command.RequirementUpdateCommand
import io.komune.registry.control.core.cccev.requirement.model.RequirementKind
import io.komune.registry.control.core.cccev.unit.DataUnitAggregateService
import io.komune.registry.control.core.cccev.unit.DataUnitFinderService
import io.komune.registry.control.core.cccev.unit.command.DataUnitCreateCommand
import io.komune.registry.control.core.cccev.unit.command.DataUnitOptionCommand
import io.komune.registry.control.f2.protocol.domain.model.DataCollectionStep
import io.komune.registry.control.f2.protocol.domain.model.DataConditionDTO
import io.komune.registry.control.f2.protocol.domain.model.DataConditionType
import io.komune.registry.control.f2.protocol.domain.model.DataField
import io.komune.registry.control.f2.protocol.domain.model.DataSection
import io.komune.registry.control.f2.protocol.domain.model.Protocol
import io.komune.registry.control.f2.protocol.domain.model.ProtocolDTO
import io.komune.registry.control.f2.protocol.domain.model.RequirementProperties
import io.komune.registry.infra.neo4j.transaction
import io.komune.registry.s2.commons.model.InformationConceptId
import io.komune.registry.s2.commons.model.InformationConceptIdentifier
import io.komune.registry.s2.commons.model.RequirementId
import io.komune.registry.s2.commons.model.RequirementIdentifier
import io.komune.registry.s2.commons.utils.DependencyAwareGraphInitializer
import org.neo4j.ogm.session.SessionFactory
import org.springframework.stereotype.Service

@Service
class ProtocolDefinitionService(
    private val dataUnitAggregateService: DataUnitAggregateService,
    private val dataUnitFinderService: DataUnitFinderService,
    private val informationConceptAggregateService: InformationConceptAggregateService,
    private val informationConceptFinderService: InformationConceptFinderService,
    private val requirementAggregateService: RequirementAggregateService,
    private val requirementFinderService: RequirementFinderService,
    private val sessionFactory: SessionFactory
) {

    private val informationConceptGraphInitializer = InformationConceptGraphInitializer()
    private val requirementDataGraphInitializer = RequirementDataGraphInitializer()

    suspend fun define(protocol: ProtocolDTO) = sessionFactory.transaction { session, _ ->
        val informationConcepts = protocol.extractInformationConcepts()
        val conceptIdsMap = informationConceptGraphInitializer.initialize(informationConcepts) { informationConcept, conceptIdsMap ->
            informationConcept.existingId?.let { return@initialize it }

            val command = InformationConceptCreateCommand(
                identifier = informationConcept.identifier,
                name = informationConcept.name,
                description = informationConcept.description,
                unitId = informationConcept.unitId,
                expressionOfExpectedValue = informationConcept.expressionOfExpectedValue,
                dependsOn = informationConcept.dependsOn.map { conceptIdsMap[it]!! }
            )
            informationConceptAggregateService.create(command).id
        }

        val rootRequirement = protocol.toRequirementData(0, conceptIdsMap)

        val requirementIdsMap = requirementDataGraphInitializer
            .initialize(rootRequirement.flatten()) { requirementData, requirementIdsMap ->
                requirementData.createOrUpdate(requirementIdsMap)
            }

        requirementIdsMap[rootRequirement.identifier]!!
    }

    private fun RequirementData.flatten(): Collection<RequirementData> {
        val visitedRequirements = mutableMapOf<RequirementIdentifier, RequirementData>()

        fun RequirementData.extractToFlatMap() {
            if (identifier in visitedRequirements) return
            visitedRequirements[identifier] = this
            requirements.forEach { it.extractToFlatMap() }
        }
        extractToFlatMap()

        return visitedRequirements.values
    }

    private suspend fun ProtocolDTO.extractInformationConcepts(): List<InformationConceptData> {
        return when (this) {
            is DataSection -> fields.map { it.extractInformationConcept() }
            is DataCollectionStep -> sections.flatMap { it.extractInformationConcepts() }
            is Protocol -> steps.orEmpty().flatMap { it.extractInformationConcepts() }
        }
    }

    private suspend fun DataField.extractInformationConcept(): InformationConceptData {
        val existing = informationConceptFinderService.getByIdentifierOrNull(name)
        if (existing != null) {
            return InformationConceptData(
                existingId = existing.id,
                identifier = existing.identifier,
                name = existing.name,
                description = existing.description,
                unitId = existing.unit.id,
                expressionOfExpectedValue = existing.expressionOfExpectedValue,
                dependsOn = existing.dependencies.map { it.identifier }
            )
        }

        val unitId = dataUnitFinderService.getByIdentifierOrNull(unit.identifier)?.id ?: run {
            DataUnitCreateCommand(
                identifier = unit.identifier,
                name = unit.name.orEmpty(),
                description = "",
                abbreviation = unit.abbreviation,
                type = unit.type,
                options = options.orEmpty().mapIndexed { i, option ->
                    DataUnitOptionCommand(
                        id = null,
                        identifier = "${unit.identifier}_$i",
                        name = option.label,
                        value = option.key,
                        order = i,
                        icon = option.icon,
                        color = option.color
                    )
                }
            ).let { dataUnitAggregateService.create(it).id }
        }

        return InformationConceptData(
            identifier = name,
            name = label.orEmpty(),
            description = description,
            unitId = unitId,
            expressionOfExpectedValue = null,
            dependsOn = emptyList()
        )
    }

    private suspend fun ProtocolDTO.toRequirementData(
        position: Int,
        conceptIdsMap: Map<InformationConceptIdentifier, InformationConceptId>
    ): RequirementData {
        val (displayConditions, validationConditions) = conditions.orEmpty().partition {
            it.type == DataConditionType.display
        }
        val displayCondition = displayConditions.firstOrNull()

        return RequirementData(
            identifier = identifier,
            kind = RequirementKind.CRITERION,
            type = type,
            name = label,
            description = description,
            order = position,
            properties = mapOf(RequirementProperties.PROTOCOL to properties),
            enablingCondition = displayCondition?.expression,
            enablingConditionDependencies = displayCondition?.dependencies?.map { conceptIdsMap[it]!! } ?: emptyList(),
            requirements = buildList {
                validationConditions.forEach { condition -> add(condition.toRequirementData(conceptIdsMap)) }
                steps?.forEachIndexed { i, step -> add(step.toRequirementData(i, conceptIdsMap))}
                when (this@toRequirementData) {
                    is DataSection -> fields.forEachIndexed { i, field ->
                        add(field.toRequirementData(identifier, i, conceptIdsMap))
                    }
                    is DataCollectionStep -> sections.forEachIndexed { i, section ->
                        add(section.toRequirementData(i, conceptIdsMap))
                    }
                    is Protocol -> Unit
                }
            }
        )
    }

    private fun DataField.toRequirementData(
        parentIdentifier: RequirementIdentifier,
        position: Int,
        conceptIdsMap: Map<InformationConceptIdentifier, InformationConceptId>
    ): RequirementData {
        val (displayConditions, validationConditions) = conditions.orEmpty().partition {
            it.type == DataConditionType.display
        }
        val displayCondition = displayConditions.firstOrNull()

        @Suppress("UNCHECKED_CAST")
        return RequirementData(
            identifier = displayCondition?.identifier ?: "${parentIdentifier}_${name}",
            kind = RequirementKind.INFORMATION,
            type = type,
            name = label,
            description = description,
            order = position,
            required = required,
            properties = mapOf(
                RequirementProperties.PROTOCOL to properties,
                RequirementProperties.DataField.HELPER_TEXT to helperText
            ),
            conceptIds = listOf(conceptIdsMap[name]!!),
            enablingCondition = displayCondition?.expression,
            enablingConditionDependencies = displayCondition?.dependencies?.map { conceptIdsMap[it]!! },
            requirements = validationConditions.map { it.toRequirementData(conceptIdsMap) }
        )
    }

    private fun DataConditionDTO.toRequirementData(
        conceptIdsMap: Map<InformationConceptIdentifier, InformationConceptId>
    ) = RequirementData(
        identifier = identifier,
        kind = RequirementKind.CONSTRAINT,
        description = error,
        validatingCondition = expression,
        validatingConditionDependencies = dependencies?.map { conceptIdsMap[it]!! },
    )

    private suspend fun RequirementData.createOrUpdate(requirementIdsMap: Map<RequirementIdentifier, RequirementId>): RequirementId {
        val existingRequirement = requirementFinderService.getByIdentifierOrNull(identifier)
        return if (existingRequirement == null) {
            val requirementCommand = RequirementCreateCommand(
                identifier = identifier,
                kind = kind,
                type = type,
                name = name,
                description = description,
                order = order,
                required = required,
                properties = properties,
                conceptIds = conceptIds,
                enablingCondition = enablingCondition,
                enablingConditionDependencies = enablingConditionDependencies.orEmpty(),
                validatingCondition = validatingCondition,
                validatingConditionDependencies = validatingConditionDependencies.orEmpty(),
                subRequirementIds = requirements.map { requirementIdsMap[it.identifier]!! },
                evidenceTypeIds = emptyList(), // TODO
                evidenceValidatingCondition = null // TODO
            )
            requirementAggregateService.create(requirementCommand).id
        } else {
            val updatedRequirementCommand = RequirementUpdateCommand(
                id = existingRequirement.id,
                type = type,
                name = name,
                description = description,
                order = order,
                required = required,
                properties = properties,
                conceptIds = conceptIds,
                enablingCondition = enablingCondition,
                enablingConditionDependencies = enablingConditionDependencies.orEmpty(),
                validatingCondition = validatingCondition,
                validatingConditionDependencies = validatingConditionDependencies.orEmpty(),
                subRequirementIds = requirements.map { requirementIdsMap[it.identifier]!! },
                evidenceTypeIds = emptyList(), // TODO
                evidenceValidatingCondition = null // TODO
            )
            requirementAggregateService.update(updatedRequirementCommand).id
        }
    }

    private inner class InformationConceptGraphInitializer
        : DependencyAwareGraphInitializer<InformationConceptData, InformationConceptIdentifier, InformationConceptId>() {
        override fun getNodeReference(node: InformationConceptData) = node.identifier!!
        override fun getNodeDependencies(node: InformationConceptData) = node.dependsOn

        override suspend fun tryLoadingExternalNode(nodeReference: InformationConceptIdentifier): InformationConceptId? {
            return informationConceptFinderService.getByIdentifierOrNull(nodeReference)?.id
        }
    }

    private inner class RequirementDataGraphInitializer
        : DependencyAwareGraphInitializer<RequirementData, RequirementIdentifier, RequirementId>() {
        override fun getNodeReference(node: RequirementData) = node.identifier
        override fun getNodeDependencies(node: RequirementData) = node.requirements.map { it.identifier }

        override suspend fun tryLoadingExternalNode(nodeReference: RequirementIdentifier): RequirementId? {
            return requirementFinderService.getByIdentifierOrNull(nodeReference)?.id
        }
    }

    private data class RequirementData(
        val identifier: RequirementIdentifier,
        val kind: RequirementKind,
        val type: String? = null,
        val name: String? = null,
        val description: String? = null,
        val order: Int? = null,
        val required: Boolean = true,
        val properties: Map<String, String?>? = null,
        val conceptIds: List<InformationConceptId> = emptyList(),
        val enablingCondition: String? = null,
        val enablingConditionDependencies: List<InformationConceptIdentifier>? = null,
        val validatingCondition: String? = null,
        val validatingConditionDependencies: List<InformationConceptIdentifier>? = null,
        val requirements: List<RequirementData> = emptyList()
    )

    private data class InformationConceptData(
        val existingId: InformationConceptId? = null,
        val identifier: InformationConceptIdentifier,
        val name: String,
        val description: String?,
        val unitId: InformationConceptId,
        val expressionOfExpectedValue: String?,
        val dependsOn: List<InformationConceptIdentifier>
    )
}
