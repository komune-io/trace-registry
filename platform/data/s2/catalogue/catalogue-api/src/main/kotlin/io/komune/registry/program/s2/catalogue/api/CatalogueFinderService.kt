package io.komune.registry.program.s2.catalogue.api

import f2.dsl.cqrs.filter.CollectionMatch
import f2.dsl.cqrs.filter.Match
import f2.dsl.cqrs.filter.andMatchOfNotNull
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO
import f2.dsl.cqrs.page.map
import io.komune.registry.program.s2.catalogue.api.entity.CatalogueRepository
import io.komune.registry.program.s2.catalogue.api.entity.CatalogueSnapMeiliSearchRepository
import io.komune.registry.program.s2.catalogue.api.entity.toModel
import io.komune.registry.program.s2.catalogue.api.query.CataloguePageQueryDB
import io.komune.registry.s2.catalogue.domain.automate.CatalogueState
import io.komune.registry.s2.catalogue.domain.model.CatalogueModel
import io.komune.registry.s2.catalogue.domain.model.FacetPage
import io.komune.registry.s2.commons.exception.NotFoundException
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.CatalogueIdentifier
import io.komune.registry.s2.commons.model.Criterion
import io.komune.registry.s2.commons.model.DatasetId
import org.springframework.stereotype.Service

@Service
class CatalogueFinderService(
	private val cataloguePageQueryDB: CataloguePageQueryDB,
	private val catalogueRepository: CatalogueRepository,
	private val meiliSearch: CatalogueSnapMeiliSearchRepository
) {
	suspend fun getOrNull(id: CatalogueId): CatalogueModel? {
		return catalogueRepository.findById(id)
			.orElse(null)
			?.toModel()
	}

	suspend fun get(id: CatalogueId): CatalogueModel {
		return getOrNull(id)
			?: throw NotFoundException("Catalogue", id)
	}

	suspend fun getByIdentifierOrNull(identifier: CatalogueIdentifier): CatalogueModel? {
		return catalogueRepository.findByIdentifier(identifier)?.toModel()
	}

	suspend fun getByIdentifier(identifier: CatalogueIdentifier): CatalogueModel {
		return getByIdentifierOrNull(identifier)
			?: throw NotFoundException("Catalogue with identifier", identifier)
	}

	suspend fun getAll(): List<CatalogueModel> {
		return catalogueRepository.findAll().map {
			it.toModel()
		}
	}

	suspend fun page(
		id: Match<CatalogueId>? = null,
		identifier: Match<CatalogueIdentifier>? = null,
		title: Match<String>? = null,
		parentIdentifier: String? = null,
		language: Match<String>? = null,
		type: Match<String>? = null,
		childrenIds: Match<CatalogueId>? = null,
		datasetIds: Match<DatasetId>? = null,
		status: Match<CatalogueState>? = null,
		hidden: Match<Boolean>? = null,
		freeCriterion: Criterion? = null,
		offset: OffsetPagination? = null
	): PageDTO<CatalogueModel> {
		val childIdFilter = parentIdentifier
			?.let { pIdentifier ->
				catalogueRepository.findByIdentifier(pIdentifier)
					?.catalogueIds?.takeIf { it.isNotEmpty() }
					?: listOf("none")
			}?.let(::CollectionMatch)

		return cataloguePageQueryDB.execute(
			id = andMatchOfNotNull(
				id,
				childIdFilter
			),
			identifier = identifier,
			title = title,
			language = language,
			type = type,
			childrenIds = childrenIds,
			datasetIds = datasetIds,
			status = status,
			hidden = hidden,
			freeCriterion = freeCriterion,
			offset = offset,
		).map {
			it.toModel()
		}
	}

	suspend fun search(
		query: String? = null,
		language: Match<String>? = null,
		accessRights: Match<String>? = null,
		catalogueIds: Match<String>? = null,
		parentIdentifier: Match<String>? = null,
		type: Match<String>? = null,
		themeIds: Match<String>? = null,
		licenseId: Match<String>? = null,
		freeCriterion: Criterion? = null,
		page: OffsetPagination? = null
	): FacetPage<CatalogueModel> {
		return meiliSearch.search(
			language = language,
			query = query,
			accessRights = accessRights,
			catalogueIds = catalogueIds,
			type = type,
			themeIds = themeIds,
			licenseId = licenseId,
			freeCriterion = freeCriterion,
			page = page
		)
	}
}
