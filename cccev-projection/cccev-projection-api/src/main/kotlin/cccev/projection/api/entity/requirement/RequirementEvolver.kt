package cccev.projection.api.entity.requirement

import cccev.commons.utils.toJson
import cccev.projection.api.entity.concept.InformationConceptEntity
import cccev.projection.api.entity.concept.InformationConceptRepository
import cccev.projection.api.entity.evidencetypelist.EvidenceTypeListRepository
import cccev.projection.api.entity.framework.FrameworkRepository
import cccev.s2.requirement.domain.RequirementEvent
import cccev.s2.requirement.domain.command.RequirementAddedConceptsEvent
import cccev.s2.requirement.domain.command.RequirementAddedEvidenceTypeListsEvent
import cccev.s2.requirement.domain.command.RequirementAddedRequirementsEvent
import cccev.s2.requirement.domain.command.RequirementCreatedEvent
import cccev.s2.requirement.domain.command.RequirementRemovedConceptsEvent
import cccev.s2.requirement.domain.command.RequirementRemovedEvidenceTypeListsEvent
import cccev.s2.requirement.domain.command.RequirementRemovedRequirementsEvent
import cccev.s2.requirement.domain.command.RequirementUpdatedEvent
import kotlinx.coroutines.reactor.awaitSingle
import org.springframework.stereotype.Service
import s2.sourcing.dsl.view.View

