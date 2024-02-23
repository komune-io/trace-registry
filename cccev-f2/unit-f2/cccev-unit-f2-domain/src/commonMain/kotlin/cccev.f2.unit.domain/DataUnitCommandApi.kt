package cccev.f2.unit.domain

import cccev.f2.unit.domain.command.DataUnitCreateFunction
import cccev.f2.unit.domain.command.DataUnitUpdateFunction

interface DataUnitCommandApi {
    fun dataUnitCreate(): DataUnitCreateFunction
    fun dataUnitUpdate(): DataUnitUpdateFunction
}
