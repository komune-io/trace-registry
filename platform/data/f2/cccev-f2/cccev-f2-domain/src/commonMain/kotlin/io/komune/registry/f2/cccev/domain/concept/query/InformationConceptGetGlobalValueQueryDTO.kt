package io.komune.registry.f2.cccev.domain.concept.query

import f2.dsl.fnc.F2Function
import io.komune.registry.f2.cccev.domain.concept.model.InformationConceptComputedDTO
import io.komune.registry.f2.cccev.domain.concept.model.InformationConceptComputedDTOBase
import io.komune.registry.s2.commons.model.InformationConceptIdentifier
import io.komune.registry.s2.commons.model.Language
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

typealias InformationConceptGetGlobalValueFunction
        = F2Function<InformationConceptGetGlobalValueQuery, InformationConceptGetGlobalValueResult>

@JsExport
interface InformationConceptGetGlobalValueQueryDTO {
    val identifier: InformationConceptIdentifier
    val language: Language
}

@Serializable
data class InformationConceptGetGlobalValueQuery(
    override val identifier: InformationConceptIdentifier,
    override val language: Language
) : InformationConceptGetGlobalValueQueryDTO

@JsExport
interface InformationConceptGetGlobalValueResultDTO {
    val item: InformationConceptComputedDTO?
}

data class InformationConceptGetGlobalValueResult(
    override val item: InformationConceptComputedDTOBase?
) : InformationConceptGetGlobalValueResultDTO
