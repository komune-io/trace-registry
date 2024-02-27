package cccev.projection.api.entity.concept

import cccev.projection.api.entity.unit.DataUnitRepository
import cccev.s2.concept.domain.InformationConceptEvent
import cccev.s2.concept.domain.command.InformationConceptCreatedEvent
import cccev.s2.concept.domain.command.InformationConceptUpdatedEvent
import kotlinx.coroutines.reactor.awaitSingle
import org.springframework.stereotype.Service
import s2.sourcing.dsl.view.View

@Service
class InformationConceptEvolver(
	private val dataUnitRepository: DataUnitRepository,
	private val informationConceptRepository: InformationConceptRepository,
): View<InformationConceptEvent, InformationConceptEntity> {

	override suspend fun evolve(
		event: InformationConceptEvent, model: InformationConceptEntity?
	): InformationConceptEntity? = when (event) {
		is InformationConceptCreatedEvent -> created(event)
		is InformationConceptUpdatedEvent -> model?.updated(event)
		else -> TODO()
	}

	private suspend fun created(event: InformationConceptCreatedEvent): InformationConceptEntity {
		val concepts = event.dependsOn?.let { dependsOn ->
			informationConceptRepository.findAllById(dependsOn).collectList().awaitSingle()
		} ?: emptyList()
		val unit = event.hasUnit?.let { hasUnit ->
			dataUnitRepository.findById(hasUnit).awaitSingle()
		}

		return InformationConceptEntity(
			id = event.id,
			identifier = event.identifier ?: event.id.replace(Regex("[^a-zA-Z0-9]"), "_"),
			name = event.name,
			hasUnit = unit,
			description = event.description,
			expressionOfExpectedValue = event.expressionOfExpectedValue,
			dependsOn = concepts,
			status = event.status
		)
	}

	private suspend fun InformationConceptEntity.updated(event: InformationConceptUpdatedEvent): InformationConceptEntity {
		val dependencies = event.dependsOn?.let { dependsOn ->
			informationConceptRepository.findAllById(dependsOn).collectList().awaitSingle()
		} ?: emptyList()
		return copy(
			name = event.name,
			description = event.description,
			expressionOfExpectedValue = event.expressionOfExpectedValue,
			dependsOn = dependencies,
			status = event.status,
		)
	}
}
