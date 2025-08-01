package io.komune.registry.s2.catalogue.domain.model.structure

import io.komune.registry.s2.commons.model.form.Form
import io.komune.registry.s2.commons.model.table.Table
import kotlinx.serialization.Serializable

@Serializable
data class CatalogueStructureModel(
    val type: StructureType?,
    val alias: Boolean = false,
    val color: String?,
    val isTab: Boolean = false,
    val isInventory: Boolean = false,
    val illustration: CatalogueIllustrationType?,
    val creationForm: Form?,
    val metadataForm: Form?,
    val tagForm: Form?,
    val table: Table?,
    val createButton: CatalogueCreateButtonModel?,
    val protocolButton: CatalogueProtocolButtonModel?
)
