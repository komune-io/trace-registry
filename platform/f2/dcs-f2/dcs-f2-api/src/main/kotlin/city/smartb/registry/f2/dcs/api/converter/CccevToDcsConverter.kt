package city.smartb.registry.f2.dcs.api.converter

import cccev.f2.requirement.domain.model.RequirementDTOBase
import cccev.f2.unit.domain.model.DataUnitOption
import cccev.s2.requirement.domain.model.RequirementKind
import city.smartb.registry.f2.dcs.api.model.DcsCode
import city.smartb.registry.f2.dcs.domain.model.DataCollectionStep
import city.smartb.registry.f2.dcs.domain.model.DataCondition
import city.smartb.registry.f2.dcs.domain.model.DataConditionTypeValues
import city.smartb.registry.f2.dcs.domain.model.DataField
import city.smartb.registry.f2.dcs.domain.model.DataFieldOption
import city.smartb.registry.f2.dcs.domain.model.DataSection

object CccevToDcsConverter {
    fun convert(cccev: RequirementDTOBase): DataCollectionStep {
        if (cccev.type != DcsCode.DataCollectionStep.toString()) {
            throw IllegalArgumentException("Root requirement must be of type DataCollectionStep")
        }

        return DataCollectionStep(
            identifier = cccev.identifier.orEmpty(),
            label = cccev.name.orEmpty(),
            description = cccev.description,
            properties = cccev.properties,
            sections = cccev.hasRequirement.filter { it.type == DcsCode.Section.toString() }.map(::convertSection)
        )
    }

    private fun convertSection(section: RequirementDTOBase): DataSection {
        return DataSection(
            identifier = section.identifier.orEmpty(),
            label = section.name.orEmpty(),
            description = section.description,
            properties = section.properties,
            fields = section.hasRequirement.filter { it.kind == RequirementKind.INFORMATION.name }.map(::convertField)
        )
    }

    private fun convertField(fieldRequirement: RequirementDTOBase): DataField {
        val concept = fieldRequirement.hasConcept.first()
        val unit = concept.unit
            ?: throw IllegalArgumentException("Concept ${concept.identifier} must have a data unit")

        val conditions = buildList(fieldRequirement.hasRequirement.size + 1) {
            extractDisplayCondition(fieldRequirement)
                ?.let { add(it) }

            fieldRequirement.hasRequirement
                .filter { it.kind == RequirementKind.CONSTRAINT.name }
                .forEach { add(convertValidator(it)) }
        }

        return DataField(
            name = concept.identifier.orEmpty(),
            label = concept.name,
            properties = fieldRequirement.properties,
            options = unit.options?.map(::convertFieldOption),
            type = fieldRequirement.properties?.get(RequirementPropertyKeys.FIELD_TYPE)!!,
            dataType = unit.type,
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

    private fun extractDisplayCondition(field: RequirementDTOBase): DataCondition? {
        return field.enablingCondition?.let {
            DataCondition(
                identifier = field.identifier.orEmpty(),
                type = DataConditionTypeValues.display(),
                expression = field.enablingCondition!!,
                dependencies = field.enablingConditionDependencies.map { it.identifier!! },
                error = null
            )
        }
    }

    private fun convertValidator(constraint: RequirementDTOBase) = DataCondition(
        identifier = constraint.identifier.orEmpty(),
        type = DataConditionTypeValues.validator(),
        expression = constraint.validatingCondition!!,
        dependencies = constraint.validatingConditionDependencies.map { it.identifier!! },
        error = constraint.description
    )
}
