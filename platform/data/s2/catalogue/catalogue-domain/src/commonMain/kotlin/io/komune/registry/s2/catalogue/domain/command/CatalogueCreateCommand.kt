package io.komune.registry.s2.catalogue.domain.command

import io.komune.registry.dsl.dcat.domain.model.Agent
import io.komune.registry.s2.catalogue.domain.automate.CatalogueId
import io.komune.registry.s2.catalogue.domain.automate.CatalogueIdentifier
import io.komune.registry.s2.concept.domain.ConceptId
import io.komune.registry.s2.license.domain.LicenseId
import io.komune.registry.s2.structure.domain.model.Structure
import kotlinx.serialization.Serializable

@Serializable
data class CatalogueCreateCommand(
    val identifier: CatalogueIdentifier,
    val title: String,
    val type: String,
    val language: String?,
    val description: String? = null,
    val themeIds: Set<ConceptId> = emptySet(),
    val homepage: String? = null,
    val structure: Structure? = null,
    val catalogueIds: Set<CatalogueId> = emptySet(),
    val datasetIds: Set<DatasetId> = emptySet(),
    val creator: Agent? = null,
    val publisher: Agent? = null,
    val validator: Agent? = null,
    val accessRights: String? = null,
    val licenseId: LicenseId? = null,
    val hidden: Boolean = false
): CatalogueInitCommand

sealed interface CatalogueDataEvent : CatalogueEvent {
    val title: String
    val language: String?
    val description: String?
    val themeIds: Set<ConceptId>
    val homepage: String?
    val structure: Structure?
    val creator: Agent?
    val publisher: Agent?
    val validator: Agent?
    val accessRights: String?
    val licenseId: LicenseId?
    val hidden: Boolean
}

@Serializable
data class CatalogueCreatedEvent(
    override val id: CatalogueId,
    val identifier: CatalogueIdentifier,
    override val title: String,
    val type: String,
    override val language: String?,
    override val description: String? = null,
    override val themeIds: Set<ConceptId> = emptySet(),
    override val homepage: String? = null,
    override val structure: Structure? = null,
    val catalogueIds: Set<CatalogueId> = emptySet(),
    val datasetIds: Set<DatasetId> = emptySet(),
    override val creator: Agent? = null,
    override val publisher: Agent? = null,
    override val validator: Agent? = null,
    override val accessRights: String? = null,
    override val licenseId: LicenseId? = null,
    override val hidden: Boolean = false,
    override val date: Long,
): CatalogueDataEvent
