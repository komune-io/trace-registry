package io.komune.sel.ast

import io.komune.sel.evaluator.SelExpressionKey

class SelOperation(
    val operator: SelExpressionKey,
    val arguments: SelArray
): SelNode
