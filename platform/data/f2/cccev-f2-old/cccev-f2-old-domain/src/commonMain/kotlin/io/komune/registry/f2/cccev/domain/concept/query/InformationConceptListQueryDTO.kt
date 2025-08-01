package io.komune.registry.f2.cccev.domain.concept.query

import f2.dsl.fnc.F2Function
import io.komune.registry.f2.cccev.domain.concept.model.InformationConceptTranslatedDTO
import io.komune.registry.f2.cccev.domain.concept.model.InformationConceptTranslatedDTOBase
import io.komune.registry.s2.commons.model.Language
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

typealias InformationConceptListFunction = F2Function<InformationConceptListQuery, InformationConceptListResult>

@JsExport
interface InformationConceptListQueryDTO {
    val language: Language
}

@Serializable
data class InformationConceptListQuery(
    override val language: Language
) : InformationConceptListQueryDTO

@JsExport
interface InformationConceptListResultDTO {
    val items: List<InformationConceptTranslatedDTO>
}

@Serializable
data class InformationConceptListResult(
    override val items: List<InformationConceptTranslatedDTOBase>
) : InformationConceptListResultDTO
