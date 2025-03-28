package io.komune.registry.f2.cccev.domain.concept.command

import f2.dsl.fnc.F2Function
import io.komune.registry.s2.commons.model.InformationConceptId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport
import kotlinx.serialization.Serializable

typealias InformationConceptCreateFunction = F2Function<InformationConceptCreateCommandDTOBase, InformationConceptCreatedEventDTOBase>

@JsExport
interface InformationConceptCreateCommandDTO : io.komune.registry.s2.cccev.domain.command.concept.InformationConceptCreateCommandDTO

typealias InformationConceptCreateCommandDTOBase = io.komune.registry.s2.cccev.domain.command.concept.InformationConceptCreateCommand

@JsExport
interface InformationConceptCreatedEventDTO {
    val id: InformationConceptId
}

@Serializable
data class InformationConceptCreatedEventDTOBase(
    override val id: InformationConceptId
) : InformationConceptCreatedEventDTO
