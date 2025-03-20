package io.komune.registry.f2.cccev.domain.unit

import io.komune.registry.f2.cccev.domain.unit.command.DataUnitCreateFunction
import io.komune.registry.f2.cccev.domain.unit.query.DataUnitGetByIdentifierFunction

interface DataUnitApi : DataUnitCommandApi, DataUnitQueryApi

interface DataUnitCommandApi {
    fun dataUnitCreate(): DataUnitCreateFunction
}

interface DataUnitQueryApi {
    fun dataUnitGetByIdentifier(): DataUnitGetByIdentifierFunction
}
