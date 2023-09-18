package city.smartb.registry.infra.cccev

import org.springframework.boot.context.properties.ConfigurationProperties

@ConfigurationProperties(prefix = "cccev")
data class CCCEVProperties (
    val url: String,
)
