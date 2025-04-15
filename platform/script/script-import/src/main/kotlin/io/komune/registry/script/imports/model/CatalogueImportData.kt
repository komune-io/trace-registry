package io.komune.registry.script.imports.model

import com.fasterxml.jackson.module.kotlin.readValue
import io.komune.registry.api.commons.utils.jsonMapper
import io.komune.registry.s2.catalogue.domain.model.CatalogueAccessRight
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.CatalogueIdentifier
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.concept.domain.ConceptIdentifier
import io.komune.registry.s2.structure.domain.model.Structure
import io.komune.registry.script.imports.ImportContext
import kotlinx.serialization.Serializable
import java.io.File

typealias CataloguePartialIdentifier = String

data class CatalogueImportData(
    val identifier: CataloguePartialIdentifier,
    val type: String,
    val img: String?,
    val structure: Structure?,
    val accessRights: CatalogueAccessRight?,
    val themes: List<ConceptIdentifier>?,
    val parents: List<CatalogueParent>?,
    val languages: Map<Language, CatalogueTranslationData>,
    val children: List<CatalogueId>?,
    val related: Map<String, List<CatalogueId>>?,
    val datasets: List<CatalogueDatasetSettings>?,
)

@Serializable
data class CatalogueParent(
    val type: String,
    val identifier: String?
)

data class CatalogueTranslationData(
    val title: String?,
    val description: String?,
    val language: Language,

)

fun File.loadJsonCatalogue(
    context: ImportContext
): CatalogueImportData {
    val data = jsonMapper.readValue<CatalogueImportData>(this)
    val fixedData = data.copy(
        identifier = data.buildIdentifier(context)
    )
    return fixedData
}

private fun CatalogueImportData.buildIdentifier(importContext: ImportContext): CatalogueIdentifier {
    val mapType = importContext.mapCatalogueType(type)
    return if (identifier.startsWith(mapType)) {
        identifier
    } else {
        "$mapType-$identifier"
    }
}
