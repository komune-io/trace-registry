package io.komune.registry.f2.cccev.domain.concept.command

import f2.dsl.fnc.F2Function
import io.komune.registry.s2.commons.model.InformationConceptId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

typealias InformationConceptUpdateFunction = F2Function<InformationConceptUpdateCommandDTOBase, InformationConceptUpdatedEventDTOBase>

@JsExport
interface InformationConceptUpdateCommandDTO : io.komune.registry.s2.cccev.domain.command.concept.InformationConceptUpdateCommandDTO

typealias InformationConceptUpdateCommandDTOBase = io.komune.registry.s2.cccev.domain.command.concept.InformationConceptUpdateCommand

@JsExport
interface InformationConceptUpdatedEventDTO {
    val id: InformationConceptId
}

@Serializable
data class InformationConceptUpdatedEventDTOBase(
    override val id: InformationConceptId
) : InformationConceptUpdatedEventDTO
