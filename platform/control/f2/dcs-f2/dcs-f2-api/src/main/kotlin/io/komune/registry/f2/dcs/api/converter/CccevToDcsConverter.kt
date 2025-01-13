package io.komune.registry.f2.dcs.api.converter

import cccev.dsl.model.DataUnitOption
import cccev.dsl.model.Requirement
import cccev.dsl.model.RequirementKind
import io.komune.registry.f2.dcs.api.model.DcsCode
import io.komune.registry.f2.dcs.domain.model.DataCollectionStep
import io.komune.registry.f2.dcs.domain.model.DataCondition
import io.komune.registry.f2.dcs.domain.model.DataConditionTypeValues
import io.komune.registry.f2.dcs.domain.model.DataField
import io.komune.registry.f2.dcs.domain.model.DataFieldOption
import io.komune.registry.f2.dcs.domain.model.DataSection

object CccevToDcsConverter {
    fun convert(cccev: Requirement): DataCollectionStep {
        if (cccev.type.toString() != DcsCode.DataCollectionStep.toString()) {
            throw IllegalArgumentException("Root requirement must be of type DataCollectionStep")
        }

        return DataCollectionStep(
            identifier = cccev.identifier,
            label = cccev.name.orEmpty(),
            description = cccev.description,
            properties = cccev.properties,
            sections = cccev.hasRequirement
                ?.filter { it.type.toString() == DcsCode.Section.toString() }
                ?.map(CccevToDcsConverter::convertSection) ?: emptyList()
        )
    }

    private fun convertSection(section: Requirement): DataSection {
        return DataSection(
            identifier = section.identifier,
            label = section.name,
            description = section.description,
            properties = section.properties,
            fields = section.hasRequirement?.filter { it.kind == RequirementKind.INFORMATION.name }?.map(
                CccevToDcsConverter::convertField
            ) ?: emptyList()
        )
    }

    private fun convertField(fieldRequirement: Requirement): DataField {
        val concept = fieldRequirement.hasConcept?.firstOrNull()
        val unit = concept?.unit
            ?: throw IllegalArgumentException("Concept ${concept?.identifier} must have a data unit")
        val hasRequirement = fieldRequirement.hasRequirement ?: emptyList()
        val conditions = buildList(hasRequirement.size + 1) {
            extractDisplayCondition(fieldRequirement)
                ?.let { add(it) }

            hasRequirement
                .filter { it.kind == RequirementKind.CONSTRAINT.name }
                .forEach { add(convertValidator(it)) }
        }.takeIf { it.isNotEmpty() }

        return DataField(
            name = concept.identifier,
            label = concept.name,
            properties = fieldRequirement.properties,
            options = unit.options?.map(CccevToDcsConverter::convertFieldOption),
            type = fieldRequirement.properties?.get(RequirementPropertyKeys.FIELD_TYPE)!!,
            dataType = unit.type.toString(),
            required = fieldRequirement.required,
            conditions = conditions
        )
    }

    private fun convertFieldOption(option: DataUnitOption) = DataFieldOption(
        key = option.identifier,
        label = option.name,
        icon = option.icon,
        color = option.color
    )

    private fun extractDisplayCondition(field: Requirement): DataCondition? {
        return field.enablingCondition?.let {
            DataCondition(
                identifier = field.identifier,
                type = DataConditionTypeValues.display(),
                expression = field.enablingCondition!!,
                dependencies = field.enablingConditionDependencies?.map { it },
                error = null
            )
        }
    }

    private fun convertValidator(constraint: Requirement) = DataCondition(
        identifier = constraint.identifier,
        type = DataConditionTypeValues.validator(),
        expression = constraint.validatingCondition!!,
        dependencies = constraint.validatingConditionDependencies?.map { it },
        error = constraint.description
    )
}
