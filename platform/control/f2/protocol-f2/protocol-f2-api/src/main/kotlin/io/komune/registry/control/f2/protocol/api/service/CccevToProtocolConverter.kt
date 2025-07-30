package io.komune.registry.control.f2.protocol.api.service

import io.komune.registry.control.core.cccev.requirement.entity.Requirement
import io.komune.registry.control.core.cccev.requirement.model.RequirementKind
import io.komune.registry.control.core.cccev.unit.entity.DataUnitOption
import io.komune.registry.control.f2.protocol.domain.model.DataCollectionStep
import io.komune.registry.control.f2.protocol.domain.model.DataCondition
import io.komune.registry.control.f2.protocol.domain.model.DataConditionType
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
        identifier = identifier,
        label = name,
        description = description,
        type = type.orEmpty(),
        steps = subRequirements
            .filter { it.kind != RequirementKind.CONSTRAINT }
            .map { it.toProtocol() },
        conditions = extractConditions(),
        properties = extractProtocolProperties()
    )

    private fun Requirement.toDataCollectionStep() = DataCollectionStep(
        identifier = identifier,
        label = name,
        description = description,
        sections = subRequirements
            .filter { it.type == ReservedProtocolTypes.DATA_SECTION }
            .map { it.toDataSection() },
        conditions = extractConditions(),
        properties = extractProtocolProperties()
    )

    private fun Requirement.toDataSection() = DataSection(
        identifier = identifier,
        label = name,
        description = description,
        fields = subRequirements
            .filter { it.kind == RequirementKind.INFORMATION }
            .mapNotNull { it.toDataField() },
        conditions = extractConditions(),
        properties = extractProtocolProperties()
    )

    private fun Requirement.toDataField(): DataField? {
        val concept = concepts.firstOrNull()
            ?: return null
        return DataField(
            name = concept.identifier,
            label = name,
            type = type.orEmpty(),
            description = description,
            helperText = properties?.get(RequirementProperties.DataField.HELPER_TEXT),
            unit = DataUnitRef(
                identifier = concept.unit.identifier,
                name = concept.unit.name,
                type = concept.unit.type,
                abbreviation = concept.unit.abbreviation
            ),
            required = required,
            options = concept.unit.options.map { it.toDataFieldOption() }.nullIfEmpty(),
            conditions = extractConditions(),
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
            type = DataConditionType.display,
            identifier = identifier,
            expression = expression,
            dependencies = enablingConditionDependencies.map { it.identifier },
            error = description
        )
    }

    private fun Requirement.extractValidatorConditions(): List<DataCondition> {
        return subRequirements
            .filter { it.kind == RequirementKind.CONSTRAINT }
            .map { constraint ->
                DataCondition(
                    type = DataConditionType.validator,
                    identifier = constraint.identifier,
                    expression = constraint.validatingCondition ?: "true",
                    dependencies = constraint.validatingConditionDependencies.map { it.identifier },
                    error = constraint.description
                )
            }
    }

    private fun Requirement.extractProtocolProperties() = properties?.get(RequirementProperties.PROTOCOL)
}
