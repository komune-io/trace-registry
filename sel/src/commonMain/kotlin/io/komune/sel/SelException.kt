package io.komune.sel

open class SelException(
    message: String,
    val jsonPath: String,
    cause: Throwable? = null
): Exception("$message (Path: $jsonPath)", cause)
