package io.komune.registry.control.f2.protocol.api.service

import io.komune.registry.control.core.cccev.requirement.entity.Requirement
import io.komune.registry.control.core.cccev.requirement.model.RequirementKind
import io.komune.registry.control.core.cccev.unit.entity.DataUnitOption
import io.komune.registry.control.f2.protocol.api.model.toDTO
import io.komune.registry.control.f2.protocol.domain.model.DataCollectionStep
import io.komune.registry.control.f2.protocol.domain.model.DataCondition
import io.komune.registry.control.f2.protocol.domain.model.DataEvaluation
import io.komune.registry.control.f2.protocol.domain.model.DataEvaluationType
import io.komune.registry.control.f2.protocol.domain.model.DataField
import io.komune.registry.control.f2.protocol.domain.model.DataFieldOption
import io.komune.registry.control.f2.protocol.domain.model.DataSection
import io.komune.registry.control.f2.protocol.domain.model.DataUnitRef
import io.komune.registry.control.f2.protocol.domain.model.Protocol
import io.komune.registry.control.f2.protocol.domain.model.ProtocolDTO
import io.komune.registry.control.f2.protocol.domain.model.RequirementProperties
import io.komune.registry.control.f2.protocol.domain.model.ReservedProtocolTypes
import io.komune.registry.s2.commons.utils.nullIfEmpty

object CccevToProtocolConverter {

    fun convert(requirement: Requirement): ProtocolDTO {
        return requirement.toProtocol()
    }

    private fun Requirement.toProtocol(): ProtocolDTO = when (type) {
       ReservedProtocolTypes.DATA_COLLECTION_STEP -> toDataCollectionStep()
       ReservedProtocolTypes.DATA_SECTION -> toDataSection()
       else -> toGenericProtocol()
   }

    private fun Requirement.toGenericProtocol() = Protocol(
        id = id,
        identifier = identifier,
        label = name,
        description = description,
        type = type.orEmpty(),
        steps = sortedSubRequirements()
            .filter { it.kind != RequirementKind.CONSTRAINT }
            .map { it.toProtocol() },
        conditions = extractConditions(),
        properties = extractProtocolProperties(),
        badges = badges.map { it.toDTO() }
    )

    private fun Requirement.toDataCollectionStep() = DataCollectionStep(
        id = id,
        identifier = identifier,
        label = name,
        description = description,
        sections = sortedSubRequirements()
            .filter { it.type == ReservedProtocolTypes.DATA_SECTION }
            .map { it.toDataSection() },
        conditions = extractConditions(),
        properties = extractProtocolProperties(),
        badges = badges.map { it.toDTO() }
    )

    private fun Requirement.toDataSection() = DataSection(
        id = id,
        identifier = identifier,
        label = name,
        description = description,
        fields = sortedSubRequirements()
            .filter { it.kind == RequirementKind.INFORMATION }
            .mapNotNull { it.toDataField() },
        conditions = extractConditions(),
        properties = extractProtocolProperties(),
        badges = badges.map { it.toDTO() }
    )

    private fun Requirement.toDataField(): DataField? {
        val concept = concepts.firstOrNull()
        val evidenceType = evidenceTypes.firstOrNull()
        if (concept == null && evidenceType == null) return null

        return DataField(
            name = concept?.identifier ?: evidenceType!!.identifier,
            label = name,
            type = type.orEmpty(),
            isEvidence = evidenceType != null,
            description = description,
            helperText = properties?.get(RequirementProperties.DataField.HELPER_TEXT),
            unit = concept?.unit?.let {
                DataUnitRef(
                    identifier = it.identifier,
                    name = it.name,
                    type = it.type,
                    abbreviation = it.abbreviation
                )
            },
            required = required,
            options = concept?.unit?.options?.map { it.toDataFieldOption() }?.nullIfEmpty(),
            conditions = extractConditions(),
            autoCompute = concept?.expressionOfExpectedValue?.let { expression ->
                DataEvaluation(
                    logic = expression,
                    dependencies = concept.dependencies.map { it.identifier }
                )
            },
            properties = extractProtocolProperties()
        )
    }

    private fun DataUnitOption.toDataFieldOption() = DataFieldOption(
        key = value,
        label = name,
        icon = icon,
        color = color
    )

    private fun Requirement.extractConditions() = buildList {
        extractDisplayCondition()?.let { add(it) }
        addAll(extractValidatorConditions())
    }

    private fun Requirement.extractDisplayCondition(): DataCondition? = enablingCondition?.let { expression ->
        DataCondition(
            type = DataEvaluationType.display,
            identifier = identifier,
            logic = expression,
            dependencies = enablingConditionDependencies.map { it.identifier },
            error = description
        )
    }

    private fun Requirement.extractValidatorConditions(): List<DataCondition> {
        return sortedSubRequirements()
            .filter { it.kind == RequirementKind.CONSTRAINT }
            .map { constraint ->
                val isEvidenceCondition = constraint.evidenceValidatingCondition != null

                val (expression, dependencies) = if (isEvidenceCondition) {
                    constraint.evidenceValidatingCondition to constraint.evidenceTypes.map { it.identifier }
                } else {
                    constraint.validatingCondition to constraint.validatingConditionDependencies.map { it.identifier }
                }

                DataCondition(
                    type = DataEvaluationType.validator,
                    isValidatingEvidences = isEvidenceCondition,
                    identifier = constraint.identifier,
                    logic = inverseCondition(expression ?: "true"),
                    dependencies = dependencies,
                    error = constraint.description
                )
            }
    }

    private fun Requirement.extractProtocolProperties() = properties?.get(RequirementProperties.PROTOCOL)

    private fun Requirement.sortedSubRequirements() = subRequirements.sortedBy { it.order ?: Int.MAX_VALUE }

    // inverse the condition logic for front autoform validation
    private fun inverseCondition(logic: String): String {
        return """{ "!": $logic }"""
    }
}
