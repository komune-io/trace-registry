package city.smartb.registry.script.gateway.config

import org.springframework.boot.context.properties.ConfigurationProperties

@ConfigurationProperties("registry.script.retry")
data class RetryProperties(
    val max: Int,
    val delayMillis: Long,
)
