package io.komune.registry.f2.catalogue.domain

import io.komune.im.commons.auth.AuthedUserDTO
import io.komune.im.commons.auth.hasOneOfRoles
import io.komune.im.commons.auth.hasRole
import io.komune.registry.f2.catalogue.domain.dto.CatalogueAccessDataDTO
import io.komune.registry.s2.catalogue.domain.model.CatalogueAccessRight
import io.komune.registry.s2.commons.auth.Features
import io.komune.registry.s2.commons.auth.Permissions
import io.komune.registry.s2.commons.model.OrganizationId
import io.komune.registry.s2.commons.model.UserId
import io.komune.registry.s2.commons.utils.isNotNullAnd
import kotlin.js.JsExport

@JsExport
object CataloguePolicies {
    fun canSeeMyOrganization(authedUser: AuthedUserDTO): Boolean {
        return authedUser.hasRole(Features.CATALOGUE)
    }

    fun canCreate(authedUser: AuthedUserDTO): Boolean {
        return canCreateWithoutDraft(authedUser)
                || authedUser.hasOneOfRoles(Permissions.CatalogueDraft.CREATE_ALL, Permissions.CatalogueDraft.CREATE_OWNED)
    }

    fun canCreateWithoutDraft(authedUser: AuthedUserDTO): Boolean {
        return authedUser.hasOneOfRoles(Permissions.Catalogue.WRITE_ORG, Permissions.Catalogue.WRITE_ALL)
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

    fun canReferenceDatasets(authedUser: AuthedUserDTO, catalogue: CatalogueAccessDataDTO?): Boolean {
        return canWrite(authedUser, catalogue)
    }

    fun canSetAggregator(authedUser: AuthedUserDTO, catalogue: CatalogueAccessDataDTO?): Boolean {
        return canWrite(authedUser, catalogue)
    }

    private fun canWrite(authedUser: AuthedUserDTO, catalogue: CatalogueAccessDataDTO?) = catalogue.isNotNullAnd {
        canWriteOnCatalogueWith(authedUser, it.creatorOrganization?.id, it.ownerOrganization?.id)
    }

    @JsExport.Ignore
    fun owns(authedUser: AuthedUserDTO, catalogue: CatalogueAccessDataDTO?) = catalogue.isNotNullAnd {
        authedUser.id == it.creator?.id
                || authedUser.memberOf.orEmpty() in listOf(it.creatorOrganization?.id, it.ownerOrganization?.id)
    }

    @JsExport.Ignore
    fun canWriteOnCatalogueWith(
        authedUser: AuthedUserDTO,
        creatorOrganizationId: OrganizationId?,
        ownerOrganizationId: OrganizationId?
    ): Boolean {
        val isInOrganization = authedUser.memberOf.orEmpty() in listOf(creatorOrganizationId, ownerOrganizationId)
        return isInOrganization && authedUser.hasRole(Permissions.Catalogue.WRITE_ORG)
                || authedUser.hasRole(Permissions.Catalogue.WRITE_ALL)
    }

    @JsExport.Ignore
    fun canReadCatalogueWith(
        authedUser: AuthedUserDTO?,
        accessRights: CatalogueAccessRight,
        creatorOrganizationId: OrganizationId?,
        ownerOrganizationId: OrganizationId?,
        creatorId: UserId?
    ): Boolean = when {
        authedUser == null -> accessRights == CatalogueAccessRight.PUBLIC
        authedUser.hasRole(Permissions.Catalogue.READ_ALL) -> true
        authedUser.hasRole(Permissions.Catalogue.READ_ORG) -> accessRights == CatalogueAccessRight.PUBLIC
                || creatorOrganizationId == authedUser.memberOf.orEmpty()
                || ownerOrganizationId == authedUser.memberOf.orEmpty()
                || creatorId == authedUser.id
        else -> accessRights == CatalogueAccessRight.PUBLIC || creatorId == authedUser.id
    }
}
