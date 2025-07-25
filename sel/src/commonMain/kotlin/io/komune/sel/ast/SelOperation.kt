@file:JsExport
package io.komune.sel.ast

import io.komune.sel.evaluator.SelExpressionKey
import kotlin.js.JsExport

class SelOperation(
    val operator: SelExpressionKey,
    val arguments: SelArray
): SelNode
