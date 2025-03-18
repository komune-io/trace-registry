package io.komune.registry.f2.cccev.domain.unit.command

import f2.dsl.fnc.F2Function
import io.komune.registry.s2.commons.model.DataUnitId
import kotlin.js.JsExport

typealias DataUnitCreateFunction = F2Function<DataUnitCreateCommandDTOBase, DataUnitCreatedEventDTOBase>

@JsExport
interface DataUnitCreateCommandDTO : io.komune.registry.s2.cccev.domain.command.unit.DataUnitCreateCommandDTO

typealias DataUnitCreateCommandDTOBase = io.komune.registry.s2.cccev.domain.command.unit.DataUnitCreateCommand

@JsExport
interface DataUnitCreatedEventDTO {
    val id: DataUnitId
}

data class DataUnitCreatedEventDTOBase(
    override val id: DataUnitId
) : DataUnitCreatedEventDTO
