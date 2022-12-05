package city.smartb.registry.program.api.commons

import kotlinx.coroutines.runBlocking
import s2.spring.utils.logger.Logger

@Suppress("TooGenericExceptionCaught")
open class EventHandler {
    protected val logger by Logger()

    fun handleEvent(
        logMessage: String,
        mustHandle: suspend () -> Boolean = { true },
        handleError: suspend (Exception) -> Unit = {},
        exec: suspend () -> Unit
    ) = runBlocking {
        if (mustHandle()) {
            handleEvent(logMessage, {}, handleError) { _ -> exec() }
        }
    }

    fun <T> handleEvent(
        logMessage: String,
        prepareForExecution: suspend () -> T?,
        handleError: suspend (Exception) -> Unit = {},
        exec: suspend (T) -> Unit
    ) = runBlocking {
        val preparation = prepareForExecution() ?: return@runBlocking
        logger.info("$logMessage: Start")

        try {
            exec(preparation)
            logger.info("$logMessage: End")
        } catch (ex: Exception) {
            logger.error("$logMessage: Error", ex)
            handleError(ex)
        }
    }
}
