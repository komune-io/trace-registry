package city.smartb.registry.api.config;

import city.smartb.i2.spring.boot.auth.config.WebSecurityConfig
import jakarta.annotation.security.PermitAll
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration
import org.springframework.context.annotation.Configuration
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity
import org.springframework.security.config.web.server.ServerHttpSecurity
import org.springframework.web.method.HandlerMethod
import org.springframework.web.reactive.result.method.RequestMappingInfo
import org.springframework.web.reactive.result.method.annotation.RequestMappingHandlerMapping

@Configuration
class VerWebSecurityConfig: WebSecurityConfig(){
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
            http.authorizeExchange()
                .pathMatchers(*permitAllBeans)
                .permitAll()
        }
        super.addPermitAllRules(http)
    }
}
