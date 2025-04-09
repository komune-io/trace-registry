package io.komune.registry.f2.catalogue.domain.command

import f2.dsl.cqrs.Event
import f2.dsl.fnc.F2Function
import io.komune.registry.s2.catalogue.domain.model.CatalogueAccessRight
import io.komune.registry.s2.commons.model.CatalogueDraftId
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.CatalogueIdentifier
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.commons.model.Location
import io.komune.registry.s2.commons.model.OrganizationId
import io.komune.registry.s2.commons.model.SimpleFile
import io.komune.registry.s2.concept.domain.ConceptId
import io.komune.registry.s2.license.domain.LicenseId
import io.komune.registry.s2.structure.domain.model.Structure
import kotlinx.serialization.Serializable
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Create a catalogue.
 * @d2 function
 * @parent [io.komune.registry.f2.catalogue.domain.D2CatalogueF2Page]
 * @order 10
 */
typealias CatalogueCreateFunction = F2Function<Pair<CatalogueCreateCommandDTOBase, SimpleFile?>, CatalogueCreatedEventDTOBase>

/**
 * @d2 command
 * @parent [CatalogueCreateFunction]
 */
@JsExport
@JsName("CatalogueCreateCommandDTO")
interface CatalogueCreateCommandDTO {
    /**
     * Custom identifier of the new catalogue.
     */
    val identifier: CatalogueIdentifier?

    val parentId: CatalogueId?

    /**
     * @ref [io.komune.registry.f2.catalogue.domain.dto.CatalogueDTO.title]
     */
    val title: String

    /**
     * @ref [io.komune.registry.f2.catalogue.domain.dto.CatalogueDTO.description]
     */
    val description: String?

    val type: String
    val language: Language?
    val structure: Structure?
    val homepage: String?
    val ownerOrganizationId: OrganizationId?
    val stakeholder: String?
    val themes: List<ConceptId>?
    val catalogues: List<CatalogueId>?
    val relatedCatalogueIds: Map<String, List<CatalogueId>>?
    val accessRights: CatalogueAccessRight?
    val license: LicenseId?
    val location: Location?

    val versionNotes: String?

    /**
     * @ref [io.komune.registry.f2.catalogue.domain.dto.CatalogueDTO.hidden]
     */
    val hidden: Boolean?

    val withDraft: Boolean
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueCreateCommandDTOBase(
    override val identifier: CatalogueIdentifier? = null,
    override val parentId: CatalogueId? = null,
    override val title: String,
    override val description: String? = null,
    override val type: String,
    override val language: Language?,
    override val structure: Structure? = null,
    override val homepage: String? = null,
    override val ownerOrganizationId: OrganizationId? = null,
    override val stakeholder: String? = null,
    override val themes: List<ConceptId>? = null,
    override val catalogues: List<CatalogueId>? = null,
    override val relatedCatalogueIds: Map<String, List<CatalogueId>>? = null,
    override val accessRights: CatalogueAccessRight? = null,
    override val license: LicenseId? = null,
    override val location: Location? = null,
    override val versionNotes: String? = null,
    override val hidden: Boolean? = null,
    override val withDraft: Boolean = false,
): CatalogueCreateCommandDTO

/**
 * @d2 event
 * @parent [CatalogueCreateFunction]
 */
@JsExport
@JsName("CatalogueCreatedEventDTO")
interface CatalogueCreatedEventDTO: Event {
    /**
     * Id of the created catalogue.
     */
    val id: CatalogueId

    /**
     * Identifier of the created catalogue.
     */
    val identifier: CatalogueIdentifier

    /**
     * Id of the initialized draft, if any.
     */
    val draftId: CatalogueDraftId?
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueCreatedEventDTOBase(
    override val id: CatalogueId,
    override val identifier: CatalogueIdentifier,
    override val draftId: CatalogueDraftId?,
): CatalogueCreatedEventDTO
