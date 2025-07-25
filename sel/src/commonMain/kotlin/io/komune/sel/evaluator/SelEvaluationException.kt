package io.komune.sel.evaluator

import io.komune.sel.SelException

class SelEvaluationException(
    message: String,
    jsonPath: String,
    cause: Throwable? = null
): SelException(message, jsonPath, cause)
