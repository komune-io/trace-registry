package io.komune.registry.s2.catalogue.domain.command

import io.komune.registry.s2.catalogue.domain.model.CatalogueAccessRight
import io.komune.registry.s2.catalogue.domain.model.CatalogueConfigurationModel
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.Location
import io.komune.registry.s2.commons.model.OrganizationId
import io.komune.registry.s2.commons.model.UserId
import io.komune.registry.s2.concept.domain.ConceptId
import kotlinx.serialization.Serializable

data class CatalogueUpdateCommand(
    override val id: CatalogueId,
    val title: String,
    val language: String?,
    val configuration: CatalogueConfigurationModel?,
    val description: String?,
    val themeIds: Set<ConceptId>,
    val homepage: String?,
    val ownerOrganizationId: OrganizationId?,
    val validatorId: UserId?,
    val validatorOrganizationId: OrganizationId?,
    val stakeholder: String?,
    val accessRights: CatalogueAccessRight?,
    val licenseId: String?,
    val integrateCounter: Boolean?,
    val location: Location?,
    val order: Int?,
    val hidden: Boolean,
    val versionNotes: String?,
): CatalogueCommand

@Serializable
data class CatalogueUpdatedEvent(
    override val id: CatalogueId,
    override val title: String,
    override val language: String?,
    override val configuration: CatalogueConfigurationModel?,
    override val description: String?,
    override val themeIds: Set<ConceptId>,
    override val homepage: String?,
    override val ownerOrganizationId: OrganizationId?,
    override val validatorId: UserId?,
    override val validatorOrganizationId: OrganizationId?,
    override val stakeholder: String?,
    override val accessRights: CatalogueAccessRight,
    override val licenseId: String?,
    override val integrateCounter: Boolean?,
    override val location: Location?,
    override val order: Int?,
    override val hidden: Boolean = false,
    override val versionNotes: String?,
    override val date: Long,
): CatalogueDataEvent
