package io.komune.registry.program.s2.dataset.api

import io.komune.registry.api.commons.utils.mapAsync
import io.komune.registry.infra.postgresql.SequenceRepository
import io.komune.registry.program.s2.dataset.api.config.DatasetAutomateExecutor
import io.komune.registry.program.s2.dataset.api.entity.DatasetEntity
import io.komune.registry.program.s2.dataset.api.entity.DatasetRepository
import io.komune.registry.program.s2.dataset.api.entity.DistributionEntity
import io.komune.registry.s2.cccev.api.CccevOldAggregateService
import io.komune.registry.s2.cccev.api.CccevOldFinderService
import io.komune.registry.s2.cccev.api.processor.compute
import io.komune.registry.s2.cccev.domain.command.value.SupportedValueCreateCommand
import io.komune.registry.s2.cccev.domain.command.value.SupportedValueDeprecateCommand
import io.komune.registry.s2.cccev.domain.command.value.SupportedValueUpdateValueCommand
import io.komune.registry.s2.cccev.domain.command.value.SupportedValueValidateCommand
import io.komune.registry.s2.cccev.domain.model.AggregatorType
import io.komune.registry.s2.cccev.domain.model.SumAggregatorInput
import io.komune.registry.s2.commons.exception.NotFoundException
import io.komune.registry.s2.commons.model.DistributionId
import io.komune.registry.s2.commons.model.InformationConceptId
import io.komune.registry.s2.commons.model.SupportedValueId
import io.komune.registry.s2.commons.utils.truncateLanguage
import io.komune.registry.s2.dataset.domain.command.DatasetAddAggregatorsCommand
import io.komune.registry.s2.dataset.domain.command.DatasetAddDistributionCommand
import io.komune.registry.s2.dataset.domain.command.DatasetAddedAggregatorsEvent
import io.komune.registry.s2.dataset.domain.command.DatasetAddedDistributionEvent
import io.komune.registry.s2.dataset.domain.command.DatasetCreateCommand
import io.komune.registry.s2.dataset.domain.command.DatasetCreatedEvent
import io.komune.registry.s2.dataset.domain.command.DatasetDeleteCommand
import io.komune.registry.s2.dataset.domain.command.DatasetDeletedEvent
import io.komune.registry.s2.dataset.domain.command.DatasetLinkDatasetsCommand
import io.komune.registry.s2.dataset.domain.command.DatasetLinkThemesCommand
import io.komune.registry.s2.dataset.domain.command.DatasetLinkedDatasetsEvent
import io.komune.registry.s2.dataset.domain.command.DatasetLinkedThemesEvent
import io.komune.registry.s2.dataset.domain.command.DatasetRemoveAggregatorsCommand
import io.komune.registry.s2.dataset.domain.command.DatasetRemoveDistributionCommand
import io.komune.registry.s2.dataset.domain.command.DatasetRemovedAggregatorsEvent
import io.komune.registry.s2.dataset.domain.command.DatasetRemovedDistributionEvent
import io.komune.registry.s2.dataset.domain.command.DatasetSetImageCommand
import io.komune.registry.s2.dataset.domain.command.DatasetSetImageEvent
import io.komune.registry.s2.dataset.domain.command.DatasetUnlinkDatasetsCommand
import io.komune.registry.s2.dataset.domain.command.DatasetUnlinkedDatasetsEvent
import io.komune.registry.s2.dataset.domain.command.DatasetUpdateCommand
import io.komune.registry.s2.dataset.domain.command.DatasetUpdateDistributionAggregatorValuesCommand
import io.komune.registry.s2.dataset.domain.command.DatasetUpdateDistributionCommand
import io.komune.registry.s2.dataset.domain.command.DatasetUpdatedDistributionAggregatorValuesEvent
import io.komune.registry.s2.dataset.domain.command.DatasetUpdatedDistributionEvent
import io.komune.registry.s2.dataset.domain.command.DatasetUpdatedEvent
import io.komune.registry.s2.dataset.domain.model.AggregatedValueModel
import org.springframework.stereotype.Service
import s2.automate.core.error.AutomateException
import java.util.UUID

