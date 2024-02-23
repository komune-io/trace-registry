package cccev.s2.unit.domain

import cccev.s2.unit.domain.command.DataUnitCreateCommand
import cccev.s2.unit.domain.command.DataUnitCreatedEvent
import cccev.s2.unit.domain.command.DataUnitUpdateCommand
import cccev.s2.unit.domain.command.DataUnitUpdatedEvent

interface DataUnitAggregate {
    suspend fun create(command: DataUnitCreateCommand): DataUnitCreatedEvent
    suspend fun update(command: DataUnitUpdateCommand): DataUnitUpdatedEvent
}