@Service
class RequirementEvolver(
	private val evidenceTypeListRepository: EvidenceTypeListRepository,
	private val frameworkRepository: FrameworkRepository,
	private val informationConceptRepository: InformationConceptRepository,
	private val requirementRepository: RequirementRepository
): View<RequirementEvent, RequirementEntity> {

	override suspend fun evolve(event: RequirementEvent, model: RequirementEntity?): RequirementEntity? = when (event) {
		is RequirementCreatedEvent -> create(event)
		is RequirementUpdatedEvent -> model?.update(event)
		is RequirementAddedRequirementsEvent -> model?.addRequirements(event)
		is RequirementRemovedRequirementsEvent -> model?.removeRequirements(event)
		is RequirementAddedConceptsEvent -> model?.addConcepts(event)
		is RequirementRemovedConceptsEvent -> model?.removeConcepts(event)
		is RequirementAddedEvidenceTypeListsEvent -> model?.addEvidenceTypeLists(event)
		is RequirementRemovedEvidenceTypeListsEvent -> model?.removeEvidenceTypeLists(event)
		else -> TODO()
	}

	private suspend fun create(event: RequirementCreatedEvent): RequirementEntity {
		val hasQualifiedRelation = event.hasQualifiedRelation
			.plus(RequirementEntity.HAS_REQUIREMENT to event.hasRequirement)
			.mapValues { (_, requirementIds) ->
				requirementRepository.findAllById(requirementIds).collectList().awaitSingle()
			}

		val conceptIds = event.hasConcept.toSet() + event.enablingConditionDependencies + event.validatingConditionDependencies
		val concepts = informationConceptRepository.findAllById(conceptIds)
			.collectList().awaitSingle()
			.associateBy(InformationConceptEntity::id)
		val evidenceTypeLists = evidenceTypeListRepository.findAllById(event.hasEvidenceTypeList).collectList().awaitSingle()
		val frameworks = frameworkRepository.findAllById(event.isDerivedFrom ?: emptyList()).collectList().awaitSingle()

		return RequirementEntity(
			id = event.id,
			identifier = event.identifier,
			status = event.status,
			kind = event.kind,
			name = event.name,
			description = event.description,
			type = event.type,
			isDerivedFrom = frameworks,
			hasQualifiedRelation = hasQualifiedRelation.toMutableMap(),
			hasConcept = event.hasConcept.mapNotNull { concepts[it] }.toMutableList(),
			hasEvidenceTypeList = evidenceTypeLists,
			enablingCondition = event.enablingCondition,
			enablingConditionDependencies = event.enablingConditionDependencies.mapNotNull { concepts[it] }.toMutableList(),
			required = event.required,
			validatingCondition = event.validatingCondition,
			validatingConditionDependencies = event.validatingConditionDependencies.mapNotNull { concepts[it] }.toMutableList(),
			order = event.order,
			properties = event.properties?.toJson()
		)
	}

	private suspend fun RequirementEntity.update(event: RequirementUpdatedEvent): RequirementEntity {
		val hasQualifiedRelation = event.hasQualifiedRelation
			.plus(RequirementEntity.HAS_REQUIREMENT to event.hasRequirement)
			.mapValues { (_, requirementIds) ->
				requirementRepository.findAllById(requirementIds).collectList().awaitSingle()
			}

		val conceptIds = event.hasConcept.toSet() + event.enablingConditionDependencies + event.validatingConditionDependencies
		val concepts = informationConceptRepository.findAllById(conceptIds)
			.collectList().awaitSingle()
			.associateBy(InformationConceptEntity::id)
		val evidenceTypeLists = evidenceTypeListRepository.findAllById(event.hasEvidenceTypeList).collectList().awaitSingle()

		return copy(
			id = event.id,
			name = event.name,
			description = event.description,
			type = event.type,
			hasQualifiedRelation = hasQualifiedRelation.toMutableMap(),
			hasConcept = event.hasConcept.mapNotNull { concepts[it] }.toMutableList(),
			hasEvidenceTypeList = evidenceTypeLists,
			enablingCondition = event.enablingCondition,
			enablingConditionDependencies = event.enablingConditionDependencies.mapNotNull { concepts[it] }.toMutableList(),
			required = event.required,
			validatingCondition = event.validatingCondition,
			validatingConditionDependencies = event.validatingConditionDependencies.mapNotNull { concepts[it] }.toMutableList(),
			order = event.order,
			properties = event.properties?.toJson()
		)
	}

	private suspend fun RequirementEntity.addRequirements(event: RequirementAddedRequirementsEvent) = apply {
		val children = hasQualifiedRelation.getOrPut(RequirementEntity.HAS_REQUIREMENT, ::mutableListOf)
		val currentChildrenIds = children.map { it.id }.toSet()

		val newRequirements = event.requirementIds.filter { it !in currentChildrenIds }
			.let { requirementRepository.findAllById(it).collectList().awaitSingle() }

		children += newRequirements
	}

	private suspend fun RequirementEntity.removeRequirements(event: RequirementRemovedRequirementsEvent) = apply {
		hasQualifiedRelation[RequirementEntity.HAS_REQUIREMENT]?.let { hasRequirement ->
			hasRequirement.removeIf { it.id in event.requirementIds }
		}
	}

	private suspend fun RequirementEntity.addConcepts(event: RequirementAddedConceptsEvent) = apply {
		val currentConceptIds = hasConcept.map { it.id }.toSet()
		hasConcept += event.conceptIds.filter { it !in currentConceptIds }
			.let { informationConceptRepository.findAllById(it).collectList().awaitSingle() }
	}

	private suspend fun RequirementEntity.removeConcepts(event: RequirementRemovedConceptsEvent) = apply {
		hasConcept.removeIf { it.id in event.conceptIds }
	}

	private suspend fun RequirementEntity.addEvidenceTypeLists(event: RequirementAddedEvidenceTypeListsEvent) = apply {
		val currentETLIds = hasEvidenceTypeList.map { it.id }.toSet()
		hasEvidenceTypeList += event.evidenceTypeListIds.filter { it !in currentETLIds }
			.let { evidenceTypeListRepository.findAllById(it).collectList().awaitSingle() }
	}

	private suspend fun RequirementEntity.removeEvidenceTypeLists(event: RequirementRemovedEvidenceTypeListsEvent) = apply {
		hasEvidenceTypeList.removeIf { it.id in event.evidenceTypeListIds }
	}
}
