package io.komune.sel.ast

import io.komune.sel.SelException

class SelParseException(
    message: String,
    jsonPath: String,
    cause: Throwable? = null
): SelException(message, jsonPath, cause)
