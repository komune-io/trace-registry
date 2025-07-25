package io.komune.sel.evaluator.expressions

object ArrayMapExpression: ArrayIterateExpression<Any?, List<Any?>>() {
    override val key: String = "map"

    override fun evaluateArray(array: Iterable<Any?>, evalItem: (Int, Any?) -> Any?): List<Any?> {
        return array.mapIndexed(evalItem)
    }
}
