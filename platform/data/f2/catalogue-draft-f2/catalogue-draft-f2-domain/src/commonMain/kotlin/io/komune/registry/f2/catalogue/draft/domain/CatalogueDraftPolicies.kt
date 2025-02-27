package io.komune.registry.f2.catalogue.draft.domain

import io.komune.im.commons.auth.AuthedUserDTO
import io.komune.im.commons.auth.hasOneOfRoles
import io.komune.im.commons.auth.hasRole
import io.komune.registry.f2.catalogue.domain.dto.CatalogueDraftRefDTO
import io.komune.registry.s2.commons.auth.Permissions
import io.komune.registry.s2.commons.utils.isNotNullAnd
import kotlin.js.JsExport

@JsExport
object CatalogueDraftPolicies {
    fun canCreate(authedUser: AuthedUserDTO): Boolean {
        return authedUser.hasOneOfRoles(Permissions.CatalogueDraft.CREATE)
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

    private fun AuthedUserDTO.owns(draft: CatalogueDraftRefDTO) = draft.creator.id == id
}
