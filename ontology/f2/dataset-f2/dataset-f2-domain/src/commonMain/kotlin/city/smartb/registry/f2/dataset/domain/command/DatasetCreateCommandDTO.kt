package city.smartb.registry.f2.dataset.domain.command

import city.smartb.registry.dsl.dcat.domain.model.Activity
import city.smartb.registry.dsl.dcat.domain.model.Agent
import city.smartb.registry.dsl.skos.domain.model.SkosConcept
import city.smartb.registry.dsl.skos.domain.model.SkosConceptScheme
import city.smartb.registry.s2.dataset.domain.automate.DatasetId
import city.smartb.registry.s2.dataset.domain.automate.DatasetIdentifier
import f2.dsl.cqrs.Event
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport
import kotlin.js.JsName
import kotlinx.serialization.Serializable

/**
 * Create a dataset.
 * @d2 function
 * @parent [city.smartb.registry.f2.dataset.domain.D2DatasetF2Page]
 * @order 10
 */
typealias DatasetCreateFunction = F2Function<DatasetCreateCommandDTOBase, DatasetCreatedEventDTOBase>

/**
 * @d2 command
 * @parent [DatasetCreateFunction]
 */
@JsExport
@JsName("DatasetCreateCommandDTO")
interface DatasetCreateCommandDTO {
    /**
     * Custom identifier of the new dataset.
     */
    val identifier: DatasetIdentifier

    /**
     * @ref [city.smartb.registry.f2.dataset.domain.model.DatasetDTO.name]
     */
    val title: String

    /**
     * @ref [city.smartb.registry.f2.dataset.domain.model.DatasetDTO.description]
     */
    val description: String?

    val type: String
    val temporalResolution: String?
    val wasGeneratedBy: Activity?
    val accessRights: String?
    val conformsTo: List<SkosConceptScheme>?
    val creator: Agent?
    val releaseDate: String?
    val updateDate: String?
    val language: List<String>?
    val publisher: Agent?
    val theme: List<SkosConcept>?
    val keywords: List<String>?
    val landingPage: String?
    val version: String?
    val versionNotes: String?
    val length: Int?
}

/**
 * @d2 inherit
 */
@Serializable
data class DatasetCreateCommandDTOBase(
    override val identifier: DatasetIdentifier,
    override val title: String,
    override val description: String? = null,
    override val type: String,
    override val temporalResolution: String? = null,
    override val wasGeneratedBy: Activity? = null,
    override val accessRights: String? = null,
    override val conformsTo: List<SkosConceptScheme>? = null,
    override val creator: Agent? = null,
    override val releaseDate: String? = null,
    override val updateDate: String? = null,
    override val language: List<String>? = null,
    override val publisher: Agent? = null,
    override val theme: List<SkosConcept>? = null,
    override val keywords: List<String>? = null,
    override val landingPage: String? = null,
    override val version: String? = null,
    override val versionNotes: String? = null,
    override val length: Int? = null,
): DatasetCreateCommandDTO

/**
 * @d2 event
 * @parent [DatasetCreateFunction]
 */
@JsExport
@JsName("DatasetCreatedEventDTO")
interface DatasetCreatedEventDTO: Event {
    /**
     * Identifier of the created dataset.
     */
    val id: DatasetId
    /**
     * Identifier of the created dataset.
     */
    val identifier: DatasetIdentifier

    /**
     * @ref [city.smartb.registry.f2.dataset.domain.model.DatasetDTO.name]
     */
    val title: String

    /**
     * @ref [city.smartb.registry.f2.dataset.domain.model.DatasetDTO.description]
     */
    val description: String?

    val type: String
    val temporalResolution: String?
    val wasGeneratedBy: Activity?
    val accessRights: String?
    val conformsTo: List<SkosConceptScheme>?
    val creator: Agent?
    val releaseDate: String?
    val updateDate: String?
    val language: List<String>?
    val publisher: Agent?
    val theme: List<SkosConcept>?
    val keywords: List<String>?
    val landingPage: String?
    val version: String?
    val versionNotes: String?
    val length: Int?
}

/**
 * @d2 inherit
 */
@Serializable
data class DatasetCreatedEventDTOBase(
    override val id: DatasetId,
    override val identifier: DatasetIdentifier,
    override val title: String,
    override val description: String?,
    override val type: String,
    override val theme: List<SkosConcept>? = null,
    override val temporalResolution: String?,
    override val wasGeneratedBy: Activity?,
    override val accessRights: String?,
    override val conformsTo: List<SkosConceptScheme>?,
    override val creator: Agent?,
    override val releaseDate: String?,
    override val updateDate: String?,
    override val language: List<String>?,
    override val publisher: Agent?,
    override val keywords: List<String>?,
    override val landingPage: String?,
    override val version: String?,
    override val versionNotes: String?,
    override val length: Int?,
): DatasetCreatedEventDTO

