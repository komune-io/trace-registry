package io.komune.registry.f2.dataset.domain.command

import f2.dsl.cqrs.Event
import f2.dsl.fnc.F2Function
import io.komune.registry.dsl.dcat.domain.model.Activity
import io.komune.registry.dsl.dcat.domain.model.Agent
import io.komune.registry.dsl.skos.domain.model.SkosConcept
import io.komune.registry.dsl.skos.domain.model.SkosConceptScheme
import io.komune.registry.s2.dataset.domain.automate.DatasetId
import io.komune.registry.s2.dataset.domain.automate.DatasetIdentifier
import kotlinx.serialization.Serializable
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Create a dataset.
 * @d2 function
 * @parent [io.komune.registry.f2.dataset.domain.D2DatasetF2Page]
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
     * @ref [io.komune.registry.f2.dataset.domain.dto.DatasetDTO.title]
     */
    val title: String

    /**
     * @ref [io.komune.registry.f2.dataset.domain.dto.DatasetDTO.type]
     */
    val type: String

    /**
     * @ref [io.komune.registry.f2.dataset.domain.dto.DatasetDTO.description]
     */
    val description: String?

    val language: List<String>?
    val wasGeneratedBy: Activity?
    val source: String?
    val creator: Agent?
    val publisher: Agent?
    val validator: Agent?
    val accessRights: String?
    val license: String?
    val temporalResolution: String?
    val conformsTo: List<SkosConceptScheme>?
    val format: String?
    val theme: List<SkosConcept>?
    val keywords: List<String>?
    val landingPage: String?
    val homepage: String?
    val version: String?
    val versionNotes: String?
    val length: Int?
    val releaseDate: String?
}

/**
 * @d2 inherit
 */
@Serializable
data class DatasetCreateCommandDTOBase(
    override val identifier: String,
    override val title: String,
    override val type: String,
    override val description: String? = null,
    override val language: List<String>? = null,
    override val wasGeneratedBy: Activity? = null,
    override val source: String? = null,
    override val creator: Agent? = null,
    override val publisher: Agent? = null,
    override val validator: Agent? = null,
    override val accessRights: String? = null,
    override val license: String? = null,
    override val temporalResolution: String? = null,
    override val conformsTo: List<SkosConceptScheme>? = null,
    override val format: String? = null,
    override val theme: List<SkosConcept>? = null,
    override val keywords: List<String>? = null,
    override val landingPage: String? = null,
    override val homepage: String? = null,
    override val version: String? = null,
    override val versionNotes: String? = null,
    override val length: Int? = null,
    override val releaseDate: String? = null,
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
}

/**
 * @d2 inherit
 */
@Serializable
data class DatasetCreatedEventDTOBase(
    override val id: DatasetId,
    override val identifier: DatasetIdentifier,
): DatasetCreatedEventDTO
