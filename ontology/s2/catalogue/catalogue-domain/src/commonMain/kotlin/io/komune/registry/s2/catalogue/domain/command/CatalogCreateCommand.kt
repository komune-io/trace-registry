package io.komune.registry.s2.catalogue.domain.command

import io.komune.registry.dsl.skos.domain.model.SkosConcept
import io.komune.registry.s2.catalogue.domain.automate.CatalogueId
import io.komune.registry.s2.catalogue.domain.automate.CatalogueIdentifier
import io.komune.registry.s2.structure.domain.model.Structure
import kotlinx.serialization.Serializable

@Serializable
data class CatalogueCreateCommand(
    val identifier: CatalogueIdentifier,
    val type: String,
    var structure: Structure? = null,
    val title: String,
    val description: String? = null,
    val homepage: String? = null,
    val themes: List<SkosConcept>? = null,
    val catalogues: List<CatalogueId>? = null,
): CatalogueInitCommand


@Serializable
data class CatalogueCreatedEvent(
    override val id: CatalogueId,
    val identifier: CatalogueIdentifier,
    val type: String,
    var structure: Structure? = null,
    val title: String,
    val description: String? = null,
    val homepage: String? = null,
    val themes: List<SkosConcept>? = null,
    val catalogues: List<CatalogueId>? = null,
    override val date: Long,
): CatalogueEvent
