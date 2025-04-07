package io.komune.registry.api.config.ui

import org.springframework.boot.context.properties.EnableConfigurationProperties
import org.springframework.context.annotation.Configuration

@EnableConfigurationProperties(UIProperties::class)
@Configuration(proxyBeanMethods = false)
class UIConfiguration
