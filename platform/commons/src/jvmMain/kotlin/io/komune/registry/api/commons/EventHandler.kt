package io.komune.registry.api.commons

import s2.spring.utils.logger.Logger

@Suppress("TooGenericExceptionCaught")
open class EventHandler {
    protected val logger by Logger()

    suspend fun handleEvent(
        logMessage: String,
        mustHandle: suspend () -> Boolean = { true },
        handleError: suspend (Exception) -> Unit = {},
        exec: suspend () -> Unit
    ) {
        if (mustHandle()) {
            doHandleEvent(logMessage, {}, handleError) { _ -> exec() }
        }
    }

    suspend fun <T> handleEvent(
        logMessage: String,
        prepareForExecution: suspend () -> T?,
        handleError: suspend (Exception) -> Unit = {},
        exec: suspend (T) -> Unit
    ) {
        doHandleEvent(logMessage, prepareForExecution, handleError, exec)
    }

    private suspend fun <T> doHandleEvent(
        logMessage: String,
        prepareForExecution: suspend () -> T?,
        handleError: suspend (Exception) -> Unit = {},
        exec: suspend (T) -> Unit
    ) {
        val preparation = prepareForExecution() ?: return
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
