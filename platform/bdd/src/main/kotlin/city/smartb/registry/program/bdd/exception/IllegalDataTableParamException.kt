package city.smartb.registry.program.bdd.exception

open class IllegalDataTableParamException(
    param: String,
    cause: String
): IllegalArgumentException("Parameter `$param` invalid: $cause")
