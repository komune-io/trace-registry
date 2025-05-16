package io.komune.registry.f2.catalogue.domain.dto.structure

import io.komune.registry.s2.commons.model.form.Form
import io.komune.registry.s2.commons.model.form.FormDTO
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface CatalogueStructureDTO {
    val type: StructureType
    val alias: Boolean
    val color: String?
    val creationForm: FormDTO?
    val metadataForm: FormDTO?
}

@Serializable
data class CatalogueStructure(
    override val type: StructureType,
    override val alias: Boolean = false,
    override val color: String?,
    override val creationForm: Form?,
    override val metadataForm: Form?
) : CatalogueStructureDTO
