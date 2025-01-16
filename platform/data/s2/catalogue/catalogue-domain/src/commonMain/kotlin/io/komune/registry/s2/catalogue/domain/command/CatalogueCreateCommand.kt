package io.komune.registry.s2.catalogue.domain.command

import io.komune.registry.dsl.dcat.domain.model.Agent
import io.komune.registry.dsl.skos.domain.model.SkosConcept
import io.komune.registry.s2.catalogue.domain.automate.CatalogueId
import io.komune.registry.s2.catalogue.domain.automate.CatalogueIdentifier
import io.komune.registry.s2.structure.domain.model.Structure
import kotlinx.serialization.Serializable

@Serializable
data class CatalogueCreateCommand(
    val identifier: CatalogueIdentifier,
    val title: String,
    val type: String,
    val description: String? = null,
    val themes: Set<SkosConcept> = emptySet(),
    val homepage: String? = null,
    val structure: Structure? = null,
    val catalogues: Set<CatalogueId> = emptySet(),
    val datasets: Set<DatasetId> = emptySet(),
    val creator: Agent? = null,
    val publisher: Agent? = null,
    val validator: Agent? = null,
    val accessRights: String? = null,
    val license: String? = null,
): CatalogueInitCommand

sealed interface CatalogueDataEvent : CatalogueEvent {
    val title: String
    val type: String
    val description: String?
    val themes: Set<SkosConcept>
    val homepage: String?
    val structure: Structure?
    val catalogues: Set<CatalogueId>
    val datasets: Set<DatasetId>
    val creator: Agent?
    val publisher: Agent?
    val validator: Agent?
    val accessRights: String?
    val license: String?
}

@Serializable
data class CatalogueCreatedEvent(
    override val id: CatalogueId,
    val identifier: CatalogueIdentifier,
    override val title: String,
    override val type: String,
    override val description: String? = null,
    override val themes: Set<SkosConcept> = emptySet(),
    override val homepage: String? = null,
    override val structure: Structure? = null,
    override val catalogues: Set<CatalogueId> = emptySet(),
    override val datasets: Set<DatasetId> = emptySet(),
    override val creator: Agent? = null,
    override val publisher: Agent? = null,
    override val validator: Agent? = null,
    override val accessRights: String? = null,
    override val license: String? = null,
    override val date: Long,
): CatalogueDataEvent
