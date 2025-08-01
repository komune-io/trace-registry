package io.komune.registry.script.imports.model

import io.komune.registry.s2.catalogue.domain.model.CatalogueConfigurationModel
import io.komune.registry.s2.commons.model.InformationConceptIdentifier
import io.komune.registry.s2.commons.model.Language

data class CataloguePreparseSettings(
    val files: Set<String>,
    val languages: Set<Language>,
    val output: String,
    val mapping: CataloguePreparseMapping,
    val generateNewIdentifiers: Boolean = false,
    val checkExistsMethod: CatalogueReferenceMethod
        = if (generateNewIdentifiers) CatalogueReferenceMethod.TITLE else CatalogueReferenceMethod.IDENTIFIER,
)

data class CataloguePreparseMapping(
    val identifier: CataloguePreparseFieldMapping?,
    val parent: CataloguePreparseFieldMapping?,
    val related: Map<String, CataloguePreparseFieldMapping>?,
    val relatedIn: Map<String, CataloguePreparseFieldMapping>?,
    val type: CataloguePreparseFieldMapping,
    val configuration: CatalogueConfigurationModel?,
    val order: CataloguePreparseFieldMapping?,
    val title: CataloguePreparseFieldMapping,
    val description: CataloguePreparseFieldMapping?,
    val image: CataloguePreparseFileFieldMapping?,
    val homepage: CataloguePreparseFieldMapping?,
    val themes: List<CataloguePreparseConceptMapping>?,
    val catalogues: List<CataloguePreparseMapping>?,
    val indicators: Map<InformationConceptIdentifier, CataloguePreparseFieldMapping>?,
    val datasets: List<CataloguePreparseDatasetMapping>?,
)


/* ------------------------ Fields ------------------------ */

data class CataloguePreparseFieldMapping(
    val default: String?,
    val field: String?,
    val valuesMap: Map<String, Any>?,
    val unmappedValues: CataloguePreparseFieldUnmappedBehaviour = CataloguePreparseFieldUnmappedBehaviour.AS_IS,
    val builder: Any?
)

enum class CataloguePreparseFieldUnmappedBehaviour {
    IGNORE, AS_IS, DEFAULT, ERROR
}

data class CataloguePreparseFileFieldMapping(
    val default: String?,
    val field: String?,
    val output: String
)

data class CataloguePreparseConceptMapping(
    val scheme: String,
    val field: String,
    val array: Boolean,
    val id: String,
    val name: String
)


/* ------------------------ Datasets ------------------------ */

data class CataloguePreparseDatasetMapping(
    val type: String,
    val resourcesDataset: String?,
    val resourcesDir: String?,
    val media: List<CataloguePreparseDatasetMediaMapping>,
    val indicators: CataloguePreparseDatasetIndicatorsMapping?,
)

data class CataloguePreparseDatasetMediaMapping(
    val mediaType: String,
    val output: String,
    val source: DatasetMediaSource,
    val fileInput: CataloguePreparseFieldMapping?,
    val fields: List<CataloguePreparseDatasetMediaFieldMapping>?
)

data class CataloguePreparseDatasetMediaFieldMapping(
    val field: String,
    val type: FieldType
)

enum class DatasetMediaSource {
    FILE, FIELDS
}

enum class FieldType {
    TEXT, TEXT_FILE, IMAGE
}

data class CataloguePreparseDatasetIndicatorsMapping(
    val outputDir: String,
    val files: List<CataloguePreparseDatasetIndicatorsFileMapping>
)

data class CataloguePreparseDatasetIndicatorsFileMapping(
    val name: Map<Language, String>,
    val mapping: Map<String, CataloguePreparseIndicatorMapping>
)

data class CataloguePreparseIndicatorMapping(
    val value: CataloguePreparseFieldMapping,
    val unit: CataloguePreparseFieldMapping?,
    val description: CataloguePreparseFieldMapping?
)
