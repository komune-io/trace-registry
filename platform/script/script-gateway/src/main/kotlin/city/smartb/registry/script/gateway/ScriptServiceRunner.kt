package city.smartb.registry.script.gateway

import city.smartb.registry.script.gateway.config.RetryProperties
import city.smartb.registry.script.gateway.extention.retryOnThrow
import city.smartb.registry.script.init.InitScript
import city.smartb.registry.script.init.RegistryScriptInitProperties
import kotlinx.coroutines.runBlocking
import org.slf4j.LoggerFactory
import org.springframework.boot.CommandLineRunner
import org.springframework.context.ConfigurableApplicationContext
import org.springframework.stereotype.Service

@Service
class ScriptServiceRunner(
    private val context: ConfigurableApplicationContext,
    private val retry: RetryProperties,
    private val properties: RegistryScriptInitProperties
): CommandLineRunner {

    private val logger = LoggerFactory.getLogger(ScriptServiceRunner::class.java)

    override fun run(vararg args: String?) = runBlocking {
        try {
            val initScript = InitScript(properties)
            runScript("Init", initScript::run)
        } catch (_: RuntimeException) {
        } finally {
            context.close()
        }
    }

    @Suppress("TooGenericExceptionThrown")
    suspend fun runScript(script: String, block: suspend () -> Unit) {
        val success = retryOnThrow(
            actionName = script,
            maxRetries = retry.max,
            retryDelayMillis = retry.delayMillis,
            logger = logger
        ) {
            block()
        }

        if (!success) {
            throw RuntimeException()
        }
    }
}
