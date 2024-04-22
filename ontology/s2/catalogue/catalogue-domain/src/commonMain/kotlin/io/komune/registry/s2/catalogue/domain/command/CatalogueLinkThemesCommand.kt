package io.komune.registry.s2.catalogue.domain.command

import io.komune.registry.dsl.skos.domain.model.SkosConcept
import io.komune.registry.s2.catalogue.domain.automate.CatalogueId
import kotlinx.serialization.Serializable


@Serializable
data class CatalogueLinkThemesCommand(
    override val id: CatalogueId,
    val themes: List<SkosConcept> = emptyList()
): CatalogueCommand


@Serializable
data class CatalogueLinkedThemesEvent(
    override val id: CatalogueId,
    val themes: List<SkosConcept> = emptyList(),
    override val date: Long
): CatalogueEvent
