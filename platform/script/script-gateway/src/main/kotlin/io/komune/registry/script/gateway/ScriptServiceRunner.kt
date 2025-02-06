package io.komune.registry.script.gateway

import io.komune.registry.script.gateway.config.RetryProperties
import io.komune.registry.script.gateway.extention.retryOnThrow
import io.komune.registry.script.imports.ImportScript
import io.komune.registry.script.init.InitScript
import io.komune.registry.script.init.RegistryScriptInitProperties
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
            val importScript = ImportScript(properties)
//            runScript("Init", initScript::run)
            runScript("Import") { importScript.run("../script-import/src/main/resources/centmillion") }
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
            throw RuntimeException("runScript failed")
        }
    }
}
