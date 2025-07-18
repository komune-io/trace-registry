package io.komune.registry.api.config;

import io.komune.f2.spring.boot.auth.config.WebSecurityConfig
import jakarta.annotation.security.PermitAll
import org.springframework.context.annotation.Configuration
import org.springframework.security.config.web.server.ServerHttpSecurity
import org.springframework.web.method.HandlerMethod
import org.springframework.web.reactive.result.method.RequestMappingInfo
import org.springframework.web.reactive.result.method.annotation.RequestMappingHandlerMapping

@Configuration
class RgWebSecurityConfig: WebSecurityConfig(){
    override fun addPermitAllRules(http: ServerHttpSecurity) {
        val requestMappingHandlerMapping: RequestMappingHandlerMapping = applicationContext
            .getBean(
                "requestMappingHandlerMapping",
                RequestMappingHandlerMapping::class.java
            )

        val map: Map<RequestMappingInfo, HandlerMethod> = requestMappingHandlerMapping.handlerMethods

        val permitAllBeans = map.filter { (_, method) -> method.hasMethodAnnotation(PermitAll::class.java) }
            .flatMap { (key) -> key.patternsCondition.patterns }
            .map { "$contextPath$it" }
            .toTypedArray()

        if (permitAllBeans.isNotEmpty()) {
            http.authorizeExchange { exchange ->
                exchange.pathMatchers(*permitAllBeans).permitAll()
            }
        }


        val permitAllFunctionBeans = applicationContext.getBeanNamesForAnnotation(PermitAll::class.java)
            .flatMap { bean -> listOf("$contextPath/$bean", "$contextPath/*/$bean"  )}
            .toTypedArray()

        if (permitAllFunctionBeans.isNotEmpty()) {
//            logger.trace("Setting up permitAll for beans: ${permitAllFunctionBeans.joinToString()}")
            http.authorizeExchange { exchange ->
                exchange.pathMatchers(*permitAllFunctionBeans).permitAll()
            }
        }
    }

}
