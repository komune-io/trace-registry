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
        owns(authedUser, catalogue) && authedUser.hasRole(Permissions.Catalogue.PUBLISH_ORG)
                || authedUser.hasRole(Permissions.Catalogue.PUBLISH_ALL)
    }

    fun canUpdateOwner(authedUser: AuthedUserDTO, catalogue: CatalogueAccessDataDTO?): Boolean {
        return when {
            authedUser.hasRole(Permissions.Catalogue.GRANT_OWNERSHIP_ALL) -> true
            catalogue == null -> authedUser.hasRole(Permissions.Catalogue.GRANT_OWNERSHIP_OWNED) // creation
            else -> owns(authedUser, catalogue) && authedUser.hasRole(Permissions.Catalogue.GRANT_OWNERSHIP_OWNED)
        }
    }

    fun canSetImg(authedUser: AuthedUserDTO, catalogue: CatalogueAccessDataDTO?): Boolean {
        return canWrite(authedUser, catalogue)
    }

    fun canDelete(authedUser: AuthedUserDTO, catalogue: CatalogueAccessDataDTO?) = catalogue.isNotNullAnd {
        authedUser.hasRole(Permissions.Catalogue.DELETE_ORG) && owns(authedUser, catalogue)
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

    fun canFillCertification(authedUser: AuthedUserDTO, catalogue: CatalogueAccessDataDTO?): Boolean {
        return (owns(authedUser, catalogue) && authedUser.hasRole(Permissions.Catalogue.FILL_CERTIFICATION_ORG))
                || authedUser.hasRole(Permissions.Catalogue.FILL_CERTIFICATION_ALL)
    }

    private fun canWrite(authedUser: AuthedUserDTO, catalogue: CatalogueAccessDataDTO?) = catalogue.isNotNullAnd {
        canWriteOnCatalogueWith(authedUser, it.creatorOrganization?.id, it.ownerOrganization?.id)
    }

    @JsExport.Ignore
    fun owns(authedUser: AuthedUserDTO, catalogue: CatalogueAccessDataDTO?) = catalogue.isNotNullAnd {
        ownsCatalogueWith(authedUser, it.creator?.id, it.creatorOrganization?.id, it.ownerOrganization?.id)
    }

    @JsExport.Ignore
    fun ownsCatalogueWith(
        authedUser: AuthedUserDTO,
        creatorId: UserId?,
        creatorOrganizationId: OrganizationId?,
        ownerOrganizationId: OrganizationId?
    ): Boolean {
        return if (ownerOrganizationId != null) {
            authedUser.memberOf == ownerOrganizationId
        } else {
            authedUser.memberOf == creatorOrganizationId
                    || authedUser.id == creatorId
        }
    }

    @JsExport.Ignore
    fun canWriteOnCatalogueWith(
        authedUser: AuthedUserDTO,
        creatorOrganizationId: OrganizationId?,
        ownerOrganizationId: OrganizationId?
    ): Boolean {
        val ownsCatalogue = ownsCatalogueWith(authedUser, null, creatorOrganizationId, ownerOrganizationId)
        return ownsCatalogue && authedUser.hasRole(Permissions.Catalogue.WRITE_ORG)
                || authedUser.hasRole(Permissions.Catalogue.WRITE_ALL)
    }

    @JsExport.Ignore
    fun canReadCatalogueWith(
        authedUser: AuthedUserDTO?,
        accessRights: CatalogueAccessRight,
        creatorOrganizationId: OrganizationId?,
        ownerOrganizationId: OrganizationId?,
        creatorId: UserId? = null
    ): Boolean = when {
        authedUser == null -> accessRights.isPublicOrProtected()
        authedUser.hasRole(Permissions.Catalogue.READ_ALL) -> true
        authedUser.hasRole(Permissions.Catalogue.READ_ORG) -> accessRights.isPublicOrProtected()
                || ownsCatalogueWith(authedUser, creatorId, creatorOrganizationId, ownerOrganizationId)
        else -> accessRights.isPublicOrProtected()
    }
}
