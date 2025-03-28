package io.komune.registry.f2.cccev.domain.unit.query

import f2.dsl.fnc.F2Function
import io.komune.registry.f2.cccev.domain.unit.model.DataUnitTranslatedDTO
import io.komune.registry.f2.cccev.domain.unit.model.DataUnitTranslatedDTOBase
import io.komune.registry.s2.commons.model.Language
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

typealias DataUnitListFunction = F2Function<DataUnitListQuery, DataUnitListResult>

@JsExport
interface DataUnitListQueryDTO {
    val language: Language
}

@Serializable
data class DataUnitListQuery(
    override val language: Language,
) : DataUnitListQueryDTO

@JsExport
interface DataUnitListResultDTO {
    val items: List<DataUnitTranslatedDTO>
}

@Serializable
data class DataUnitListResult(
    override val items: List<DataUnitTranslatedDTOBase>
) : DataUnitListResultDTO
