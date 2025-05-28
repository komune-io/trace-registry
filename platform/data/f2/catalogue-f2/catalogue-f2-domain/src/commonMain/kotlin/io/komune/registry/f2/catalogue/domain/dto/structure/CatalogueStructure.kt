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
    val illustration: CatalogueIllustrationType?
    val creationForm: FormDTO?
    val metadataForm: FormDTO?
    val createButton: CatalogueCreateButtonDTO?
}

@Serializable
data class CatalogueStructureDTOBase(
    override val type: StructureType,
    override val alias: Boolean = false,
    override val color: String?,
    override val illustration: CatalogueIllustrationType?,
    override val creationForm: Form?,
    override val metadataForm: Form?,
    override val createButton: CatalogueCreateButtonDTOBase?
) : CatalogueStructureDTO

@Serializable
data class CatalogueStructureModel(
    val type: StructureType,
    val alias: Boolean = false,
    val color: String?,
    val illustration: CatalogueIllustrationType?,
    val creationForm: Form?,
    val metadataForm: Form?,
    val createButton: CatalogueCreateButtonModel?
)
