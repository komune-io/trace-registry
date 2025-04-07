package io.komune.registry.s2.dataset.domain.command

import io.komune.registry.s2.commons.model.DatasetId
import io.komune.registry.s2.commons.model.InformationConceptId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface DatasetRemoveAggregatorsCommandDTO {
    val id: DatasetId
    val informationConceptIds: List<InformationConceptId>
}

@Serializable
data class DatasetRemoveAggregatorsCommand(
    override val id: DatasetId,
    override val informationConceptIds: List<InformationConceptId>
) : DatasetCommand, DatasetRemoveAggregatorsCommandDTO

@Serializable
data class DatasetRemovedAggregatorsEvent(
    override val id: DatasetId,
    override val date: Long,
    val informationConceptIds: Set<InformationConceptId>
) : DatasetEvent
