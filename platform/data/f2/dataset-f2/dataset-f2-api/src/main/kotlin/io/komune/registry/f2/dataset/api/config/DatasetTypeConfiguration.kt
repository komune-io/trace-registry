package io.komune.registry.f2.dataset.api.config

import io.komune.registry.s2.commons.model.InformationConceptIdentifier

data class DatasetTypeConfiguration(
    val type: String,
    val configurations: List<DatasetTypeSpecificConfiguration>,
)

data class DatasetTypeSpecificConfiguration(
    val catalogueTypes: List<String>,
    val aggregators: List<InformationConceptIdentifier>?
)
