package io.komune.registry.f2.catalogue.domain.dto.structure

import io.komune.registry.f2.catalogue.domain.dto.CatalogueTypeDTO
import io.komune.registry.f2.catalogue.domain.dto.CatalogueTypeDTOBase
import io.komune.registry.s2.commons.model.CatalogueType
import io.komune.registry.s2.commons.model.Language
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface CatalogueCreateButtonDTO {
    val label: String
    val kind: CatalogueButtonKind
    val types: List<CatalogueTypeDTO>
}

@Serializable
data class CatalogueCreateButtonDTOBase(
    override val label: String,
    override val kind: CatalogueButtonKind,
    override val types: List<CatalogueTypeDTOBase>
) : CatalogueCreateButtonDTO

@Serializable
data class CatalogueCreateButtonModel(
    val label: Map<Language, String>,
    val kind: CatalogueButtonKind = CatalogueButtonKind.SIMPLE,
    val types: Set<CatalogueType>
)
