package io.komune.registry.f2.catalogue.draft.domain

import io.komune.im.commons.auth.AuthedUserDTO
import io.komune.im.commons.auth.hasOneOfRoles
import io.komune.im.commons.auth.hasRole
import io.komune.registry.f2.catalogue.domain.CataloguePolicies
import io.komune.registry.f2.catalogue.domain.dto.CatalogueAccessDataDTO
import io.komune.registry.f2.catalogue.domain.dto.CatalogueDraftRefDTO
import io.komune.registry.s2.commons.auth.Permissions
import io.komune.registry.s2.commons.utils.isNotNullAnd
import kotlin.js.JsExport

@JsExport
object CatalogueDraftPolicies {
    fun canSeePublished(authedUser: AuthedUserDTO): Boolean {
        return authedUser.hasOneOfRoles(Permissions.CatalogueDraft.READ_ALL)
    }

    fun canCreate(authedUser: AuthedUserDTO, catalogue: CatalogueAccessDataDTO?): Boolean {
        return authedUser.hasOneOfRoles(Permissions.CatalogueDraft.CREATE_ALL) ||
                ((CataloguePolicies.owns(authedUser, catalogue) || catalogue == null)
                    && authedUser.hasRole(Permissions.CatalogueDraft.CREATE_OWNED))
    }

    fun canUpdate(authedUser: AuthedUserDTO, draft: CatalogueDraftRefDTO?) = draft.isNotNullAnd {
        authedUser.owns(it) || authedUser.hasRole(Permissions.CatalogueDraft.WRITE_ALL)
    }

    fun canSubmit(authedUser: AuthedUserDTO, draft: CatalogueDraftRefDTO?) = draft.isNotNullAnd {
        authedUser.owns(it) || authedUser.hasRole(Permissions.CatalogueDraft.WRITE_ALL)
    }

    fun canAudit(authedUser: AuthedUserDTO): Boolean {
        return authedUser.hasRole(Permissions.CatalogueDraft.AUDIT)
    }

    fun canDelete(authedUser: AuthedUserDTO, draft: CatalogueDraftRefDTO?) = draft.isNotNullAnd {
        authedUser.owns(it) || authedUser.hasRole(Permissions.CatalogueDraft.DELETE_ALL)
    }

    private fun AuthedUserDTO.owns(draft: CatalogueDraftRefDTO) = draft.creator?.id == id
}
