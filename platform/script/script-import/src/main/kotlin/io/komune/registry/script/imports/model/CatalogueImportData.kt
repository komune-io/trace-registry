package io.komune.registry.script.imports.model

import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.concept.domain.ConceptIdentifier

typealias CataloguePartialIdentifier = String

data class CatalogueImportData(
    val identifier: CataloguePartialIdentifier,
    val type: String,
    val img: String?,
    val structure: String?,
    val themes: List<ConceptIdentifier>?,
    val parent: String?,
    val parentType: String?,
    val languages: Map<Language, CatalogueTranslationData>,
)

data class CatalogueTranslationData(
    val title: String?,
    val description: String?,
    val language: Language
)
