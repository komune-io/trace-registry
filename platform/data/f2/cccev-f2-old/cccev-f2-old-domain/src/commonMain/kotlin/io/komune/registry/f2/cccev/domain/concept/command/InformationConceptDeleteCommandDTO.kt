package io.komune.registry.f2.cccev.domain.concept.command

import f2.dsl.fnc.F2Function
import io.komune.registry.s2.cccev.domain.command.concept.InformationConceptDeleteCommand
import io.komune.registry.s2.cccev.domain.command.concept.InformationConceptDeleteCommandDTO
import io.komune.registry.s2.commons.model.InformationConceptId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

typealias InformationConceptDeleteFunction = F2Function<InformationConceptDeleteCommandDTOBase, InformationConceptDeletedEventDTOBase>

@JsExport
interface InformationConceptDeleteCommandDTO : InformationConceptDeleteCommandDTO

typealias InformationConceptDeleteCommandDTOBase = InformationConceptDeleteCommand

@JsExport
interface InformationConceptDeletedEventDTO {
    val id: InformationConceptId
}

@Serializable
data class InformationConceptDeletedEventDTOBase(
    override val id: InformationConceptId
) : InformationConceptDeletedEventDTO
