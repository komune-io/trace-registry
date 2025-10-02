package io.komune.registry.script.commons

data class RegistryScriptImportProperties(
    val enabled: Boolean,
    val source: String?,
    val sources: List<String>? = null,
    val preparse: PreparseProperties?,
)

data class PreparseProperties(
    val paths: List<ParsePathProperties>
)

data class ParsePathProperties(
    val source: String,
    val destination: String,
    val cache: String
)
