package io.komune.registry.control.f2.protocol.api.service

import io.komune.registry.control.core.cccev.concept.InformationConceptAggregateService
import io.komune.registry.control.core.cccev.concept.InformationConceptFinderService
import io.komune.registry.control.core.cccev.concept.command.InformationConceptCreateCommand
import io.komune.registry.control.core.cccev.evidencetype.EvidenceTypeAggregateService
import io.komune.registry.control.core.cccev.evidencetype.EvidenceTypeFinderService
import io.komune.registry.control.core.cccev.evidencetype.command.EvidenceTypeCreateCommand
import io.komune.registry.control.core.cccev.requirement.RequirementAggregateService
import io.komune.registry.control.core.cccev.requirement.command.RequirementAddBadgeCommand
import io.komune.registry.control.core.cccev.requirement.command.RequirementBadgeLevelCommand
import io.komune.registry.control.core.cccev.requirement.command.RequirementCreateCommand
import io.komune.registry.control.core.cccev.requirement.command.RequirementUpdateBadgeCommand
import io.komune.registry.control.core.cccev.requirement.command.RequirementUpdateCommand
import io.komune.registry.control.core.cccev.requirement.entity.Badge
import io.komune.registry.control.core.cccev.requirement.entity.RequirementRepository
import io.komune.registry.control.core.cccev.requirement.model.RequirementKind
import io.komune.registry.control.core.cccev.unit.DataUnitAggregateService
import io.komune.registry.control.core.cccev.unit.DataUnitFinderService
import io.komune.registry.control.core.cccev.unit.command.DataUnitCreateCommand
import io.komune.registry.control.core.cccev.unit.command.DataUnitOptionCommand
import io.komune.registry.control.f2.protocol.domain.model.BadgeDTO
import io.komune.registry.control.f2.protocol.domain.model.DataCollectionStep
import io.komune.registry.control.f2.protocol.domain.model.DataConditionDTO
import io.komune.registry.control.f2.protocol.domain.model.DataEvaluationType
import io.komune.registry.control.f2.protocol.domain.model.DataField
import io.komune.registry.control.f2.protocol.domain.model.DataSection
import io.komune.registry.control.f2.protocol.domain.model.Protocol
import io.komune.registry.control.f2.protocol.domain.model.ProtocolDTO
import io.komune.registry.control.f2.protocol.domain.model.RequirementProperties
import io.komune.registry.infra.neo4j.transaction
import io.komune.registry.s2.commons.model.EvidenceTypeId
import io.komune.registry.s2.commons.model.EvidenceTypeIdentifier
import io.komune.registry.s2.commons.model.InformationConceptId
import io.komune.registry.s2.commons.model.InformationConceptIdentifier
import io.komune.registry.s2.commons.model.RequirementId
import io.komune.registry.s2.commons.model.RequirementIdentifier
import io.komune.registry.s2.commons.utils.DependencyAwareGraphInitializer
import org.neo4j.ogm.session.SessionFactory
import org.springframework.http.codec.multipart.FilePart
import org.springframework.stereotype.Service

