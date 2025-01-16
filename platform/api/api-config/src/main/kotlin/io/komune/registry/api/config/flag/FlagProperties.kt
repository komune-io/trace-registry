package io.komune.registry.api.config.flag

import org.springframework.boot.context.properties.ConfigurationProperties

@ConfigurationProperties("platform.flag")
class FlagProperties(
    val module: ModuleFlagProperties = ModuleFlagProperties()
)

class ModuleFlagProperties(
    val control: Boolean = false,
    val data: Boolean = false,
    val project: Boolean = false,
    val identity: Boolean = false
)

