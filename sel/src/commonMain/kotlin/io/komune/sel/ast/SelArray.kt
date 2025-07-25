package io.komune.sel.ast

class SelArray(
    private val values: List<SelNode> = emptyList()
): SelNode, List<SelNode> by values
