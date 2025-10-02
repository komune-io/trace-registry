package io.komune.registry.script.update.executor

import kotlin.reflect.KClass

class NoExecutorFoundException(
    type: KClass<*>
): UnsupportedOperationException("No workflow executor registered for type ${type.simpleName}")
