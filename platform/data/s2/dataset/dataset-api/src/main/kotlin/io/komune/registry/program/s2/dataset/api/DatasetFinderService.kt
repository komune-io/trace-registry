package io.komune.registry.program.s2.dataset.api

import f2.dsl.cqrs.filter.Match
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO
import f2.dsl.cqrs.page.map
import io.komune.registry.program.s2.dataset.api.entity.DatasetRepository
import io.komune.registry.program.s2.dataset.api.entity.toModel
import io.komune.registry.program.s2.dataset.api.query.DatasetPageQueryDB
import io.komune.registry.s2.commons.exception.NotFoundException
import io.komune.registry.s2.commons.model.DatasetId
import io.komune.registry.s2.commons.model.DatasetIdentifier
import io.komune.registry.s2.dataset.domain.automate.DatasetState
import io.komune.registry.s2.dataset.domain.model.DatasetModel
import io.komune.registry.s2.dataset.domain.model.DistributionId
import io.komune.registry.s2.dataset.domain.model.DistributionModel
import org.springframework.stereotype.Service

@Service
class DatasetFinderService(
    private val datasetPageQueryDB: DatasetPageQueryDB,
    private val datasetRepository: DatasetRepository
) {
	suspend fun getOrNull(id: DatasetId): DatasetModel? {
		return datasetRepository.findById(id).orElse(null)?.toModel()
	}

	suspend fun getOrNullByIdentifier(id: DatasetIdentifier, language: String): DatasetModel? {
		return datasetRepository.findByIdentifierAndLanguage(id, language)
			.orElse(null)
			?.toModel()
	}

	suspend fun get(id: DatasetId): DatasetModel {
		return getOrNull(id) ?: throw NotFoundException("Dataset", id)
	}

	suspend fun getAll(): List<DatasetModel> {
		return datasetRepository.findAll().map { it.toModel() }
	}

	suspend fun page(
		id: Match<DatasetId>? = null,
		identifier: Match<DatasetIdentifier>? = null,
		title: Match<String>? = null,
		datasetIds: Match<DatasetId>? = null,
		status: Match<DatasetState>? = null,
		offset: OffsetPagination? = null
	): PageDTO<DatasetModel> {
		return datasetPageQueryDB.execute(
			id = id,
			identifier = identifier,
			title = title,
			datasetIds = datasetIds,
			status = status,
			offset = offset,
		).map {
			it.toModel()
		}
	}

	suspend fun listByIdentifier(identifier: String): List<DatasetModel> {
		return datasetRepository.findAllByIdentifier(identifier)
			.map { it.toModel() }
	}

	suspend fun getDistribution(datasetId: DatasetId, distributionId: DistributionId): DistributionModel {
		return datasetRepository.findById(datasetId)
			.orElseThrow { NotFoundException("Dataset", datasetId) }
			.distributions
			?.firstOrNull { it.id == distributionId }
			?.toModel()
			?: throw NotFoundException("Distribution", distributionId)
	}
}
