package io.komune.registry.f2.catalogue.domain

import io.komune.im.commons.auth.AuthedUserDTO
import io.komune.im.commons.auth.hasOneOfRoles
import io.komune.im.commons.auth.hasRole
import io.komune.registry.f2.catalogue.domain.dto.CatalogueAccessDataDTO
import io.komune.registry.s2.commons.auth.Permissions
import io.komune.registry.s2.commons.utils.isNotNullAnd
import kotlin.js.JsExport
import kotlin.js.JsName

@JsExport
@JsName("CataloguePolicies")
object CataloguePolicies {
    fun canCreate(authedUser: AuthedUserDTO): Boolean {
        return authedUser.hasOneOfRoles(Permissions.Catalogue.WRITE_ORG, Permissions.Catalogue.WRITE_ALL, Permissions.CatalogueDraft.CREATE)
    }

    fun canUpdate(authedUser: AuthedUserDTO, catalogue: CatalogueAccessDataDTO?): Boolean {
        return canWrite(authedUser, catalogue)
    }

    fun canUpdateAccessRights(authedUser: AuthedUserDTO, catalogue: CatalogueAccessDataDTO?) = catalogue.isNotNullAnd {
        val isInOrganization = authedUser.memberOf.orEmpty() in listOf(it.creatorOrganization?.id, it.ownerOrganization?.id)
        isInOrganization && authedUser.hasRole(Permissions.Catalogue.PUBLISH_ORG)
                || authedUser.hasRole(Permissions.Catalogue.PUBLISH_ALL)
    }

    fun canSetImg(authedUser: AuthedUserDTO, catalogue: CatalogueAccessDataDTO?): Boolean {
        return canWrite(authedUser, catalogue)
    }

    @Suppress("FunctionOnlyReturningConstant")
    fun canDelete(authedUser: AuthedUserDTO, catalogue: CatalogueAccessDataDTO?) = catalogue.isNotNullAnd {
        authedUser.hasRole(Permissions.Catalogue.DELETE_ORG) && authedUser.memberOf.orEmpty() == it.creatorOrganization?.id
                || authedUser.hasRole(Permissions.Catalogue.DELETE_ALL)
    }

    fun canLinkCatalogues(authedUser: AuthedUserDTO, catalogue: CatalogueAccessDataDTO?): Boolean {
        return canWrite(authedUser, catalogue)
    }

    fun canLinkThemes(authedUser: AuthedUserDTO, catalogue: CatalogueAccessDataDTO?): Boolean {
        return canWrite(authedUser, catalogue)
    }

    fun canLinkDatasets(authedUser: AuthedUserDTO, catalogue: CatalogueAccessDataDTO?): Boolean {
        return canWrite(authedUser, catalogue)
    }

    private fun canWrite(authedUser: AuthedUserDTO, catalogue: CatalogueAccessDataDTO?) = catalogue.isNotNullAnd {
        val isInOrganization = authedUser.memberOf.orEmpty() in listOf(it.creatorOrganization?.id, it.ownerOrganization?.id)
        isInOrganization && authedUser.hasRole(Permissions.Catalogue.WRITE_ORG)
                || authedUser.hasRole(Permissions.Catalogue.WRITE_ALL)
    }
}
