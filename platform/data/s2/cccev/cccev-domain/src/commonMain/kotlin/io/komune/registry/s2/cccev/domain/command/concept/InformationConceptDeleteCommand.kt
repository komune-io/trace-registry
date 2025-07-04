package io.komune.registry.s2.cccev.domain.command.concept

import io.komune.registry.s2.commons.model.InformationConceptId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface InformationConceptDeleteCommandDTO {
    val id: InformationConceptId
}

@Serializable
data class InformationConceptDeleteCommand(
    override val id: InformationConceptId,
) : InformationConceptCommand, InformationConceptDeleteCommandDTO

@Serializable
data class InformationConceptDeletedEvent(
    override val id: InformationConceptId,
    override val date: Long
) : InformationConceptEvent
