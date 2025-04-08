package io.komune.registry.s2.dataset.domain.command

import io.komune.registry.s2.commons.model.DatasetId
import io.komune.registry.s2.commons.model.InformationConceptId
import io.komune.registry.s2.commons.model.SupportedValueId
import io.komune.registry.s2.dataset.domain.model.AggregatedValueModel
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface DatasetAddAggregatorsCommandDTO {
    val id: DatasetId
    val informationConceptIds: List<InformationConceptId>
}

@Serializable
data class DatasetAddAggregatorsCommand(
    override val id: DatasetId,
    override val informationConceptIds: List<InformationConceptId>
) : DatasetCommand, DatasetAddAggregatorsCommandDTO

@Serializable
data class DatasetAddedAggregatorsEvent(
    override val id: DatasetId,
    override val date: Long,
    val aggregators: Map<InformationConceptId, AggregatedValueModel?>
) : DatasetEvent
