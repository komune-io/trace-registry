package io.komune.registry.f2.catalogue.api.config

data class CatalogueTypeConfiguration(
    val type: String,
    val identifierSequence: String?,
    val parentTypes: Set<String>?,
    val conceptSchemes: Set<String>?,
    val ownerRoles: Set<String>?,
    val structure: String?,
    val i18n: CatalogueTypeI18n?,
    val datasets: List<CatalogueTypeSubDataset>?,
    val hidden: Boolean = false
)

data class CatalogueTypeI18n(
    val enable: Boolean,
    val translationType: String?
)

data class CatalogueTypeSubDataset(
    val type: String,
    val identifierSuffix: String
)
