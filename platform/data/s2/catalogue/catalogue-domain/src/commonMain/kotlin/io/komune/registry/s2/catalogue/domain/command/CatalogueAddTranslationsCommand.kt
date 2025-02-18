package io.komune.registry.s2.catalogue.domain.command

import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.Language
import kotlinx.serialization.Serializable

@Serializable
data class CatalogueAddTranslationsCommand(
    override val id: CatalogueId,
    val catalogues: List<CatalogueId> = emptyList()
): CatalogueCommand

@Serializable
data class CatalogueAddedTranslationsEvent(
    override val id: CatalogueId,
    val catalogues: Map<Language, CatalogueId> = emptyMap(),
    override val date: Long
): CatalogueEvent
