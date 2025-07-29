package io.komune.registry.f2.cccev.domain.unit.query

import f2.dsl.fnc.F2Function
import io.komune.registry.f2.cccev.domain.unit.model.DataUnitDTO
import io.komune.registry.f2.cccev.domain.unit.model.DataUnitDTOBase
import io.komune.registry.s2.commons.model.DataUnitId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

typealias DataUnitGetFunction = F2Function<DataUnitGetQuery, DataUnitGetResult>

@JsExport
interface DataUnitGetQueryDTO {
    val id: DataUnitId
}

@Serializable
data class DataUnitGetQuery(
    override val id: DataUnitId
) : DataUnitGetQueryDTO

@JsExport
interface DataUnitGetResultDTO {
    val item: DataUnitDTO?
}

@Serializable
data class DataUnitGetResult(
    override val item: DataUnitDTOBase?
) : DataUnitGetResultDTO
