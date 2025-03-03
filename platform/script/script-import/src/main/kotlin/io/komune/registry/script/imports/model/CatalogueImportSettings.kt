package io.komune.registry.script.imports.model

import io.komune.registry.s2.catalogue.domain.model.CatalogueAccessRight
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.concept.domain.ConceptIdentifier

data class CatalogueImportSettings(
    val jsonPathPattern: String,
    val useDefaultIfUnknownParent: Boolean = false,
    val datasets: List<CatalogueDatasetSettings>?,
    val init: CatalogueInitSettings?,
    val mapping: CatalogueMappingSettings?,
    val defaults: CatalogueDefaultsSettings?,
)

data class CatalogueDatasetSettings(
    val type: String,
    val mediaType: String,
    val translations: Map<Language, String>,
    val resourcesDataset: String?,
    val resourcesPathPrefix: PathReplacement?
)

data class PathReplacement(
    val original: String,
    val replacement: String
)

data class CatalogueInitSettings(
    val concepts: List<ConceptInitData>?,
    val licenses: List<LicenseInitData>?,
    val catalogues: List<CatalogueImportData>?
)

data class ConceptInitData(
    val identifier: ConceptIdentifier,
    val prefLabels: Map<Language, String>,
    val definitions: Map<Language, String>?,
    val schemes: List<String>?
)

data class LicenseInitData(
    val identifier: String,
    val name: String,
    val url: String?
)

data class CatalogueMappingSettings(
    val catalogueTypes: Map<String, String>?,
    val concepts: Map<String, ConceptIdentifier>?
)

data class CatalogueDefaultsSettings(
    val license: String?,
    val accessRights: CatalogueAccessRight?,
    val structure: String?,
    val parent: Map<String, CatalogueParentKey>?
)

data class CatalogueParentKey(
    val identifier: String,
    val type: String
)
