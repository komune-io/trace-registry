package io.komune.registry.s2.commons.model

import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface SortDTO<P: Enum<*>> {
    val property: P
    val ascending: Boolean
    val data: String?
}

@Serializable
data class Sort<P: Enum<*>>(
    override val property: P,
    override val ascending: Boolean,
    override val data: String?
): SortDTO<P>
