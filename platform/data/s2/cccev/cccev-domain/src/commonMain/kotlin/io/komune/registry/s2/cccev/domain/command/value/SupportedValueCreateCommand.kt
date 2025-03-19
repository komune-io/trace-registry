package io.komune.registry.s2.cccev.domain.command.value

import io.komune.registry.s2.commons.model.InformationConceptId
import io.komune.registry.s2.commons.model.SupportedValueId
import kotlinx.serialization.Serializable

data class SupportedValueCreateCommand(
    val conceptId: InformationConceptId,
    val value: String,
    val query: String?
) : SupportedValueInitCommand

@Serializable
data class SupportedValueCreatedEvent(
    override val id: SupportedValueId,
    override val date: Long,
    val conceptId: InformationConceptId,
    val value: String,
    val query: String?
) : SupportedValueEvent
