package io.komune.registry.api.config.flag

import f2.dsl.fnc.F2SupplierSingle
import f2.dsl.fnc.f2Function
import f2.dsl.fnc.f2SupplierSingle
import jakarta.annotation.security.PermitAll
import java.net.URI
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.BeanFactory
import org.springframework.boot.context.properties.EnableConfigurationProperties
import org.springframework.cloud.function.context.FunctionCatalog
import org.springframework.cloud.function.context.FunctionProperties
import org.springframework.cloud.function.context.MessageRoutingCallback
import org.springframework.cloud.function.context.config.RoutingFunction
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.context.expression.BeanFactoryResolver
import org.springframework.messaging.Message

@EnableConfigurationProperties(FlagProperties::class)
@Configuration(proxyBeanMethods = false)
class FlagConfiguration(
    private val flagProperties: FlagProperties
) {

    @Bean
    fun customRouter(): MessageRoutingCallback {
        return FlagMessageRoutingCallback(flagProperties)
    }

    @PermitAll
    @Bean
    fun flagGet(): F2SupplierSingle<FlagProperties> = f2SupplierSingle {
        flagProperties
    }

    @Bean
    fun project(
        functionCatalog: FunctionCatalog,
        functionProperties: FunctionProperties,
        beanFactory: BeanFactory,
        callback: MessageRoutingCallback
    ): RoutingFunction {
        return RoutingFunction(functionCatalog, functionProperties, BeanFactoryResolver(beanFactory), callback)
    }

    @Bean
    fun control(
        functionCatalog: FunctionCatalog,
        functionProperties: FunctionProperties,
        beanFactory: BeanFactory,
        callback: MessageRoutingCallback
    ): RoutingFunction {
        return RoutingFunction(functionCatalog, functionProperties, BeanFactoryResolver(beanFactory), callback)
    }

    @Bean
    fun data(
        functionCatalog: FunctionCatalog,
        functionProperties: FunctionProperties,
        beanFactory: BeanFactory,
        callback: MessageRoutingCallback
    ): RoutingFunction {
        return RoutingFunction(functionCatalog, functionProperties, BeanFactoryResolver(beanFactory), callback)
    }

    @Bean
    fun identity(
        functionCatalog: FunctionCatalog,
        functionProperties: FunctionProperties,
        beanFactory: BeanFactory,
        callback: MessageRoutingCallback
    ): RoutingFunction {
        return RoutingFunction(functionCatalog, functionProperties, BeanFactoryResolver(beanFactory), callback)
    }

    @Bean
    fun config(
        functionCatalog: FunctionCatalog,
        functionProperties: FunctionProperties,
        beanFactory: BeanFactory,
        callback: MessageRoutingCallback
    ): RoutingFunction {
        return RoutingFunction(functionCatalog, functionProperties, BeanFactoryResolver(beanFactory), callback)
    }

    @Bean
    fun disabledFunction(flagProperties: FlagProperties) = f2Function<String, Boolean> {
        throw IllegalStateException("Function is disabled")
    }
}

class FlagMessageRoutingCallback(private val flagProperties: FlagProperties) : MessageRoutingCallback {
    private val logger = LoggerFactory.getLogger(javaClass)

    override fun routingResult(message: Message<*>): String {
        val uri = message.headers["uri"] as? String ?: return "disabledFunction"
        val path = URI(uri).path // "cataloguePage"
        val pathParts = path.split("/").filter { it.isNotEmpty() }
        val module = pathParts[pathParts.size - 2]  // "catalogue"
        val functionName = pathParts.last()

        // Define routing logic as a map for better readability
        val modulePrefixFlagMap = mapOf(
            "config" to mapOf(
                "flag" to true
            ),
            "control" to mapOf(
                "activity" to flagProperties.module.control,
                "dcs" to flagProperties.module.control,
            ),
            "data" to mapOf(
                "catalogue" to flagProperties.module.data,
                "dataset" to flagProperties.module.data,
            ),
            "identity" to mapOf(
                "user" to flagProperties.module.identity,
            ),
            "project" to mapOf(
                "chat" to flagProperties.module.project,
                "project" to flagProperties.module.project,
                "asset" to flagProperties.module.project
            ),
        )

        val isEnable = modulePrefixFlagMap[module]?.any { (prefix, functionFlag) ->
            functionName.startsWith(prefix) && functionFlag
        } ?: true

        if (!isEnable) {
            logger.info("Routing to disabled function: $module")
            return "disabledFunction"
        }

        return functionName
    }
}
