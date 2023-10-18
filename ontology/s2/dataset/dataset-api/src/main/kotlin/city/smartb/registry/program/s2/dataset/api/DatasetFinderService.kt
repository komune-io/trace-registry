package city.smartb.registry.program.s2.dataset.api

import city.smartb.registry.api.commons.exception.NotFoundException
import city.smartb.registry.program.s2.dataset.api.entity.DatasetEntity
import city.smartb.registry.program.s2.dataset.api.entity.DatasetRepository
import city.smartb.registry.program.s2.dataset.api.entity.toDataset
import city.smartb.registry.program.s2.dataset.api.query.DatasetPageQueryDB
import city.smartb.registry.s2.dataset.domain.automate.DatasetId
import city.smartb.registry.s2.dataset.domain.DatasetFinder
import city.smartb.registry.s2.dataset.domain.automate.DatasetIdentifier
import city.smartb.registry.s2.dataset.domain.automate.DatasetState
import city.smartb.registry.s2.dataset.domain.model.DatasetModel
import f2.dsl.cqrs.filter.CollectionMatch
import f2.dsl.cqrs.filter.Match
import f2.dsl.cqrs.filter.StringMatch
import f2.dsl.cqrs.filter.andMatchOfNotNull
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO
import f2.dsl.cqrs.page.map
import org.springframework.stereotype.Service

@Service
class DatasetFinderService(
	private val datasetPageQueryDB: DatasetPageQueryDB,
	private val datasetRepository: DatasetRepository
): DatasetFinder {
	override suspend fun getOrNull(id: DatasetId): DatasetModel? {
		return datasetRepository.findById(id).orElse(null)?.toDataset()
	}

	override suspend fun getOrNullByIdentifier(id: DatasetIdentifier): DatasetModel? {
		return datasetRepository.findByIdentifier(id).orElse(null)?.toDataset()
	}

	override suspend fun get(id: DatasetId): DatasetModel {
		return getOrNull(id) ?: throw NotFoundException("Dataset", id)
	}
	override suspend fun getAll(): List<DatasetModel> {
		return datasetRepository.findAll().map { it.toDataset() }
	}

	override suspend fun page(
		id: Match<DatasetId>?,
		identifier: Match<DatasetIdentifier>?,
		title: Match<String>?,
		status: Match<DatasetState>?,
		offset: OffsetPagination?
	): PageDTO<DatasetModel> {
		return datasetPageQueryDB.execute(
			id = id,
			identifier = identifier,
			title = title,
			status = status,
			offset = offset,
		).map {
			it.toDataset()
		}
	}
}
