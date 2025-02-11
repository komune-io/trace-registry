package io.komune.registry.s2.catalogue.domain.command

import io.komune.registry.s2.catalogue.domain.automate.CatalogueId
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
    val structure: Structure?,
    val accessRights: String?,
    val licenseId: String?,
    val hidden: Boolean
): CatalogueCommand

@Serializable
data class CatalogueUpdatedEvent(
    override val id: CatalogueId,
    override val title: String,
    override val language: String?,
    override val description: String?,
    override val themeIds: Set<ConceptId>,
    override val homepage: String?,
    override val structure: Structure?,
    override val accessRights: String?,
    override val licenseId: String?,
    override val hidden: Boolean = false,
    override val date: Long,
): CatalogueDataEvent
