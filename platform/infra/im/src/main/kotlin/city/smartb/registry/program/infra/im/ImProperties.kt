package city.smartb.registry.program.infra.im

import org.springframework.boot.context.properties.ConfigurationProperties

@ConfigurationProperties(prefix = "im")
data class ImProperties (
    val url: String,
    val auth: ImAuthProperties

)

data class ImAuthProperties (
    val url: String,
    val realm: String,
    val clientId: String,
    val clientSecret: String
)
