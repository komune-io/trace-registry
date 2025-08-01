package io.komune.registry.test

import io.komune.registry.api.config.RgWebSecurityConfig
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration
import org.springframework.context.annotation.Configuration
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity

@Configuration
@EnableWebFluxSecurity
@SpringBootApplication(exclude=[SecurityAutoConfiguration::class])
class RgTestWebSecurityConfig: RgWebSecurityConfig()
