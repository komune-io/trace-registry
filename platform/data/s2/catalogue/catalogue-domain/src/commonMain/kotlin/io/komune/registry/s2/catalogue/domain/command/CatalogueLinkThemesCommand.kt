package io.komune.registry.s2.catalogue.domain.command

import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.concept.domain.ConceptId
import kotlinx.serialization.Serializable


@Serializable
data class CatalogueLinkThemesCommand(
    override val id: CatalogueId,
    val themes: List<ConceptId> = emptyList()
): CatalogueCommand


@Serializable
data class CatalogueLinkedThemesEvent(
    override val id: CatalogueId,
    val themes: List<ConceptId> = emptyList(),
    override val date: Long
): CatalogueEvent
