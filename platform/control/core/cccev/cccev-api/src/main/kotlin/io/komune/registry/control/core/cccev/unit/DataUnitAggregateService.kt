package io.komune.registry.control.core.cccev.unit

import f2.spring.exception.NotFoundException
import io.komune.registry.control.core.cccev.unit.command.DataUnitCreateCommand
import io.komune.registry.control.core.cccev.unit.command.DataUnitCreatedEvent
import io.komune.registry.control.core.cccev.unit.command.DataUnitUpdateCommand
import io.komune.registry.control.core.cccev.unit.command.DataUnitUpdatedEvent
import io.komune.registry.control.core.cccev.unit.entity.DataUnit
import io.komune.registry.control.core.cccev.unit.entity.DataUnitOption
import io.komune.registry.infra.neo4j.removeSeveredRelations
import io.komune.registry.infra.neo4j.transaction
import org.neo4j.ogm.session.SessionFactory
import org.springframework.context.ApplicationEventPublisher
import org.springframework.stereotype.Service
import java.util.UUID

@Service
class DataUnitAggregateService(
    private val applicationEventPublisher: ApplicationEventPublisher,
    private val sessionFactory: SessionFactory
) {
    suspend fun create(command: DataUnitCreateCommand): DataUnitCreatedEvent = sessionFactory.transaction { session, _ ->
        val unit = DataUnit().apply {
            id = UUID.randomUUID().toString()
            identifier = command.identifier
            name = command.name
            description = command.description
            notation = command.notation
            type = command.type
            options = command.options.map { option ->
                DataUnitOption().apply {
                    id = UUID.randomUUID().toString()
                    identifier = option.identifier
                    name = option.name
                    value = option.value
                    order = option.order
                    icon = option.icon
                    color = option.color
                }
            }.toMutableList()
        }
        session.save(unit)

        DataUnitCreatedEvent(unit.id)
            .also(applicationEventPublisher::publishEvent)
    }

    suspend fun update(command: DataUnitUpdateCommand): DataUnitUpdatedEvent = sessionFactory.transaction { session, _ ->
        val unit = session.load(DataUnit::class.java, command.id as String, 1)
            ?: throw NotFoundException("DataUnit", command.id)

        val existingOptions = unit.options.associateBy(DataUnitOption::id)
        session.removeSeveredRelations(
            DataUnit.LABEL, command.id, DataUnit.HAS_OPTION, DataUnitOption.LABEL,
            existingOptions.keys, command.options.mapNotNull { it.id }.toSet()
        )

        unit.apply {
            name = command.name
            description = command.description
            notation = command.notation
            options = command.options.map { option ->
                val optionToMutate = existingOptions[option.id]
                    ?: DataUnitOption().apply { id = UUID.randomUUID().toString() }
                optionToMutate.apply {
                    identifier = option.identifier
                    name = option.name
                    value = option.value
                    order = option.order
                    icon = option.icon
                    color = option.color
                }
            }.toMutableList()
        }.also(session::save)

        DataUnitUpdatedEvent(unit.id)
            .also(applicationEventPublisher::publishEvent)
    }
}
