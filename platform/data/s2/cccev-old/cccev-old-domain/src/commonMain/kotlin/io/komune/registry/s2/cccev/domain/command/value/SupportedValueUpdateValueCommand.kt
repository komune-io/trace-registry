package io.komune.registry.s2.cccev.domain.command.value

import io.komune.registry.s2.commons.model.SupportedValueId
import kotlinx.serialization.Serializable

data class SupportedValueUpdateValueCommand(
    override val id: SupportedValueId,
    val value: String
) : SupportedValueCommand

@Serializable
data class SupportedValueUpdatedValueEvent(
    override val id: SupportedValueId,
    override val date: Long,
    val value: String
) : SupportedValueEvent
