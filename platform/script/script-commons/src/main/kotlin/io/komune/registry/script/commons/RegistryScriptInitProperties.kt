package io.komune.registry.script.commons

data class RegistryScriptInitProperties(
    val enabled: Boolean,
    val nbProject: Int,
    val flag: ModuleFlagProperties,
)

data class ModuleFlagProperties(
    val control: Boolean = false,
    val data: Boolean = false,
    val project: Boolean = false,
    val identity: Boolean = false
)
