package io.komune.registry.s2.catalogue.domain.command

import io.komune.registry.s2.catalogue.domain.automate.CatalogueId
import io.komune.registry.s2.catalogue.domain.automate.CatalogueIdentifier
import io.komune.registry.s2.structure.domain.model.Structure
import kotlinx.serialization.Serializable

data class CatalogueUpdateCommand(
    override val id: CatalogueId,
    val identifier: CatalogueIdentifier,
    val type: String,
    var structure: Structure? = null,
    val title: String,
    val description: String?,
    val homepage: String?,
    val img: String?,
): CatalogueCommand

@Serializable
data class CatalogueUpdatedEvent(
    override val id: CatalogueId,
    val identifier: CatalogueIdentifier,
    val type: String,
    var structure: Structure? = null,
    val title: String,
    val description: String?,
    val homepage: String?,
    val img: String?,
    override val date: Long,
): CatalogueEvent
