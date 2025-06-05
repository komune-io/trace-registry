package io.komune.registry.f2.catalogue.draft.domain.model

import io.komune.registry.f2.catalogue.domain.dto.CatalogueDTO
import io.komune.registry.f2.catalogue.domain.dto.CatalogueDTOBase
import io.komune.registry.f2.catalogue.domain.dto.CatalogueDraftRefDTO
import io.komune.registry.f2.organization.domain.model.OrganizationRef
import io.komune.registry.f2.organization.domain.model.OrganizationRefDTO
import io.komune.registry.f2.user.domain.model.UserRef
import io.komune.registry.f2.user.domain.model.UserRefDTO
import io.komune.registry.s2.catalogue.draft.domain.CatalogueDraftState
import io.komune.registry.s2.commons.model.CatalogueDraftId
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.Language
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * @d2 model
 * @parent [io.komune.registry.f2.catalogue.draft.domain.D2CatalogueDraftF2Page]
 * @order 10
 */
@JsExport
interface CatalogueDraftDTO : CatalogueDraftRefDTO {
    /**
     * Id of the draft.
     */
    override val id: CatalogueDraftId

    /**
     * Catalogue containing the data of the draft.
     */
    val catalogue: CatalogueDTO

    /**
     * Id of the original catalogue that the draft is based on.
     */
    override val originalCatalogueId: CatalogueId

    /**
     * Language of the draft.
     */
    override val language: Language

    /**
     * Version of the original catalogue that the draft is based on. 0 means that this draft is the very first version of the catalogue.
     * @example 1
     */
    override val baseVersion: Int

    /**
     * User who created the draft.
     */
    override val creator: UserRefDTO?

    /**
     * User who validated the draft.
     */
    override val validator: UserRefDTO?

    /**
     * Organization that validated the draft.
     */
    override val validatorOrganization: OrganizationRefDTO?

    /**
     * Status of the draft.
     */
    override val status: CatalogueDraftState

    /**
     * Notes about the version
     * @example "Fixed a typo in the description."
     */
    val versionNotes: String?

    /**
     * Reason for rejecting the draft, if relevant.
     * @example "Even my handless grandma could do better."
     */
    val rejectReason: String?

    /**
     * Date when the draft was issued.
     * @example 1739202490000
     */
    val issued: Long

    /**
     * Date when the draft was last modified.
     * @example 1739202490000
     */
    val modified: Long
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueDraftDTOBase(
    override val id: CatalogueDraftId,
    override val catalogue: CatalogueDTOBase,
    override val originalCatalogueId: CatalogueId,
    override val language: Language,
    override val baseVersion: Int,
    override val creator: UserRef?,
    override val validator: UserRef?,
    override val validatorOrganization: OrganizationRef?,
    override val status: CatalogueDraftState,
    override val versionNotes: String?,
    override val rejectReason: String?,
    override val issued: Long,
    override val modified: Long,
) : CatalogueDraftDTO
