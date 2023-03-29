package city.smartb.registry.program.infra.cccev

import org.springframework.boot.context.properties.ConfigurationProperties

@ConfigurationProperties(prefix = "cccev")
data class CCCEVProperties (
    val url: String,
)
