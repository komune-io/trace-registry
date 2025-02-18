package io.komune.registry.s2.catalogue.domain.command

import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.Language
import kotlinx.serialization.Serializable

@Serializable
data class CatalogueRemoveTranslationsCommand(
    override val id: CatalogueId,
    val languages: List<Language>
): CatalogueCommand

@Serializable
data class CatalogueRemovedTranslationsEvent(
    override val id: CatalogueId,
    val languages: Set<Language>,
    override val date: Long
): CatalogueEvent
