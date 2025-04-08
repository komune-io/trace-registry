package io.komune.registry.s2.dataset.domain.command

import io.komune.registry.s2.commons.model.DatasetId
import io.komune.registry.s2.commons.model.InformationConceptId
import io.komune.registry.s2.commons.model.SupportedValueId
import kotlinx.serialization.Serializable

@Serializable
data class DatasetAddAggregatorsCommand(
    override val id: DatasetId,
    val informationConceptIds: List<InformationConceptId>,
    val validateComputedValues: Boolean
) : DatasetCommand

@Serializable
data class DatasetAddedAggregatorsEvent(
    override val id: DatasetId,
    override val date: Long,
    val aggregators: Map<InformationConceptId, SupportedValueId?>
) : DatasetEvent
