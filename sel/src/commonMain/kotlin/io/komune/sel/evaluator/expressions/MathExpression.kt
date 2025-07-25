package io.komune.sel.evaluator.expressions

import io.komune.sel.ast.SelArray
import io.komune.sel.evaluator.SelEvaluationException
import io.komune.sel.evaluator.SelExpression
import io.komune.sel.evaluator.SelExpressionEvaluator
import io.komune.sel.normalizeNumber

abstract class MathExpression: SelExpression {
    protected open val defaultFirstArgument: Number? = null
    protected abstract val minArguments: Int
    protected abstract val maxArguments: Int

    abstract fun evaluateArguments(arguments: List<Number>): Any?

    override fun evaluate(evaluator: SelExpressionEvaluator, arguments: SelArray, data: Any?, jsonPath: String): Any? {
        return evaluateArguments(parseArguments(evaluator, arguments, data, jsonPath)).normalizeNumber()
    }

    protected fun parseArguments(evaluator: SelExpressionEvaluator, arguments: SelArray, data: Any?, jsonPath: String): List<Number> {
        val arguments = evaluator.evaluateArray(arguments, data, jsonPath)
            .flatMapIndexed { i, arg -> arg.parseArgument("$jsonPath[$i]") }
            .toMutableList()

        val originalArgumentsSize = arguments.size
        val actualMinArgumentsSize = if (defaultFirstArgument != null) minArguments - 1 else minArguments

        if (arguments.size < minArguments && defaultFirstArgument != null) {
            arguments.add(0, defaultFirstArgument!!)
        }

        if (arguments.size < minArguments) {
            throw SelEvaluationException(
                "Not enough arguments for operation '$key'. Expected at least $actualMinArgumentsSize, found ${originalArgumentsSize}.",
                "$jsonPath[0]"
            )
        }

        if (maxArguments > 0 && arguments.size > maxArguments) {
            throw SelEvaluationException(
                "Too many arguments for operation '$key'. Expected at most $maxArguments, found ${originalArgumentsSize}.",
                "$jsonPath[$maxArguments]"
            )
        }

        return arguments
    }

    protected fun Any?.parseArgument(jsonPath: String): List<Number> {
        return when (this) {
            is Number -> listOf(this)
            is String -> listOf(this.toLongOrNull() ?: this.toDoubleOrNull() ?: throw SelEvaluationException(
                "Arguments for operation '$key' must be numbers or lists of numbers. Found: $this",
                jsonPath
            ))
            is Iterable<*> -> this.flatMapIndexed { i, arg -> arg.parseArgument("$jsonPath[$i]") }
            is Array<*> -> this.flatMapIndexed { i, arg -> arg.parseArgument("$jsonPath[$i]") }
            else -> throw SelEvaluationException(
                "Arguments for operation '$key' must be numbers or lists of numbers. Found: $this",
                jsonPath
            )
        }
    }

    protected fun Number.isFloat(): Boolean {
        return this is Float || this is Double
    }
}
