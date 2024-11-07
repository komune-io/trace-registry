package io.komune.registry.program.s2.catalogue.api

import f2.dsl.cqrs.filter.CollectionMatch
import f2.dsl.cqrs.filter.Match
import f2.dsl.cqrs.filter.StringMatch
import f2.dsl.cqrs.filter.andMatchOfNotNull
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO
import f2.dsl.cqrs.page.map
import io.komune.registry.api.commons.exception.NotFoundException
import io.komune.registry.program.s2.catalogue.api.entity.CatalogueRepository
import io.komune.registry.program.s2.catalogue.api.entity.toCatalogue
import io.komune.registry.program.s2.catalogue.api.query.CataloguePageQueryDB
import io.komune.registry.s2.catalogue.domain.CatalogueFinder
import io.komune.registry.s2.catalogue.domain.automate.CatalogueId
import io.komune.registry.s2.catalogue.domain.automate.CatalogueIdentifier
import io.komune.registry.s2.catalogue.domain.automate.CatalogueState
import io.komune.registry.s2.catalogue.domain.model.CatalogueModel
import org.springframework.stereotype.Service

@Service
class CatalogueFinderService(
    private val cataloguePageQueryDB: CataloguePageQueryDB,
    private val catalogueRepository: CatalogueRepository
): CatalogueFinder {
	override suspend fun getOrNull(id: CatalogueId): CatalogueModel? {
		return catalogueRepository.findById(id).orElse(null)?.toCatalogue()
	}

	override suspend fun getAll(): List<CatalogueModel> {
		return catalogueRepository.findAll().map {
			it.toCatalogue()
		}
	}

	override suspend fun getOrNullByIdentifier(id: CatalogueIdentifier): CatalogueModel? {
		return catalogueRepository.findByIdentifier(id).orElse(null)?.toCatalogue()
	}

	override suspend fun get(id: CatalogueId): CatalogueModel {
		return getOrNull(id) ?: throw NotFoundException("Catalogue", id)
	}

	override suspend fun page(
		id: Match<CatalogueId>?,
		identifier: Match<CatalogueIdentifier>?,
		title: Match<String>?,
		parentIdentifier: StringMatch?,
		status: Match<CatalogueState>?,
		offset: OffsetPagination?
	): PageDTO<CatalogueModel> {

		val parents = parentIdentifier?.value?.let { identifier ->
			getOrNullByIdentifier(identifier)?.catalogues
		}?.let { catalogues ->
			CollectionMatch(catalogues)
		}

		return cataloguePageQueryDB.execute(
			id = andMatchOfNotNull(
				parents,
				id
			),
			identifier = identifier,
			title = title,
			status = status,
			offset = offset,
		).map {
			it.toCatalogue()
		}
	}
}
