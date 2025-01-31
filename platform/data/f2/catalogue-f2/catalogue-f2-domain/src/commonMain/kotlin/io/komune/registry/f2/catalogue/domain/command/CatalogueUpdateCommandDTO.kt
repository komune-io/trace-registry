package io.komune.registry.f2.catalogue.domain.command

import f2.dsl.cqrs.Event
import f2.dsl.fnc.F2Function
import io.komune.registry.dsl.dcat.domain.model.Agent
import io.komune.registry.dsl.skos.domain.model.SkosConcept
import io.komune.registry.s2.catalogue.domain.automate.CatalogueId
import io.komune.registry.s2.structure.domain.model.Structure
import kotlinx.serialization.Serializable
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Update a catalogue.
 * @d2 function
 * @parent [io.komune.registry.f2.catalogue.domain.D2CatalogueF2Page]
 * @order 15
 */
typealias CatalogueUpdateFunction = F2Function<CatalogueUpdateCommandDTOBase, CatalogueUpdatedEventDTOBase>

/**
 * @d2 command
 * @parent [CatalogueUpdateFunction]
 */
@JsExport
@JsName("CatalogueUpdateCommandDTO")
interface CatalogueUpdateCommandDTO {
    /**
     * Id of the catalogue to update.
     */
    val id: CatalogueId

    /**
     * @ref [io.komune.registry.f2.catalogue.domain.dto.CatalogueDTO.title]
     */
    val title: String

    /**
     * @ref [io.komune.registry.f2.catalogue.domain.dto.CatalogueDTO.description]
     */
    val description: String?

    val language: String
    val structure: Structure?
    val homepage: String?
    val themes: List<SkosConcept>?
    val creator: Agent?
    val publisher: Agent?
    val validator: Agent?
    val accessRights: String?
    val license: String?

    /**
     * @ref [io.komune.registry.f2.catalogue.domain.dto.CatalogueDTO.hidden]
     */
    val hidden: Boolean?
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueUpdateCommandDTOBase(
    override val id: CatalogueId,
    override val title: String,
    override val description: String? = null,
    override val language: String,
    override val structure: Structure? = null,
    override val homepage: String? = null,
    override val themes: List<SkosConcept>? = null,
    override val creator: Agent? = null,
    override val publisher: Agent? = null,
    override val validator: Agent? = null,
    override val accessRights: String? = null,
    override val license: String? = null,
    override val hidden: Boolean? = null,
): CatalogueUpdateCommandDTO

/**
 * @d2 event
 * @parent [CatalogueUpdateFunction]
 */
@JsExport
@JsName("CatalogueUpdatedEventDTO")
interface CatalogueUpdatedEventDTO: Event {
    /**
     * Id of the updated catalogue.
     */
    val id: CatalogueId
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueUpdatedEventDTOBase(
    override val id: CatalogueId
): CatalogueUpdatedEventDTO
