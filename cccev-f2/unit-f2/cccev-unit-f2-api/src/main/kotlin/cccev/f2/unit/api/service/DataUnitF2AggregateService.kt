package cccev.f2.unit.api.service

import cccev.core.unit.DataUnitAggregateService
import cccev.core.unit.command.DataUnitCreateCommand
import cccev.core.unit.command.DataUnitCreatedEvent
import cccev.core.unit.command.DataUnitUpdateCommand
import cccev.core.unit.command.DataUnitUpdatedEvent
import cccev.core.unit.model.DataUnitType
import cccev.f2.unit.domain.command.DataUnitCreateCommandDTOBase
import cccev.f2.unit.domain.command.DataUnitUpdateCommandDTOBase
import org.springframework.stereotype.Service

@Service
class DataUnitF2AggregateService(
    private val dataUnitAggregateService: DataUnitAggregateService
) {
    suspend fun create(command: DataUnitCreateCommandDTOBase): DataUnitCreatedEvent {
        return DataUnitCreateCommand(
            name = command.name,
            description = command.description,
            notation = command.notation,
            identifier = command.identifier,
            type = DataUnitType.valueOf(command.type),
            options = command.options.orEmpty()
        ).let { dataUnitAggregateService.create(it) }
    }

    suspend fun update(command: DataUnitUpdateCommandDTOBase): DataUnitUpdatedEvent {
        return DataUnitUpdateCommand(
            id = command.id,
            name = command.name,
            description = command.description,
            notation = command.notation,
            options = command.options.orEmpty()
        ).let { dataUnitAggregateService.update(it) }
    }
}