@Service
class ProtocolDefinitionService(
    private val dataUnitAggregateService: DataUnitAggregateService,
    private val dataUnitFinderService: DataUnitFinderService,
    private val evidenceTypeAggregateService: EvidenceTypeAggregateService,
    private val evidenceTypeFinderService: EvidenceTypeFinderService,
    private val informationConceptAggregateService: InformationConceptAggregateService,
    private val informationConceptFinderService: InformationConceptFinderService,
    private val requirementAggregateService: RequirementAggregateService,
    private val requirementRepository: RequirementRepository,
    private val sessionFactory: SessionFactory
) {
    private val informationConceptGraphInitializer = InformationConceptGraphInitializer()
    private val requirementDataGraphInitializer = RequirementDataGraphInitializer()

    suspend fun define(protocol: ProtocolDTO, files: Map<String, FilePart>) = sessionFactory.transaction { session, _ ->
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

        val evidenceTypes = protocol.extractEvidenceTypes().distinctBy { it.identifier }
        val evidenceTypeIdsMap = createEvidenceTypes(evidenceTypes)

        val rootRequirement = protocol.toRequirementData(0, conceptIdsMap, evidenceTypeIdsMap)

        val requirementIdsMap = requirementDataGraphInitializer
            .initialize(rootRequirement.flatten()) { requirementData, requirementIdsMap ->
                requirementData.createOrUpdate(requirementIdsMap, files)
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

    private suspend fun ProtocolDTO.extractInformationConcepts(): List<InformationConceptData> = when (this) {
        is DataSection -> fields.mapNotNull { it.extractInformationConcept() }
        is DataCollectionStep -> sections.flatMap { it.extractInformationConcepts() }
        is Protocol -> steps.orEmpty().flatMap { it.extractInformationConcepts() }
    }

    private suspend fun DataField.extractInformationConcept(): InformationConceptData? {
        if (isEvidence) return null

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

        if (unit == null) {
            throw IllegalArgumentException("DataField '$name' must have a unit defined.")
        }
        val unitId = dataUnitFinderService.getByIdentifierOrNull(unit!!.identifier)?.id ?: run {
            DataUnitCreateCommand(
                identifier = unit!!.identifier,
                name = unit!!.name.orEmpty(),
                description = "",
                abbreviation = unit!!.abbreviation,
                type = unit!!.type,
                options = options.orEmpty().mapIndexed { i, option ->
                    DataUnitOptionCommand(
                        id = null,
                        identifier = "${unit!!.identifier}_$i",
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
            expressionOfExpectedValue = autoCompute?.logic,
            dependsOn = autoCompute?.dependencies.orEmpty()
        )
    }

    private suspend fun ProtocolDTO.extractEvidenceTypes(): List<EvidenceTypeData> = when (this) {
        is DataSection -> fields.mapNotNull { it.extractEvidenceType() }
        is DataCollectionStep -> sections.flatMap { it.extractEvidenceTypes() }
        is Protocol -> steps.orEmpty().flatMap { it.extractEvidenceTypes() }
    }

    private suspend fun DataField.extractEvidenceType(): EvidenceTypeData? {
        if (!isEvidence) return null

        val existing = evidenceTypeFinderService.getByIdentifierOrNull(name)
        return EvidenceTypeData(
            existingId = existing?.id,
            identifier = name,
            name = existing?.name ?: label.orEmpty()
        )
    }

    private suspend fun createEvidenceTypes(evidenceTypes: List<EvidenceTypeData>): Map<EvidenceTypeIdentifier, EvidenceTypeId> {
        return evidenceTypes.associate { evidenceType ->
            if (evidenceType.existingId != null) {
                return@associate evidenceType.identifier to evidenceType.existingId
            }

            val command = EvidenceTypeCreateCommand(
                identifier = evidenceType.identifier,
                name = evidenceType.name
            )
            evidenceType.identifier to evidenceTypeAggregateService.create(command).id
        }
    }

    private suspend fun ProtocolDTO.toRequirementData(
        position: Int,
        conceptIdsMap: Map<InformationConceptIdentifier, InformationConceptId>,
        evidenceTypeIdsMap: Map<EvidenceTypeIdentifier, EvidenceTypeId>
    ): RequirementData {
        val conditionsData = ConditionsData(conditions)

        val evidenceTypeIds = mutableListOf<EvidenceTypeId>()

        return RequirementData(
            identifier = identifier,
            kind = RequirementKind.CRITERION,
            type = type,
            name = label,
            description = description,
            order = position,
            properties = mapOf(RequirementProperties.PROTOCOL to properties),
            enablingCondition = conditionsData.displayCondition?.logic,
            enablingConditionDependencies = conditionsData.displayCondition
                ?.dependencies
                ?.map { conceptIdsMap[it]!! },
            requirements = buildList {
                conditionsData.validationConditions.forEach { condition ->
                    add(condition.toRequirementData(conceptIdsMap, evidenceTypeIdsMap))
                }

                steps?.forEachIndexed { i, step ->
                    add(step.toRequirementData(i, conceptIdsMap, evidenceTypeIdsMap))
                }

                when (this@toRequirementData) {
                    is DataSection -> fields.forEachIndexed { i, field ->
                        add(field.toRequirementData(identifier, i, conceptIdsMap, evidenceTypeIdsMap))
                    }
                    is DataCollectionStep -> sections.forEachIndexed { i, section ->
                        val sectionRequirement = section.toRequirementData(i, conceptIdsMap, evidenceTypeIdsMap)
                        add(sectionRequirement)
                        sectionRequirement.requirements.forEach {
                            evidenceTypeIds.addAll(it.evidenceTypeIds)
                        }
                    }
                    is Protocol -> Unit
                }
            },
            evidenceTypeIds = evidenceTypeIds,
            badges = badges
        )
    }

    private fun DataField.toRequirementData(
        parentIdentifier: RequirementIdentifier,
        position: Int,
        conceptIdsMap: Map<InformationConceptIdentifier, InformationConceptId>,
        evidenceTypeIdsMap: Map<EvidenceTypeIdentifier, EvidenceTypeId>
    ): RequirementData {
        val conditionsData = ConditionsData(conditions)

        @Suppress("UNCHECKED_CAST")
        return RequirementData(
            identifier = conditionsData.displayCondition?.identifier ?: "${parentIdentifier}_${name}",
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
            conceptIds = name.takeIf { !isEvidence }
                ?.let { listOf(conceptIdsMap[it]!!) }
                .orEmpty(),
            enablingCondition = conditionsData.displayCondition?.logic,
            enablingConditionDependencies = conditionsData.displayCondition
                ?.dependencies
                ?.map { conceptIdsMap[it]!! },
            evidenceTypeIds = name.takeIf { isEvidence }
                ?.let { listOf(evidenceTypeIdsMap[it]!!) }
                .orEmpty(),
            requirements = conditionsData.validationConditions.map { it.toRequirementData(conceptIdsMap, evidenceTypeIdsMap) }
        )
    }

    private fun DataConditionDTO.toRequirementData(
        conceptIdsMap: Map<InformationConceptIdentifier, InformationConceptId>,
        evidenceTypeIdsMap: Map<EvidenceTypeIdentifier, EvidenceTypeId>
    ) = RequirementData(
        identifier = identifier,
        kind = RequirementKind.CONSTRAINT,
        description = error,
        validatingCondition = logic.takeIf { !isValidatingEvidences },
        validatingConditionDependencies = dependencies?.takeIf { !isValidatingEvidences }?.map { conceptIdsMap[it]!! },
        evidenceValidatingCondition = logic.takeIf { isValidatingEvidences },
        evidenceTypeIds = dependencies?.takeIf { isValidatingEvidences }
            ?.map { evidenceTypeIdsMap[it]!! }
            .orEmpty(),
    )

    private suspend fun RequirementData.createOrUpdate(
        requirementIdsMap: Map<RequirementIdentifier, RequirementId>,
        files: Map<String, FilePart>
    ): RequirementId {
        val existingRequirement = requirementRepository.findByIdentifier(identifier)
        val requirementId = if (existingRequirement == null) {
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
                evidenceTypeIds = evidenceTypeIds,
                evidenceValidatingCondition = evidenceValidatingCondition
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
                evidenceTypeIds = evidenceTypeIds,
                evidenceValidatingCondition = evidenceValidatingCondition
            )
            requirementAggregateService.update(updatedRequirementCommand).id
        }

        badges?.forEach { it.createOrUpdate(requirementId, files, existingRequirement?.badges) }
        return requirementId
    }

    private suspend fun BadgeDTO.createOrUpdate(
        requirementId: RequirementId,
        files: Map<String, FilePart>,
        existingBadges: Collection<Badge>?
    ) {
        val existingBadge = existingBadges?.firstOrNull { it.id == id }

        if (existingBadge == null) {
            RequirementAddBadgeCommand(
                id = requirementId,
                identifier = identifier,
                name = name,
                informationConceptIdentifier = informationConceptIdentifier,
                image = image,
                levels = levels.map { level ->
                    RequirementBadgeLevelCommand(
                        identifier = level.identifier.takeIf { it.isNotBlank() },
                        name = level.name,
                        color = level.color,
                        image = level.image,
                        level = level.level,
                        expression = level.logic
                    )
                }
            ).let { requirementAggregateService.addBadge(it, files) }
        } else {
            RequirementUpdateBadgeCommand(
                id = requirementId,
                badgeId = existingBadge.id,
                name = name,
                informationConceptIdentifier = informationConceptIdentifier,
                image = image,
                levels = levels.map { level ->
                    RequirementBadgeLevelCommand(
                        id = level.id.takeIf { it.isNotBlank() },
                        name = level.name,
                        color = level.color,
                        image = level.image,
                        level = level.level,
                        expression = level.logic
                    )
                }
            ).let { requirementAggregateService.updateBadge(it, files)}
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
            return requirementRepository.findByIdentifier(nodeReference)?.id
        }
    }

    private data class InformationConceptData(
        val existingId: InformationConceptId? = null,
        val identifier: InformationConceptIdentifier,
        val name: String,
        val description: String?,
        val unitId: InformationConceptId,
        val expressionOfExpectedValue: String?,
        val dependsOn: List<InformationConceptIdentifier>
    )

    private data class EvidenceTypeData(
        val existingId: InformationConceptId? = null,
        val identifier: String,
        val name: String,
    )

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
        val evidenceTypeIds: List<EvidenceTypeId> = emptyList(),
        val evidenceValidatingCondition: String? = null,
        val requirements: List<RequirementData> = emptyList(),
        val badges: List<BadgeDTO>? = null
    )

    private class ConditionsData(conditions: Collection<DataConditionDTO>?) {
        val validationConditions: List<DataConditionDTO>
        val displayCondition: DataConditionDTO?

        init {
            val mutableConditions = conditions.orEmpty().toMutableList()
            validationConditions = mutableConditions
            displayCondition = mutableConditions.removeFirstOrNull { it.type == DataEvaluationType.display }
        }

        private fun <T> MutableList<T>.removeFirstOrNull(predicate: (T) -> Boolean): T? {
            val index = indexOfFirst(predicate)
            return if (index != -1) removeAt(index) else null
        }
    }
}
