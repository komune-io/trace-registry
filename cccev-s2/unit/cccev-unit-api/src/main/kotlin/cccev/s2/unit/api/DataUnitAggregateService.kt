package cccev.s2.unit.api

import cccev.s2.unit.api.entity.DataUnitAutomateExecutor
import cccev.s2.unit.domain.DataUnitAggregate
import cccev.s2.unit.domain.DataUnitState
import cccev.s2.unit.domain.command.DataUnitCreateCommand
import cccev.s2.unit.domain.command.DataUnitCreatedEvent
import cccev.s2.unit.domain.command.DataUnitUpdateCommand
import cccev.s2.unit.domain.command.DataUnitUpdatedEvent
import org.springframework.stereotype.Service
import java.util.UUID

@Service
class DataUnitAggregateService(
    private val automate: DataUnitAutomateExecutor
): DataUnitAggregate {
    override suspend fun create(command: DataUnitCreateCommand) = automate.init(command) {
        DataUnitCreatedEvent(
            id = UUID.randomUUID().toString(),
            identifier = command.identifier,
            name = command.name,
            description = command.description,
            type = command.type,
            notation = command.notation,
            options = command.options,
            status = DataUnitState.EXISTS
        )
    }

    override suspend fun update(command: DataUnitUpdateCommand) = automate.transition(command) {
        DataUnitUpdatedEvent(
            id = command.id,
            name = command.name,
            description = command.description,
            notation = command.notation,
            options = command.options,
            status = DataUnitState.EXISTS
        )
    }
}
