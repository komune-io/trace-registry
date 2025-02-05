package io.komune.registry.s2.catalogue.domain.command

import io.komune.registry.dsl.dcat.domain.model.Agent
import io.komune.registry.s2.catalogue.domain.automate.CatalogueId
import io.komune.registry.s2.concept.domain.ConceptId
import io.komune.registry.s2.structure.domain.model.Structure
import kotlinx.serialization.Serializable

@Serializable
data class CatalogueUpdateCommand(
    override val id: CatalogueId,
    val title: String,
    val language: String?,
    val description: String? = null,
    val themeIds: Set<ConceptId> = emptySet(),
    val homepage: String? = null,
    val structure: Structure? = null,
    val creator: Agent? = null,
    val publisher: Agent? = null,
    val validator: Agent? = null,
    val accessRights: String? = null,
    val license: String? = null,
    val hidden: Boolean = false
): CatalogueCommand

@Serializable
data class CatalogueUpdatedEvent(
    override val id: CatalogueId,
    override val title: String,
    override val language: String?,
    override val description: String?,
    override val themeIds: Set<ConceptId>,
    override val homepage: String?,
    override val structure: Structure?,
    override val creator: Agent?,
    override val publisher: Agent?,
    override val validator: Agent?,
    override val accessRights: String?,
    override val license: String?,
    override val hidden: Boolean = false,
    override val date: Long,
): CatalogueDataEvent
