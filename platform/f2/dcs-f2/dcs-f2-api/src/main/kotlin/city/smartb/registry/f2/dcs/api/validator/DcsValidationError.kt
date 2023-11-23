package city.smartb.registry.f2.dcs.api.validator

sealed class DcsValidationError(
    val type: String,
    val message: String
) {
    data class DuplicatedIdentifier(val identifier: String): DcsValidationError(
        type = "DUPLICATED_IDENTIFIER",
        message = "Duplicated identifier [$identifier]"
    )

    data class IllegalIdentifier(val identifier: String, val char: Char, val position: Int): DcsValidationError(
        type = "ILLEGAL_IDENTIFIER",
        message = if (position == 0) {
            "Illegal identifier [$identifier]: first character must be either a letter [a-zA-Z] or underscore '_' (found '$char')"
        } else {
            "Illegal identifier [$identifier]: illegal character '$char' found at position $position " +
                    "(only legal characters are letters [a-zA-Z], numbers [0-9] or underscore '_')"
        }
    )

    data class IllegalFieldType(val fieldIdentifier: String, val fieldType: String): DcsValidationError(
        type = "ILLEGAL_FIELD_TYPE",
        message = "Illegal field type [$fieldType] on field [$fieldIdentifier]"
    )

    data class IllegalDataType(val fieldIdentifier: String, val dataType: String): DcsValidationError(
        type = "ILLEGAL_DATA_TYPE",
        message = "Illegal data type [$dataType] on field [$fieldIdentifier]"
    )

    data class TooManyDisplayConditions(val fieldIdentifier: String): DcsValidationError(
        type = "TOO_MANY_DISPLAY_CONDITIONS",
        message = "A field cannot have more than one display condition (field: [$fieldIdentifier])"
    )

    data class IllegalConditionType(val fieldIdentifier: String, val conditionType: String): DcsValidationError(
        type = "ILLEGAL_CONDITION_TYPE",
        message = "Illegal condition type [$conditionType] (field: [$fieldIdentifier])"
    )
}
