package io.komune.registry.s2.catalogue.domain.command

import io.komune.registry.s2.commons.model.CatalogueId
import kotlinx.serialization.Serializable

data class CatalogueUpdateVersionNotesCommand(
    override val id: CatalogueId,
    val versionNotes: String?,
): CatalogueCommand

@Serializable
data class CatalogueUpdatedVersionNotesEvent(
    override val id: CatalogueId,
    val versionNotes: String?,
    override val date: Long,
): CatalogueEvent
