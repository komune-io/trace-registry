package io.komune.registry.f2.catalogue.domain.dto.structure

import kotlin.js.JsExport

@JsExport
interface CatalogueStructureDTO {
    val type: StructureType
    val transient: Boolean
    val alias: Boolean
    val creationForm: Any?
    val metadataForm: Any?
}
