package io.komune.registry.f2.catalogue.domain.dto

import io.komune.registry.s2.commons.model.CatalogueType
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface CatalogueTypeDTO {
    val identifier: CatalogueType
    val name: String
    val icon: String?
}

@Serializable
data class CatalogueTypeDTOBase(
    override val identifier: CatalogueType,
    override val name: String,
    override val icon: String?
) : CatalogueTypeDTO
