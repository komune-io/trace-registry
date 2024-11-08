package io.komune.registry.s2.dataset.domain.command

import io.komune.registry.s2.dataset.domain.automate.DatasetId
import kotlin.js.JsExport
import kotlinx.serialization.Serializable

/**
 * @d2 command
 */
@JsExport
interface DatasetDeleteCommandDTO: DatasetCommand {
    /**
     * Id of the dataset to close.
     */
    override val id: DatasetId
}

/**
 * @d2 inherit
 */
data class DatasetDeleteCommand(
    override val id: DatasetId
): DatasetDeleteCommandDTO

@Serializable
data class DatasetDeletedEvent(
    override val id: DatasetId,
    override val date: Long
): DatasetEvent
