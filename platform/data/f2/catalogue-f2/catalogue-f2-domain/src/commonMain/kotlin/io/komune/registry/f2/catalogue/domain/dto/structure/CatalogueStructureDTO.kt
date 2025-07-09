package io.komune.registry.f2.catalogue.domain.dto.structure

import io.komune.registry.s2.catalogue.domain.model.structure.CatalogueIllustrationType
import io.komune.registry.s2.catalogue.domain.model.structure.StructureType
import io.komune.registry.s2.commons.model.form.Form
import io.komune.registry.s2.commons.model.form.FormDTO
import io.komune.registry.s2.commons.model.table.Table
import io.komune.registry.s2.commons.model.table.TableDTO
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface CatalogueStructureDTO {
    val type: StructureType?
    val alias: Boolean
    val color: String?
    val isTab: Boolean
    val isInventory: Boolean
    val illustration: CatalogueIllustrationType?
    val creationForm: FormDTO?
    val metadataForm: FormDTO?
    val tagForm: FormDTO?
    val table: TableDTO?
    val createButton: CatalogueCreateButtonDTO?
}

@Serializable
data class CatalogueStructureDTOBase(
    override val type: StructureType?,
    override val alias: Boolean = false,
    override val color: String?,
    override val isTab: Boolean = false,
    override val isInventory: Boolean = false,
    override val illustration: CatalogueIllustrationType?,
    override val creationForm: Form?,
    override val metadataForm: Form?,
    override val tagForm: Form?,
    override val table: Table?,
    override val createButton: CatalogueCreateButtonDTOBase?
) : CatalogueStructureDTO
