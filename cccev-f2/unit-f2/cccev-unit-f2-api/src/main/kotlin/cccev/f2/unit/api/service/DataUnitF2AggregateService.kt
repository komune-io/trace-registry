package cccev.f2.unit.api.service

import cccev.f2.unit.domain.command.DataUnitCreateCommandDTOBase
import cccev.f2.unit.domain.command.DataUnitUpdateCommandDTOBase
import cccev.s2.unit.api.DataUnitAggregateService
import cccev.s2.unit.domain.command.DataUnitCreateCommand
import cccev.s2.unit.domain.command.DataUnitCreatedEvent
import cccev.s2.unit.domain.command.DataUnitUpdateCommand
import cccev.s2.unit.domain.command.DataUnitUpdatedEvent
import cccev.s2.unit.domain.model.DataUnitOption
import cccev.s2.unit.domain.model.DataUnitType
import org.springframework.stereotype.Service
import java.util.UUID

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
            options = command.options?.map { option ->
                DataUnitOption(
                    id = UUID.randomUUID().toString(),
                    identifier = option.identifier,
                    name = option.name,
                    value = option.value,
                    order = option.order,
                    icon = option.icon,
                    color = option.color,
                )
            }
        ).let { dataUnitAggregateService.create(it) }
    }

    suspend fun update(command: DataUnitUpdateCommandDTOBase): DataUnitUpdatedEvent {
        return DataUnitUpdateCommand(
            id = command.id,
            name = command.name,
            description = command.description,
            notation = command.notation,
            options = command.options?.map { option ->
                DataUnitOption(
                    id = UUID.randomUUID().toString(),
                    identifier = option.identifier,
                    name = option.name,
                    value = option.value,
                    order = option.order,
                    icon = option.icon,
                    color = option.color,
                )
            }
        ).let { dataUnitAggregateService.update(it) }
    }
}
