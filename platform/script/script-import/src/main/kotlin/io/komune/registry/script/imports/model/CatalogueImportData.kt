package io.komune.registry.script.imports.model

import com.fasterxml.jackson.annotation.JsonSubTypes
import com.fasterxml.jackson.annotation.JsonTypeInfo
import com.fasterxml.jackson.module.kotlin.readValue
import io.komune.registry.api.commons.utils.jsonMapper
import io.komune.registry.s2.catalogue.domain.model.CatalogueAccessRight
import io.komune.registry.s2.catalogue.domain.model.CatalogueConfigurationModel
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
    val configuration: CatalogueConfigurationModel?,
    val img: String?,
    val order: Int?,
    val accessRights: CatalogueAccessRight?,
    val themes: List<ConceptIdentifier>?,
    val parent: CatalogueReferences?,
    val languages: Map<Language, CatalogueTranslationData>,
    val homepage: String?,
    val childrenRefs: List<CatalogueReferences>?,
    val initChildren: List<CatalogueImportData>?,
    val related: Map<String, List<CatalogueReferences>>?,
    val relatedIn: Map<String, List<CatalogueReferences>>?,
    val indicators: Map<InformationConceptIdentifier, String>?,
    val datasets: List<CatalogueDatasetSettings>?,
    val generateNewIdentifier: Boolean = false,
    val checkExistsMethod: CatalogueReferenceMethod
        = if (generateNewIdentifier) CatalogueReferenceMethod.TITLE else CatalogueReferenceMethod.IDENTIFIER,

    @Deprecated("Use 'parent` instead")
    val parents: List<CatalogueParent>? = null,

    @Deprecated("Use 'childrenRefs` instead")
    val children: List<CatalogueId>? = null,
)

@JsonTypeInfo(
    use = JsonTypeInfo.Id.NAME,
    include = JsonTypeInfo.As.PROPERTY,
    property = "method"
)
@JsonSubTypes(
    JsonSubTypes.Type(value = CatalogueReferenceIdentifier::class, name = "IDENTIFIER"),
    JsonSubTypes.Type(value = CatalogueReferenceTitle::class, name = "TITLE"),
    JsonSubTypes.Type(value = CatalogueReferenceChild::class, name = "CHILD")
)
sealed interface CatalogueReferences {
    val method: CatalogueReferenceMethod
}

data class CatalogueReferenceIdentifier(
    val identifiers: List<String>,
    val type: String?,
) : CatalogueReferences {
    override val method: CatalogueReferenceMethod = CatalogueReferenceMethod.IDENTIFIER
}

data class CatalogueReferenceTitle(
    val type: String,
    val titles: List<String>?
) : CatalogueReferences {
    override val method: CatalogueReferenceMethod = CatalogueReferenceMethod.TITLE
}

data class CatalogueReferenceChild(
    val root: CatalogueReferences,
    val child: CatalogueReferences
) : CatalogueReferences {
    override val method: CatalogueReferenceMethod = CatalogueReferenceMethod.CHILD
}

//data class CatalogueReferences(
//    val method: CatalogueReferenceMethod = CatalogueReferenceMethod.IDENTIFIER,
//    val type: String,
//    val identifiers: List<String>?,
//    val titles: List<String>?
//)

enum class CatalogueReferenceMethod {
    IDENTIFIER, TITLE, CHILD
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
        return CatalogueReferenceIdentifier(
            type = type,
            identifiers = listOfNotNull(identifier),
        )
    }
}
