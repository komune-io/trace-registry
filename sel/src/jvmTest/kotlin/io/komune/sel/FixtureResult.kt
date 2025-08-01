package io.komune.sel

data class FixtureResult(
    val name: String,
    val file: String,
    val success: Boolean,
    val error: String? = null,
    val cause: Throwable? = null
)
