package io.komune.registry.s2.cccev.domain.command.concept

import io.komune.registry.s2.cccev.domain.model.ProcessorInput
import io.komune.registry.s2.commons.model.InformationConceptId
import io.komune.registry.s2.commons.model.SupportedValueId
import kotlinx.serialization.Serializable

data class InformationConceptComputeValueCommand(
    override val id: InformationConceptId,
    val processorInput: ProcessorInput
) : InformationConceptCommand

@Serializable
data class InformationConceptComputedValueEvent(
    override val id: InformationConceptId,
    override val date: Long,
    val supportedValueId: SupportedValueId
) : InformationConceptEvent