@Service
class DatasetAggregateService(
	private val automate: DatasetAutomateExecutor,
	private val cccevOldAggregateService: CccevOldAggregateService,
	private val cccevOldFinderService: CccevOldFinderService,
	private val datasetRepository: DatasetRepository,
	private val sequenceRepository: SequenceRepository,
) {

	companion object {
		const val DATASET_ID_SEQUENCE = "dataset_id_sequence"
	}

	suspend fun create(command: DatasetCreateCommand): DatasetCreatedEvent = automate.init(command) {
		val existing = datasetRepository.findByIdentifierAndLanguage(command.identifier, command.language)
		existing.ifPresent {
			throw IllegalArgumentException("Dataset with identifier ${command.identifier} and language ${command.language} already exists")
		}
		DatasetCreatedEvent(
			id = "${sequenceRepository.nextValOf(DATASET_ID_SEQUENCE)}-${command.identifier}",
			date = System.currentTimeMillis(),
			identifier = command.identifier,
			catalogueId = command.catalogueId,
			title = command.title,
			type = command.type,
			description = command.description,
			language = command.language.truncateLanguage(),
			wasGeneratedBy = command.wasGeneratedBy,
			source = command.source,
			creator = command.creator,
			publisher = command.publisher,
			validator = command.validator,
			accessRights = command.accessRights,
			license = command.license,
			temporalResolution = command.temporalResolution,
			conformsTo = command.conformsTo,
			format = command.format,
			theme = command.theme,
			keywords = command.keywords,
			homepage = command.homepage,
			landingPage = command.landingPage,
			version = command.version,
			versionNotes = command.versionNotes,
			length = command.length,
			releaseDate = command.releaseDate,
			structure = command.structure,
			aggregators = command.aggregators?.toSet()
		)
	}

	suspend fun setImageCommand(command: DatasetSetImageCommand) = automate.transition(command) {
		DatasetSetImageEvent(
			id = command.id,
			date = System.currentTimeMillis(),
			img = command.img,
		)
	}

	suspend fun linkDatasets(
		command: DatasetLinkDatasetsCommand
	): DatasetLinkedDatasetsEvent = automate.transition(command) {
		DatasetLinkedDatasetsEvent(
			id = command.id,
			date = System.currentTimeMillis(),
			datasetIds = command.datasetIds.toSet()
		)
	}

	suspend fun unlinkDatasets(
		command: DatasetUnlinkDatasetsCommand
	): DatasetUnlinkedDatasetsEvent = automate.transition(command) {
		DatasetUnlinkedDatasetsEvent(
			id = command.id,
			date = System.currentTimeMillis(),
			datasetIds = command.datasetIds.toSet()
		)
	}

	suspend fun linkThemes(command: DatasetLinkThemesCommand): DatasetLinkedThemesEvent = automate.transition(command) {
		DatasetLinkedThemesEvent(
			id = command.id,
			date = System.currentTimeMillis(),
			themes = command.themes
		)
	}

	suspend fun update(command: DatasetUpdateCommand): DatasetUpdatedEvent = automate.transition(command) {
		DatasetUpdatedEvent(
			id = it.id,
			date = System.currentTimeMillis(),
			title = command.title,
			type = command.type,
			description = command.description,
			language = command.language.truncateLanguage(),
			wasGeneratedBy = command.wasGeneratedBy,
			source = command.source,
			creator = command.creator,
			publisher = command.publisher,
			validator = command.validator,
			accessRights = command.accessRights,
			license = command.license,
			temporalResolution = command.temporalResolution,
			conformsTo = command.conformsTo,
			format = command.format,
			theme = command.theme,
			keywords = command.keywords,
			homepage = command.homepage,
			landingPage = command.landingPage,
			version = command.version,
			versionNotes = command.versionNotes,
			length = command.length,
			releaseDate = command.releaseDate,
			structure = command.structure,
		)
	}

	suspend fun delete(command: DatasetDeleteCommand): DatasetDeletedEvent = automate.transition(command) { dataset ->
		dataset.distributions?.forEach { distribution ->
			distribution.aggregators.values.flatten().mapAsync {
				deprecateValue(it)
			}
		}
		dataset.aggregatorValueIds.values.mapAsync { value ->
			value?.let { deprecateValue(it.computedValue) }
		}

		dataset.datasetIds.mapAsync { childId ->
			delete(DatasetDeleteCommand(childId))
		}

		DatasetDeletedEvent(
			id = dataset.id,
			date = System.currentTimeMillis(),
		)
	}

	suspend fun addDistribution(command: DatasetAddDistributionCommand) = automate.transition(command) {
		DatasetAddedDistributionEvent(
			id = it.id,
			date = System.currentTimeMillis(),
			name = command.name,
			distributionId = command.distributionId ?: UUID.randomUUID().toString(),
			downloadPath = command.downloadPath,
			mediaType = command.mediaType
		)
	}

	suspend fun updateDistribution(command: DatasetUpdateDistributionCommand) = automate.transition(command) { dataset ->
		dataset.checkDistributionExists(command.distributionId)
		DatasetUpdatedDistributionEvent(
			id = command.id,
			date = System.currentTimeMillis(),
			distributionId = command.distributionId,
			name = command.name,
			downloadPath = command.downloadPath,
			mediaType = command.mediaType
		)
	}

	suspend fun updateDistributionAggregatorValues(
		command: DatasetUpdateDistributionAggregatorValuesCommand
	) = automate.transition(command) { dataset ->
		dataset.checkDistributionExists(command.distributionId)
		val distributionValues = dataset.distributionValues()

		command.addSupportedValueIds?.forEach { (conceptId, valueIds) ->
			distributionValues.getOrPut(conceptId) { mutableSetOf() }.addAll(valueIds)
			if (command.validateAndDeprecateValues) {
				valueIds.forEach { validateValue(it) }
			}
		}
		command.removeSupportedValueIds?.forEach { (conceptId, valueIds) ->
			distributionValues[conceptId]?.removeAll(valueIds)
			if (command.validateAndDeprecateValues) {
				valueIds.forEach { deprecateValue(it) }
			}
		}

		val updatedAggregators = dataset.aggregatorIds.associateWith { conceptId ->
			computeAndPersistAggregator(
				conceptId = conceptId,
				existingValueId = dataset.aggregatorValueIds[conceptId],
				distributionValues = distributionValues,
				validateValues = command.validateAndDeprecateValues
			)
		}

		DatasetUpdatedDistributionAggregatorValuesEvent(
			id = command.id,
			date = System.currentTimeMillis(),
			distributionId = command.distributionId,
			removedSupportedValueIds = command.removeSupportedValueIds,
			addedSupportedValueIds = command.addSupportedValueIds,
			updatedDatasetAggregators = updatedAggregators
		)
	}

	suspend fun removeDistribution(command: DatasetRemoveDistributionCommand) = automate.transition(command) { dataset ->
		val distribution = dataset.checkDistributionExists(command.distributionId)

		if (command.deprecateValues) {
			distribution.aggregators.forEach { (_, valueIds) ->
				valueIds.forEach { deprecateValue(it) }
			}
		}

		DatasetRemovedDistributionEvent(
			id = command.id,
			date = System.currentTimeMillis(),
			distributionId = command.distributionId
		)
	}

	suspend fun addAggregators(command: DatasetAddAggregatorsCommand) = automate.transition(command) { dataset ->
		val aggregators = command.informationConceptIds.associateWith {
			computeAndPersistAggregator(
				conceptId = it,
				existingValueId = dataset.aggregatorValueIds[it],
				distributionValues = dataset.distributionValues(),
				validateValues = command.validateComputedValues
			)
		}

		DatasetAddedAggregatorsEvent(
			id = command.id,
			date = System.currentTimeMillis(),
			aggregators = aggregators
		)
	}

	suspend fun removeAggregators(command: DatasetRemoveAggregatorsCommand) = automate.transition(command) { dataset ->
		command.informationConceptIds.forEach { conceptId ->
			dataset.aggregatorValueIds[conceptId]?.let { deprecateValue(it.computedValue) }
		}
		DatasetRemovedAggregatorsEvent(
			id = command.id,
			date = System.currentTimeMillis(),
			informationConceptIds = command.informationConceptIds.toSet()
		)
	}

	private fun DatasetEntity.checkDistributionExists(id: DistributionId): DistributionEntity {
		return distributions.orEmpty().find { it.id == id }
			?: throw NotFoundException("Distribution", id)
	}

	@Suppress("CyclomaticComplexMethod")
	private suspend fun computeAndPersistAggregator(
		conceptId: InformationConceptId,
		existingValueId: AggregatedValueModel?,
		distributionValues: Map<InformationConceptId, Set<SupportedValueId>>,
		validateValues: Boolean
	): AggregatedValueModel? {
		val concept = cccevOldFinderService.getConcept(conceptId)
		if (concept.aggregator == null || !concept.aggregator!!.persistValue || concept.unit == null) {
			return null
		}

		val aggregatedConceptIds = concept.aggregator!!.aggregatedConceptIds.orEmpty() + concept.id
		val aggregatedValueIds = distributionValues.filterKeys { it in aggregatedConceptIds }.values.flatten()

		val aggregatedValues = cccevOldFinderService.listValues(aggregatedValueIds)
			.map { it.value }

		val value = if (aggregatedValues.isEmpty()) {
			concept.aggregator!!.defaultValue
		} else {
			when (concept.aggregator!!.type) {
				AggregatorType.SUM -> SumAggregatorInput(aggregatedValues).compute()
			}
		}

		val storedComputedValueId = when {
			existingValueId != null && value != null -> {
				SupportedValueUpdateValueCommand(
					id = existingValueId.computedValue,
					value = value
				).let { cccevOldAggregateService.updateValue(it).id }
			}
			existingValueId != null && value == null -> {
				deprecateValue(existingValueId.computedValue)
				null
			}
			value != null -> {
				SupportedValueCreateCommand(
					conceptId = conceptId,
					unit = concept.unit!!,
					isRange = false,
					value = value,
					query = null,
					description = null
				).let {
					val valueId = cccevOldAggregateService.createValue(it).id
					if (validateValues) {
						validateValue(valueId)
					}
					valueId
				}
			}
			else -> null
		}

		return storedComputedValueId?.let {
			AggregatedValueModel(
				conceptId = conceptId,
				computedValue = storedComputedValueId,
				dependingValues = distributionValues.filterKeys { it in aggregatedConceptIds }
			)
		}
	}

	private fun DatasetEntity.distributionValues(): MutableMap<InformationConceptId, MutableSet<SupportedValueId>> {
		val distributionValues = mutableMapOf<InformationConceptId, MutableSet<SupportedValueId>>()
		distributions?.forEach { distribution ->
			distribution.aggregators.forEach { (conceptId, valueIds) ->
				distributionValues.getOrPut(conceptId) { mutableSetOf() }.addAll(valueIds)
			}
		}
		return distributionValues
	}

	private suspend fun validateValue(id: SupportedValueId) = try {
		cccevOldAggregateService.validateValue(SupportedValueValidateCommand(id))
	} catch (_: AutomateException) {}

	private suspend fun deprecateValue(id: SupportedValueId) = try {
		cccevOldAggregateService.deprecateValue(SupportedValueDeprecateCommand(id))
	} catch (_: AutomateException) {}
}
