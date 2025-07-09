package io.komune.registry.s2.commons.model.table

import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface TableColumnPropertiesDTO {
    val limit: Int?
}

@Serializable
data class TableColumnProperties(
    override val limit: Int?,
) : TableColumnPropertiesDTO
