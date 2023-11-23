package city.smartb.registry.f2.dcs.api.converter

import cccev.dsl.model.Code
import cccev.dsl.model.DataUnit
import cccev.dsl.model.DataUnitOption
import cccev.dsl.model.DataUnitType
import cccev.dsl.model.Requirement
import cccev.dsl.model.XSDBoolean
import cccev.dsl.model.XSDDate
import cccev.dsl.model.XSDDouble
import cccev.dsl.model.XSDString
import cccev.dsl.model.builder.informationConcept
import cccev.dsl.model.constraint
import cccev.dsl.model.criterion
import cccev.dsl.model.informationRequirement
import cccev.f2.unit.domain.model.DataUnitTypeValues
import city.smartb.registry.f2.dcs.api.validator.DcsValidator
import city.smartb.registry.f2.dcs.domain.model.DataCollectionStep
import city.smartb.registry.f2.dcs.domain.model.DataCondition
import city.smartb.registry.f2.dcs.domain.model.DataConditionTypeValues
import city.smartb.registry.f2.dcs.domain.model.DataField
import city.smartb.registry.f2.dcs.domain.model.DataFieldOption
import city.smartb.registry.f2.dcs.domain.model.DataSection

object DcsToCccevConverter {
    sealed class DcsCode: Code() {
        object DataCollectionStep: DcsCode()
        object Section: DcsCode()
    }

    fun convert(dcs: DataCollectionStep): Requirement {
        DcsValidator.check(dcs)

        return criterion {
            identifier = dcs.identifier
            name = dcs.label
            description = dcs.description
            type = DcsCode.DataCollectionStep
            properties = dcs.properties
            hasRequirement {
                dcs.sections.forEachIndexed { i, section ->
                    +convert(section, i)
                }
            }
        }
    }

    private fun convert(section: DataSection, position: Int): Requirement {
        return criterion {
            identifier = section.identifier
            name = section.label
            description = section.description
            type = DcsCode.Section
            order = position
            properties = section.properties
            hasRequirement {
                section.fields.mapIndexed { i, field ->
                    +convert(field, i)
                }
            }
        }
    }

    private fun convert(field: DataField, position: Int): Requirement {
        val concept = informationConcept {
            identifier = field.name
            name = field.label
            description = field.label
            unit = field.options?.let { options ->
                val unitIdentifier = "${field.name}_options"
                DataUnit(
                    identifier = "",
                    name = "${field.name}_options",
                    type = unitType(field.dataType),
                    options = options.mapIndexed { i, option -> convert(option, unitIdentifier, i) },
                    description = "",
                    notation = null
                )
            } ?: typeToGenericUnit(field.dataType)
        }

        val (displayConditions, validationConditions) = field.conditions.orEmpty().partition {
            it.type == DataConditionTypeValues.display()
        }
        val displayCondition = displayConditions.firstOrNull()

        return informationRequirement {
            identifier = displayCondition?.identifier ?: "${field.name}_${System.currentTimeMillis()}_req"
            name = field.name
            order = position
            required = field.required
            properties = field.properties.orEmpty() + (RequirementPropertyKeys.FIELD_TYPE to field.type)
            hasConcept = mutableListOf(concept)
            enablingCondition = displayCondition?.expression
            enablingConditionDependencies = displayCondition?.dependencies.orEmpty()
            hasRequirement {
                validationConditions.forEach {
                    +buildConstraint(it)
                }
            }
        }
    }

    private fun convert(option: DataFieldOption, unitIdentifier: String, position: Int) = DataUnitOption(
        identifier = "${unitIdentifier}_$position",
        name = option.label,
        value = option.key,
        order = position,
        icon = option.icon,
        color = option.color
    )

    private fun buildConstraint(condition: DataCondition) = constraint {
        identifier = condition.identifier
        validatingCondition = condition.expression
        validatingConditionDependencies = condition.dependencies
        description = condition.error
    }

    private fun typeToGenericUnit(type: String) = when (unitType(type)) {
        DataUnitType.boolean -> XSDBoolean
        DataUnitType.date -> XSDDate
        DataUnitType.number -> XSDDouble
        DataUnitType.string -> XSDString
    }

    private fun unitType(type: String) = when (type) {
        DataUnitTypeValues.boolean() -> DataUnitType.boolean
        DataUnitTypeValues.date() -> DataUnitType.date
        DataUnitTypeValues.number() -> DataUnitType.number
        DataUnitTypeValues.string() -> DataUnitType.string
        else -> DataUnitType.string
    }
}
