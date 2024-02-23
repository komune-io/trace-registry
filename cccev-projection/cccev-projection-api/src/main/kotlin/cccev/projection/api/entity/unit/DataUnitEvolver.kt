package cccev.projection.api.entity.unit

import cccev.s2.unit.domain.DataUnitEvent
import cccev.s2.unit.domain.command.DataUnitCreatedEvent
import cccev.s2.unit.domain.command.DataUnitUpdatedEvent
import org.springframework.stereotype.Service
import s2.sourcing.dsl.view.View

@Service
class DataUnitEvolver(
	private val dataUnitRepository: DataUnitRepository,
): View<DataUnitEvent, DataUnitEntity> {

	override suspend fun evolve(
		event: DataUnitEvent, model: DataUnitEntity?
	): DataUnitEntity? = when (event) {
		is DataUnitCreatedEvent -> created(event)
		is DataUnitUpdatedEvent -> model?.updated(event)
		else -> TODO()
	}

	private suspend fun created(event: DataUnitCreatedEvent): DataUnitEntity {
		return DataUnitEntity(
			id = event.id,
			identifier = event.identifier,
			name = event.name,
			description = event.description,
			notation = event.notation,
			type = event.type,
			options = event.options?.map { option ->
				DataUnitOptionEntity(
					id = option.id,
					identifier = option.identifier,
					name = option.name,
					value = option.value,
					order = option.order,
					icon = option.icon,
					color = option.color,
				)
			}?.toMutableList(),
			status = event.status
		)
	}

	private suspend fun DataUnitEntity.updated(event: DataUnitUpdatedEvent): DataUnitEntity {
		val existingOptions = options?.associateBy(DataUnitOptionEntity::identifier).orEmpty()
		return copy(
			name = event.name,
			description = event.description,
			notation = event.notation,
			options = event.options?.map { option ->
				existingOptions[option.identifier] ?: DataUnitOptionEntity(
					id = option.id,
					identifier = option.identifier,
					name = option.name,
					value = option.value,
					order = option.order,
					icon = option.icon,
					color = option.color,
				)
			}?.toMutableList(),
			status = event.status
		)
	}
}
