package io.komune.registry.s2.commons.model.table

import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface TableDTO {
    val columns: List<TableColumnDTO>
}

@Serializable
data class Table(
    override val columns: List<TableColumn>
) : TableDTO
