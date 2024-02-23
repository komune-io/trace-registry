package city.smartb.registry.f2.dcs.api.validator

import cccev.f2.unit.domain.model.DataUnitTypeValues
import city.smartb.registry.f2.dcs.domain.model.DataCollectionStep
import city.smartb.registry.f2.dcs.domain.model.DataCondition
import city.smartb.registry.f2.dcs.domain.model.DataConditionTypeValues
import city.smartb.registry.f2.dcs.domain.model.DataField
import city.smartb.registry.f2.dcs.domain.model.DataFieldTypeValues

object DcsValidator {
    private val allDataTypes = setOf(
        DataUnitTypeValues.boolean(),
        DataUnitTypeValues.date(),
        DataUnitTypeValues.number(),
        DataUnitTypeValues.string(),
    )

    fun check(dcs: DataCollectionStep) {
        val errors = mutableListOf<DcsValidationError>()

        val entities = buildSet {
            add(dcs.identifier to dcs)
            dcs.sections.forEach { section ->
                add(section.identifier to section)
                section.fields.forEach { field ->
                    field.check(errors)
                    add(field.name to field)
                    field.conditions?.forEach { add(it.identifier to it) }
                }
            }
        }.groupBy { (identifier) -> identifier }
            .mapValues { (_, pairs) -> pairs.map { it.second } }

        entities.forEach { (identifier, entities) ->
            DcsIdentifierValidator.check(identifier)?.let(errors::add)
            if (entities.size > 1) {
                errors.add(DcsValidationError.DuplicatedIdentifier(identifier))
            }
        }

        if (errors.isNotEmpty()) {
            throw DcsValidationException(errors)
        }
    }

    private fun DataField.check(errors: MutableList<DcsValidationError>) {
        if (dataType !in allDataTypes) {
            errors.add(DcsValidationError.IllegalDataType(name, dataType))
        }

        if (type !in DataFieldTypeValues.all) {
            errors.add(DcsValidationError.IllegalFieldType(name, type))
        }

        if (conditions.orEmpty().count { it.type == DataConditionTypeValues.display() } > 1) {
            errors.add(DcsValidationError.TooManyDisplayConditions(name))
        }

        conditions?.forEach { it.check(name, errors) }
    }

    private fun DataCondition.check(fieldIdentifier: String, errors: MutableList<DcsValidationError>) {
        if (type !in DataConditionTypeValues.all) {
            errors.add(DcsValidationError.IllegalConditionType(fieldIdentifier, type))
        }
    }
}
