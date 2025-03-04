package io.komune.registry.s2.dataset.domain.command

import io.komune.registry.s2.commons.model.CatalogueDraftId
import io.komune.registry.s2.commons.model.DatasetId
import kotlinx.serialization.Serializable

data class DatasetLinkToDraftCommand(
    override val id: DatasetId,
    val draftId: CatalogueDraftId
) : DatasetCommand

@Serializable
data class DatasetLinkedToDraftEvent(
    override val id: DatasetId,
    override val date: Long,
    val draftId: CatalogueDraftId
) : DatasetEvent
