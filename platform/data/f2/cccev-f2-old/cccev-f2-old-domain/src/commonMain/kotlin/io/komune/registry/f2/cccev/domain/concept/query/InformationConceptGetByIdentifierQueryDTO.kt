package io.komune.registry.f2.cccev.domain.concept.query

import f2.dsl.fnc.F2Function
import io.komune.registry.f2.cccev.domain.concept.model.InformationConceptDTO
import io.komune.registry.f2.cccev.domain.concept.model.InformationConceptDTOBase
import io.komune.registry.s2.commons.model.InformationConceptIdentifier
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

typealias InformationConceptGetByIdentifierFunction
        = F2Function<InformationConceptGetByIdentifierQuery, InformationConceptGetByIdentifierResult>

@JsExport
interface InformationConceptGetByIdentifierQueryDTO {
    val identifier: InformationConceptIdentifier
}

@Serializable
data class InformationConceptGetByIdentifierQuery(
    override val identifier: InformationConceptIdentifier
) : InformationConceptGetByIdentifierQueryDTO

@JsExport
interface InformationConceptGetByIdentifierResultDTO {
    val item: InformationConceptDTO?
}

@Serializable
data class InformationConceptGetByIdentifierResult(
    override val item: InformationConceptDTOBase?
) : InformationConceptGetByIdentifierResultDTO
