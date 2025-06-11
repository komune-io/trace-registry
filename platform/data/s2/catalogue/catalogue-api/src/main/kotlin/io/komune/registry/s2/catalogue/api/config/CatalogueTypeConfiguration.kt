package io.komune.registry.s2.catalogue.api.config

import io.komune.registry.s2.catalogue.domain.model.structure.CatalogueStructureModel
import io.komune.registry.s2.commons.model.CatalogueType
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.structure.domain.model.Structure
import kotlinx.serialization.Serializable

@Serializable
data class CatalogueTypeConfiguration(
    val type: String,
    val name: Map<Language, String>?,
    val icon: String?,
    val identifierSequence: SequenceConfiguration?,
    val parentTypes: Set<CatalogueType>?,
    val relatedTypes: Map<String, Set<CatalogueType>>?,
    val conceptSchemes: Set<String>?,
    val parentalControl: Boolean = false,
    val writerRoles: Set<String>?,
    val ownerRoles: Set<String>?,
    val structure: CatalogueStructureModel?,
    val i18n: CatalogueTypeI18n?,
    val search: CatalogueTypeSearch?,
    val catalogues: List<CatalogueTypeSubCatalogues>?,
    val datasets: List<CatalogueTypeSubDataset>?,
    val hidden: Boolean = false
)

@Serializable
data class CatalogueTypeI18n(
    val enable: Boolean,
    val translationType: String?,
    val datasets: List<CatalogueTypeSubDataset>?
)

@Serializable
data class CatalogueTypeSearch(
    val enable: Boolean,
    val facets: List<CatalogueTypeSearchFacet>,
)

@Serializable
data class CatalogueTypeSearchFacet(
    val key: String,
    val name: Map<Language, String>
)

@Serializable
data class CatalogueTypeSubDataset(
    val type: String,
    val identifierSuffix: String,
    val title: Map<Language, String>?,
    val structure: Structure?,
    val template: Map<Language, String>?,
    val withEmptyDistribution: Boolean = false
)

@Serializable
data class CatalogueTypeSubCatalogues(
    val type: CatalogueType,
    val identifierSuffix: String,
    val title: Map<Language, String>
)

@Serializable
data class SequenceConfiguration(
    val name: String,
    val startValue: Long = 1,
    val increment: Long = 1
)
