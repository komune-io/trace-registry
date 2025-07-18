package io.komune.registry.script.imports.model

import io.komune.registry.s2.catalogue.domain.model.CatalogueAccessRight
import io.komune.registry.s2.cccev.domain.model.AggregatorType
import io.komune.registry.s2.cccev.domain.model.CompositeDataUnitOperator
import io.komune.registry.s2.cccev.domain.model.DataUnitType
import io.komune.registry.s2.commons.model.DataUnitIdentifier
import io.komune.registry.s2.commons.model.InformationConceptIdentifier
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.concept.domain.ConceptIdentifier
import io.komune.registry.script.imports.indicators.IndicatorFormat

data class CatalogueImportSettings(
    val preparse: List<CataloguePreparseSettings>?,
    val jsonPathPattern: String,
    val useDefaultIfUnknownParent: Boolean = false,
    val datasets: List<CatalogueDatasetSettings>?,
    val init: CatalogueInitSettings?,
    val mapping: CatalogueMappingSettings?,
    val defaults: CatalogueDefaultsSettings?,
)

data class CatalogueDatasetSettings(
    val title: Map<Language, String>?,
    val type: String,
    val media: List<CatalogueDatasetMediaSettings>,
    val resourcesDataset: String?,
    val resourcesPathPrefix: PathReplacement?,
    val datasets: List<CatalogueDatasetSettings>?,
    val indicatorFormat: IndicatorFormat = IndicatorFormat.CLASSIC,
    val indicators: Map<Language, String>?,
)

data class CatalogueDatasetMediaSettings(
    val mediaType: String,
    val translations: Map<Language, String>,
)

data class PathReplacement(
    val original: String,
    val replacement: String
)

data class CatalogueInitSettings(
    val concepts: List<ConceptInitData>?,
    val licenses: List<LicenseInitData>?,
    val dataUnits: List<DataUnitInitData>?,
    val informationConcepts: List<InformationConceptInitData>?,
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

data class DataUnitInitData(
    val identifier: DataUnitIdentifier,
    val name: Map<Language, String>,
    val abbreviation: Map<Language, String> = emptyMap(),
    val type: DataUnitType
)

data class InformationConceptInitData(
    val identifier: InformationConceptIdentifier,
    val name: Map<Language, String>,
    val unit: CompositeUnitData?,
    val aggregator: AggregatorSettings?,
    val themes: List<ConceptIdentifier>?,
)

data class CompositeUnitData(
    val left: DataUnitIdentifier,
    val right: DataUnitIdentifier?,
    val operator: CompositeDataUnitOperator = CompositeDataUnitOperator.DIVISION,
)

data class AggregatorSettings(
    val type: AggregatorType,
    val persistValue: Boolean = true,
    val aggregatedConcepts: List<InformationConceptIdentifier>?,
    val defaultValue: String?,
)

data class CatalogueMappingSettings(
    val catalogueTypes: Map<String, String>?,
    val concepts: Map<String, ConceptIdentifier>?
)

data class CatalogueDefaultsSettings(
    val license: String?,
    val accessRights: CatalogueAccessRight?,
    val parent: Map<String, CatalogueParentKey>?
)

data class CatalogueParentKey(
    val identifier: String,
    val type: String
)
