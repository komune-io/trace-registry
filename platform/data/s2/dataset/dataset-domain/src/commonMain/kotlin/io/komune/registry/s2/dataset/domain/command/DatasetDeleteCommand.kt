package io.komune.registry.s2.dataset.domain.command

import io.komune.registry.s2.dataset.domain.automate.DatasetId
import kotlin.js.JsExport
import kotlinx.serialization.Serializable

@Serializable
data class DatasetDeleteCommand(
    override val id: DatasetId
): DatasetCommand

@Serializable
data class DatasetDeletedEvent(
    override val id: DatasetId,
    override val date: Long
): DatasetEvent