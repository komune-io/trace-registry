package io.komune.registry.s2.catalogue.domain.model.structure

import io.komune.registry.s2.commons.model.CatalogueType
import io.komune.registry.s2.commons.model.Language
import kotlinx.serialization.Serializable

@Serializable
data class CatalogueCreateButtonModel(
    val label: Map<Language, String>,
    val kind: CatalogueButtonKind = CatalogueButtonKind.SIMPLE,
    val types: Set<CatalogueType>
)
