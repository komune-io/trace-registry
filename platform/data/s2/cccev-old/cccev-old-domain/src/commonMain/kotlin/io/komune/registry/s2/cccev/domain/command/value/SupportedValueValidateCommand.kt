package io.komune.registry.s2.cccev.domain.command.value

import io.komune.registry.s2.commons.model.SupportedValueId
import kotlinx.serialization.Serializable

data class SupportedValueValidateCommand(
    override val id: SupportedValueId
) : SupportedValueCommand

@Serializable
data class SupportedValueValidatedEvent(
    override val id: SupportedValueId,
    override val date: Long,
) : SupportedValueEvent
