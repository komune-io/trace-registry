package io.komune.registry.s2.catalogue.draft.domain.command

import io.komune.registry.s2.commons.model.CatalogueDraftId
import kotlinx.serialization.Serializable

@Serializable
data class CatalogueDraftUpdateTitleCommand(
    override val id: CatalogueDraftId,
    val title: String,
) : CatalogueDraftCommand

@Serializable
data class CatalogueDraftUpdatedTitleEvent(
    override val id: CatalogueDraftId,
    override val date: Long,
    val title: String,
) : CatalogueDraftEvent
