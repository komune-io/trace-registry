package io.komune.registry.s2.catalogue.domain.command

import io.komune.registry.s2.catalogue.domain.model.CatalogueAccessRight
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.Location
import io.komune.registry.s2.commons.model.OrganizationId
import io.komune.registry.s2.concept.domain.ConceptId
import io.komune.registry.s2.structure.domain.model.Structure
import kotlinx.serialization.Serializable

data class CatalogueUpdateCommand(
    override val id: CatalogueId,
    val title: String,
    val language: String?,
    val description: String?,
    val themeIds: Set<ConceptId>,
    val homepage: String?,
    val ownerOrganizationId: OrganizationId?,
    val structure: Structure?,
    val accessRights: CatalogueAccessRight?,
    val licenseId: String?,
    val location: Location?,
    val hidden: Boolean,
    val versionNotes: String?,
): CatalogueCommand

@Serializable
data class CatalogueUpdatedEvent(
    override val id: CatalogueId,
    override val title: String,
    override val language: String?,
    override val description: String?,
    override val themeIds: Set<ConceptId>,
    override val homepage: String?,
    override val ownerOrganizationId: OrganizationId?,
    override val structure: Structure?,
    override val accessRights: CatalogueAccessRight,
    override val licenseId: String?,
    override val location: Location?,
    override val hidden: Boolean = false,
    override val versionNotes: String?,
    override val date: Long,
): CatalogueDataEvent
