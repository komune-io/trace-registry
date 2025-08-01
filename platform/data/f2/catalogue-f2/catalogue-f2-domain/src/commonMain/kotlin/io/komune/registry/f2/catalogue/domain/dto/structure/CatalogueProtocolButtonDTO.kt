package io.komune.registry.f2.catalogue.domain.dto.structure

import io.komune.registry.s2.commons.model.form.Form
import io.komune.registry.s2.commons.model.form.FormDTO
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface CatalogueProtocolButtonDTO {
    val label: String
    val form: FormDTO
}

@Serializable
data class CatalogueProtocolButtonDTOBase(
    override val label: String,
    override val form: Form
) : CatalogueProtocolButtonDTO
