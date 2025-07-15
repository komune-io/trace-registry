package io.komune.registry.s2.commons.model.table

import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface TableColumnDTO {
    val type: String
    val label: String
    val value: String
    val properties: TableColumnPropertiesDTO?
    val style: Map<String, String>?
}

@Serializable
data class TableColumn(
    override val type: String,
    override val label: String,
    override val value: String,
    override val properties: TableColumnProperties?,
    override val style: Map<String, String>?
) : TableColumnDTO
