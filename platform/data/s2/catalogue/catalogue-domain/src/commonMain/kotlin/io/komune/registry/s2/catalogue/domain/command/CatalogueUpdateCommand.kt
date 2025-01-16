package io.komune.registry.s2.catalogue.domain.command

import io.komune.registry.dsl.dcat.domain.model.Agent
import io.komune.registry.dsl.skos.domain.model.SkosConcept
import io.komune.registry.s2.catalogue.domain.automate.CatalogueId
import io.komune.registry.s2.structure.domain.model.Structure
import kotlinx.serialization.Serializable

@Serializable
data class CatalogueUpdateCommand(
    override val id: CatalogueId,
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
): CatalogueCommand

@Serializable
data class CatalogueUpdatedEvent(
    override val id: CatalogueId,
    override val title: String,
    override val type: String,
    override val description: String?,
    override val themes: Set<SkosConcept>,
    override val homepage: String?,
    override val structure: Structure?,
    override val catalogues: Set<CatalogueId>,
    override val datasets: Set<DatasetId>,
    override val creator: Agent?,
    override val publisher: Agent?,
    override val validator: Agent?,
    override val accessRights: String?,
    override val license: String?,
    override val date: Long,
): CatalogueDataEvent
