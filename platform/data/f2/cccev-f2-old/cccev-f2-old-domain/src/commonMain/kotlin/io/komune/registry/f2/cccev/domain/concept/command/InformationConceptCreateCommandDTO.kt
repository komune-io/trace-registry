package io.komune.registry.f2.cccev.domain.concept.command

import f2.dsl.fnc.F2Function
import io.komune.registry.f2.cccev.domain.concept.model.InformationConceptDTO
import io.komune.registry.f2.cccev.domain.concept.model.InformationConceptDTOBase
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

typealias InformationConceptCreateFunction = F2Function<InformationConceptCreateCommandDTOBase, InformationConceptCreatedEventDTOBase>

@JsExport
interface InformationConceptCreateCommandDTO : io.komune.registry.s2.cccev.domain.command.concept.InformationConceptCreateCommandDTO

typealias InformationConceptCreateCommandDTOBase = io.komune.registry.s2.cccev.domain.command.concept.InformationConceptCreateCommand

@JsExport
interface InformationConceptCreatedEventDTO {
    val item: InformationConceptDTO
}

@Serializable
data class InformationConceptCreatedEventDTOBase(
    override val item: InformationConceptDTOBase
) : InformationConceptCreatedEventDTO
