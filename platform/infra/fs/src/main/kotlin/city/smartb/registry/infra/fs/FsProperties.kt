package city.smartb.registry.infra.fs

import org.springframework.boot.context.properties.ConfigurationProperties

@ConfigurationProperties(prefix = "fs")
data class FsProperties (
    val url: String,
)
