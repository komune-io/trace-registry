package io.komune.registry.script.gateway

import io.komune.registry.script.commons.RegistryScriptProperties
import io.komune.registry.script.gateway.config.RetryProperties
import io.komune.registry.script.gateway.extention.retryOnThrow
import io.komune.registry.script.imports.ImportScript
import io.komune.registry.script.init.InitScript
import io.komune.registry.script.update.UpdateScript
import kotlinx.coroutines.DelicateCoroutinesApi
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import kotlinx.coroutines.runBlocking
import org.slf4j.LoggerFactory
import org.springframework.boot.CommandLineRunner
import org.springframework.context.ConfigurableApplicationContext
import org.springframework.stereotype.Service

@Service
class ScriptServiceRunner(
    private val context: ConfigurableApplicationContext,
    private val retry: RetryProperties,
    private val properties: RegistryScriptProperties,
    private val updateScript: UpdateScript
): CommandLineRunner {

    private val logger = LoggerFactory.getLogger(ScriptServiceRunner::class.java)

    @OptIn(DelicateCoroutinesApi::class)
    override fun run(vararg args: String?) = runBlocking {
        GlobalScope.launch(Dispatchers.IO) {
            try {
                runScript("Init", properties.init.enabled, InitScript(properties)::run)
                runScript("Import", properties.import.enabled, ImportScript(properties)::run)
                runScript("Update", properties.update.enabled, updateScript::run)
            } catch (e: RuntimeException) {
                logger.error("ScriptServiceRunner failed", e)
            } finally {
                context.close()
            }
        }.join()
    }

    @Suppress("TooGenericExceptionThrown")
    suspend fun runScript(script: String, enabled: Boolean, block: suspend () -> Unit) {
        if (!enabled) {
            logger.info("$script script is disabled")
            return
        }

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
