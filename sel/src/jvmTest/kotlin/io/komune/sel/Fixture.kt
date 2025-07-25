package io.komune.sel

data class Fixture(
    val name: String,
    val expression: Any,
    val data: Any?,
    val expected: Any?,
    val errorJsonPath: String?,
)
