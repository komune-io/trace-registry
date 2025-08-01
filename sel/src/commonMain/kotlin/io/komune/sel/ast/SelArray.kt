@file:JsExport
package io.komune.sel.ast

import kotlin.js.JsExport

class SelArray(
    private val values: List<SelNode> = emptyList()
): SelNode, List<SelNode> by values
