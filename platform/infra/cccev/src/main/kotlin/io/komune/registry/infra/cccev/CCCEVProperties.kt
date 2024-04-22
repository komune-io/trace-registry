package io.komune.registry.infra.cccev

import org.springframework.boot.context.properties.ConfigurationProperties

@ConfigurationProperties(prefix = "cccev")
data class CCCEVProperties (
    val url: String,
)
