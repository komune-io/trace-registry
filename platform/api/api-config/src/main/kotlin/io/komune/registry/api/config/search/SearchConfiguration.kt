package io.komune.registry.api.config.search

import org.springframework.boot.context.properties.EnableConfigurationProperties
import org.springframework.context.annotation.Configuration

@EnableConfigurationProperties(SearchProperties::class)
@Configuration(proxyBeanMethods = false)
class SearchConfiguration
