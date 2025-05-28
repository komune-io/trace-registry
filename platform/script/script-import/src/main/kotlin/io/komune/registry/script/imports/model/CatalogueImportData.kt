package io.komune.registry.script.imports.model

import com.fasterxml.jackson.module.kotlin.readValue
import io.komune.registry.api.commons.utils.jsonMapper
import io.komune.registry.s2.catalogue.domain.model.CatalogueAccessRight
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.CatalogueIdentifier
import io.komune.registry.s2.commons.model.InformationConceptIdentifier
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.commons.model.Location
import io.komune.registry.s2.concept.domain.ConceptIdentifier
import io.komune.registry.script.imports.ImportContext
import kotlinx.serialization.Serializable
import java.io.File

typealias CataloguePartialIdentifier = String

data class CatalogueImportData(
    val identifier: CataloguePartialIdentifier,
    val type: String,
    val img: String?,
    val order: Int?,
    val accessRights: CatalogueAccessRight?,
    val themes: List<ConceptIdentifier>?,
    val parent: CatalogueReferences?,
    val languages: Map<Language, CatalogueTranslationData>,
    val homepage: String?,
    val children: List<CatalogueId>?,
    val related: Map<String, List<CatalogueReferences>>?,
    val indicators: Map<InformationConceptIdentifier, String>?,
    val datasets: List<CatalogueDatasetSettings>?,

    @Deprecated("Use 'parent` instead")
    val parents: List<CatalogueParent>? = null,
)

data class CatalogueReferences(
    val method: CatalogueReferenceMethod = CatalogueReferenceMethod.IDENTIFIER,
    val type: String,
    val identifiers: List<String>?,
    val titles: List<String>?
)

enum class CatalogueReferenceMethod {
    IDENTIFIER, TITLE
}

data class CatalogueTranslationData(
    val title: String?,
    val description: String?,
    val language: Language,
    val stakeholder: String? = null,
    val location: Location? = null
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


@Deprecated("Use `CatalogueReferences` instead")
@Serializable
data class CatalogueParent(
    val type: String,
    val identifier: String?
) {
    fun toReferences(): CatalogueReferences {
        return CatalogueReferences(
            method = CatalogueReferenceMethod.IDENTIFIER,
            type = type,
            identifiers = listOfNotNull(identifier),
            titles = null
        )
    }
}
