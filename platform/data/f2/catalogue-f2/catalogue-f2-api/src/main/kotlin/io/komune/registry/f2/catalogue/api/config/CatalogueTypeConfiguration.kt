package io.komune.registry.f2.catalogue.api.config

data class CatalogueTypeConfiguration(
    val type: String,
    val identifierSequence: String?,
    val parentTypes: List<String>?,
    val datasets: List<CatalogueTypeSubDataset>
)

data class CatalogueTypeSubDataset(
    val type: String,
    val identifierSuffix: String
)
