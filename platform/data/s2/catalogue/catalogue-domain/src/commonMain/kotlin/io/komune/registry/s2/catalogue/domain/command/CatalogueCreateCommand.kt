package io.komune.registry.s2.catalogue.domain.command

import io.komune.registry.s2.catalogue.domain.model.CatalogueAccessRight
import io.komune.registry.s2.catalogue.domain.model.CatalogueConfigurationModel
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.CatalogueIdentifier
import io.komune.registry.s2.commons.model.DatasetId
import io.komune.registry.s2.commons.model.Location
import io.komune.registry.s2.commons.model.OrganizationId
import io.komune.registry.s2.commons.model.UserId
import io.komune.registry.s2.concept.domain.ConceptId
import io.komune.registry.s2.license.domain.LicenseId
import kotlinx.serialization.Serializable

data class CatalogueCreateCommand(
    val identifier: CatalogueIdentifier,
    val title: String,
    val type: String,
    val language: String?,
    val configuration: CatalogueConfigurationModel?,
    val description: String?,
    val themeIds: Set<ConceptId>,
    val homepage: String?,
    val ownerOrganizationId: OrganizationId?,
    val validatorId: UserId?,
    val validatorOrganizationId: UserId?,
    val stakeholder: String?,
    val isTranslationOf: CatalogueId?,
    val catalogueIds: Set<CatalogueId>,
    val datasetIds: Set<DatasetId>,
    val accessRights: CatalogueAccessRight?,
    val licenseId: LicenseId?,
    val location: Location?,
    val versionNotes: String?,
    val order: Int?,
    val hidden: Boolean,
    val integrateCounter: Boolean?
): CatalogueInitCommand

sealed interface CatalogueDataEvent : CatalogueEvent {
    val title: String
    val language: String?
    val configuration: CatalogueConfigurationModel?
    val description: String?
    val themeIds: Set<ConceptId>
    val homepage: String?
    val ownerOrganizationId: OrganizationId?
    val validatorId: UserId?
    val validatorOrganizationId: UserId?
    val stakeholder: String?
    val accessRights: CatalogueAccessRight
    val licenseId: LicenseId?
    val location: Location?
    val versionNotes: String?
    val order: Int?
    val hidden: Boolean
    val integrateCounter: Boolean?
}

@Serializable
data class CatalogueCreatedEvent(
    override val id: CatalogueId,
    val identifier: CatalogueIdentifier,
    override val title: String,
    val type: String,
    override val language: String?,
    override val configuration: CatalogueConfigurationModel?,
    override val description: String?,
    override val themeIds: Set<ConceptId>,
    override val homepage: String?,
    val isTranslationOf: CatalogueId?,
    val catalogueIds: Set<CatalogueId>,
    val datasetIds: Set<DatasetId>,
    val creatorId: UserId?,
    val creatorOrganizationId: OrganizationId?,
    override val ownerOrganizationId: OrganizationId?,
    override val validatorId: UserId?,
    override val validatorOrganizationId: UserId?,
    override val stakeholder: String?,
    override val accessRights: CatalogueAccessRight,
    override val licenseId: LicenseId?,
    override val location: Location?,
    override val versionNotes: String?,
    override val order: Int?,
    override val hidden: Boolean,
    override val date: Long,
    override val integrateCounter: Boolean?
): CatalogueDataEvent
