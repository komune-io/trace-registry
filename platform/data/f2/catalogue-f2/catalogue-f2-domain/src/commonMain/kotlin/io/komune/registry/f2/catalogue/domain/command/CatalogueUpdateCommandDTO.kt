package io.komune.registry.f2.catalogue.domain.command

import f2.dsl.cqrs.Event
import f2.dsl.fnc.F2Function
import io.komune.registry.s2.catalogue.domain.model.CatalogueAccessRight
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.Location
import io.komune.registry.s2.commons.model.LocationDTO
import io.komune.registry.s2.commons.model.OrganizationId
import io.komune.registry.s2.commons.model.SimpleFile
import io.komune.registry.s2.concept.domain.ConceptId
import io.komune.registry.s2.license.domain.LicenseId
import io.komune.registry.s2.structure.domain.model.Structure
import io.komune.registry.s2.structure.domain.model.StructureDTO
import kotlin.js.JsExport
import kotlinx.serialization.Serializable

/**
 * Update a catalogue.
 * @d2 function
 * @parent [io.komune.registry.f2.catalogue.domain.D2CatalogueF2Page]
 * @order 15
 */
typealias CatalogueUpdateFunction = F2Function<Pair<CatalogueUpdateCommandDTOBase, SimpleFile?>, CatalogueUpdatedEventDTOBase>

/**
 * @d2 command
 * @parent [CatalogueUpdateFunction]
 */
@JsExport
interface CatalogueUpdateCommandDTO {
    /**
     * Id of the catalogue to update.
     */
    val id: CatalogueId

    val parentId: CatalogueId?

    /**
     * @ref [io.komune.registry.f2.catalogue.domain.dto.CatalogueDTO.title]
     */
    val title: String

    /**
     * @ref [io.komune.registry.f2.catalogue.domain.dto.CatalogueDTO.description]
     */
    val description: String?
    val language: String
    val structure: StructureDTO?
    val homepage: String?
    val ownerOrganizationId: OrganizationId?
    val themes: List<ConceptId>?
    val accessRights: CatalogueAccessRight?
    val license: LicenseId?
    val location: LocationDTO?

    /**
     * @ref [io.komune.registry.f2.catalogue.domain.dto.CatalogueDTO.hidden]
     */
    val hidden: Boolean?

    val versionNotes: String?
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueUpdateCommandDTOBase(
    override val id: CatalogueId,
    override val parentId: CatalogueId? = null,
    override val title: String,
    override val description: String? = null,
    override val language: String,
    override val structure: Structure? = null,
    override val homepage: String? = null,
    override val ownerOrganizationId: OrganizationId? = null,
    override val themes: List<ConceptId>? = null,
    override val accessRights: CatalogueAccessRight? = null,
    override val license: LicenseId? = null,
    override val location: Location? = null,
    override val hidden: Boolean? = null,
    override val versionNotes: String? = null,
): CatalogueUpdateCommandDTO

/**
 * @d2 event
 * @parent [CatalogueUpdateFunction]
 */
@JsExport
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
    override val id: CatalogueId,
): CatalogueUpdatedEventDTO
