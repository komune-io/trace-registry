package io.komune.registry.f2.cccev.domain.unit.query

import f2.dsl.fnc.F2Function
import io.komune.registry.f2.cccev.domain.unit.model.DataUnitDTO
import io.komune.registry.f2.cccev.domain.unit.model.DataUnitDTOBase
import io.komune.registry.s2.commons.model.DataUnitIdentifier
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

typealias DataUnitGetByIdentifierFunction = F2Function<DataUnitGetByIdentifierQuery, DataUnitGetByIdentifierResult>

@JsExport
interface DataUnitGetByIdentifierQueryDTO {
    val identifier: DataUnitIdentifier
}

@Serializable
data class DataUnitGetByIdentifierQuery(
    override val identifier: DataUnitIdentifier
) : DataUnitGetByIdentifierQueryDTO

@JsExport
interface DataUnitGetByIdentifierResultDTO {
    val item: DataUnitDTO?
}

@Serializable
data class DataUnitGetByIdentifierResult(
    override val item: DataUnitDTOBase?
) : DataUnitGetByIdentifierResultDTO
