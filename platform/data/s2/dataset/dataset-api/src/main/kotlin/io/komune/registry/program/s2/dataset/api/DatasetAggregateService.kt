package io.komune.registry.program.s2.dataset.api

import io.komune.registry.infra.postgresql.SequenceRepository
import io.komune.registry.program.s2.dataset.api.config.DatasetAutomateExecutor
import io.komune.registry.program.s2.dataset.api.entity.DatasetEntity
import io.komune.registry.program.s2.dataset.api.entity.DatasetRepository
import io.komune.registry.s2.cccev.api.CccevAggregateService
import io.komune.registry.s2.cccev.api.CccevFinderService
import io.komune.registry.s2.cccev.api.processor.compute
import io.komune.registry.s2.cccev.domain.command.value.SupportedValueCreateCommand
import io.komune.registry.s2.cccev.domain.command.value.SupportedValueDeprecateCommand
import io.komune.registry.s2.cccev.domain.command.value.SupportedValueUpdateValueCommand
import io.komune.registry.s2.cccev.domain.model.AggregatorType
import io.komune.registry.s2.cccev.domain.model.SumAggregatorInput
import io.komune.registry.s2.commons.exception.NotFoundException
import io.komune.registry.s2.commons.model.DistributionId
import io.komune.registry.s2.commons.model.InformationConceptId
import io.komune.registry.s2.commons.model.SupportedValueId
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
import java.util.UUID

@Service
class DatasetAggregateService(
	private val automate: DatasetAutomateExecutor,
	private val cccevAggregateService: CccevAggregateService,
	private val cccevFinderService: CccevFinderService,
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
			language = command.language,
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
			id =  command.id,
			date = System.currentTimeMillis(),
			datasetIds = command.datasetIds
		)
	}

	suspend fun unlinkDatasets(
		command: DatasetUnlinkDatasetsCommand
	): DatasetUnlinkedDatasetsEvent = automate.transition(command) {
		DatasetUnlinkedDatasetsEvent(
			id =  command.id,
			date = System.currentTimeMillis(),
			datasetIds = command.datasetIds
		)
	}

	suspend fun linkThemes(command: DatasetLinkThemesCommand): DatasetLinkedThemesEvent = automate.transition(command) {
		DatasetLinkedThemesEvent(
			id =  command.id,
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
			language = command.language,
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

	suspend fun delete(command: DatasetDeleteCommand): DatasetDeletedEvent = automate.transition(command) {
		DatasetDeletedEvent(
			id = it.id,
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
		}
		command.removeSupportedValueIds?.forEach { (conceptId, valueIds) ->
			distributionValues[conceptId]?.removeAll(valueIds)
		}

		val updatedAggregators = dataset.aggregatorIds.associateWith { conceptId ->
			computeAndPersistAggregator(
				conceptId = conceptId,
				existingValueId = dataset.aggregatorValueIds[conceptId],
				distributionValues = distributionValues
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
		dataset.checkDistributionExists(command.distributionId)
		DatasetRemovedDistributionEvent(
			id = command.id,
			date = System.currentTimeMillis(),
			distributionId = command.distributionId
		)
	}

	suspend fun addAggregators(command: DatasetAddAggregatorsCommand) = automate.transition(command) { dataset ->
		DatasetAddedAggregatorsEvent(
			id = command.id,
			date = System.currentTimeMillis(),
			aggregators = command.informationConceptIds.associateWith {
				computeAndPersistAggregator(
					conceptId = it,
					existingValueId = dataset.aggregatorValueIds[it],
					distributionValues = dataset.distributionValues()
				)
			}
		)
	}

	suspend fun removeAggregators(command: DatasetRemoveAggregatorsCommand) = automate.transition(command) { dataset ->
		command.informationConceptIds.forEach { conceptId ->
			dataset.aggregatorValueIds[conceptId]?.let {
				cccevAggregateService.deprecateValue(SupportedValueDeprecateCommand(it.computedValue))
			}
		}
		DatasetRemovedAggregatorsEvent(
			id = command.id,
			date = System.currentTimeMillis(),
			informationConceptIds = command.informationConceptIds.toSet()
		)
	}

	private fun DatasetEntity.checkDistributionExists(id: DistributionId) {
		if (distributions.orEmpty().none { it.id == id }) {
			throw NotFoundException("Distribution", id)
		}
	}

	@Suppress("CyclomaticComplexMethod")
	private suspend fun computeAndPersistAggregator(
		conceptId: InformationConceptId,
		existingValueId: AggregatedValueModel?,
		distributionValues: Map<InformationConceptId, Set<SupportedValueId>>
	): AggregatedValueModel? {
		val concept = cccevFinderService.getConcept(conceptId)
		if (concept.aggregator == null || !concept.aggregator!!.persistValue || concept.unit == null) {
			return null
		}

		val aggregatedConceptIds = concept.aggregator!!.aggregatedConceptIds.orEmpty() + concept.id
		val aggregatedValueIds = distributionValues.filterKeys { it in aggregatedConceptIds }.values.flatten()

		val aggregatedValues = cccevFinderService.listValues(aggregatedValueIds)
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
				).let { cccevAggregateService.updateValue(it).id }
			}
			existingValueId != null && value == null -> {
				SupportedValueDeprecateCommand(
					id = existingValueId.computedValue,
				).let { cccevAggregateService.deprecateValue(it) }
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
				).let { cccevAggregateService.createValue(it).id }
			}
			else -> null
		}

		return storedComputedValueId?.let {
			AggregatedValueModel(
				conceptId = conceptId,
				computedValue = storedComputedValueId,
				dependingValues = distributionValues
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
}
