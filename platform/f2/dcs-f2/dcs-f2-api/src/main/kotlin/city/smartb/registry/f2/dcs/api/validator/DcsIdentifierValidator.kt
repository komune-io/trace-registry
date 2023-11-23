package city.smartb.registry.f2.dcs.api.validator

object DcsIdentifierValidator {

    fun check(identifier: String): DcsValidationError? {
        if (!isValidFirstChar(identifier.first())) {
            return DcsValidationError.IllegalIdentifier(identifier, identifier.first(), 0)
        }

        identifier.forEachIndexed { i, char ->
            if (!isValidChar(char)) {
                return DcsValidationError.IllegalIdentifier(identifier, char, i)
            }
        }

        return null
    }

    private fun isLetter(char: Char): Boolean {
        return char in 'a'..'z'
                || char in 'A'..'Z'
    }

    private fun isNumber(char: Char): Boolean {
        return char in '0'..'9'
    }

    private fun isValidFirstChar(char: Char): Boolean {
        return isLetter(char) || char == '_'
    }

    private fun isValidChar(char: Char): Boolean {
        return isLetter(char) || isNumber(char) || char == '_'
    }
}
