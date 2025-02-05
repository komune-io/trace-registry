package io.komune.registry.program.s2.catalogue.api

import f2.dsl.cqrs.filter.CollectionMatch
import f2.dsl.cqrs.filter.Match
import f2.dsl.cqrs.filter.andMatchOfNotNull
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO
import f2.dsl.cqrs.page.map
import io.komune.registry.program.s2.catalogue.api.entity.CatalogueRepository
import io.komune.registry.program.s2.catalogue.api.entity.toModel
import io.komune.registry.program.s2.catalogue.api.query.CataloguePageQueryDB
import io.komune.registry.s2.catalogue.domain.CatalogueFinder
import io.komune.registry.s2.catalogue.domain.automate.CatalogueId
import io.komune.registry.s2.catalogue.domain.automate.CatalogueIdentifier
import io.komune.registry.s2.catalogue.domain.automate.CatalogueState
import io.komune.registry.s2.catalogue.domain.model.CatalogueModel
import io.komune.registry.s2.commons.exception.NotFoundException
import org.springframework.stereotype.Service

@Service
class CatalogueFinderService(
	private val cataloguePageQueryDB: CataloguePageQueryDB,
	private val catalogueRepository: CatalogueRepository
): CatalogueFinder {
	override suspend fun getOrNull(id: CatalogueId): CatalogueModel? {
		return catalogueRepository.findById(id)
			.orElse(null)
			?.toModel()
	}

	override suspend fun get(id: CatalogueId): CatalogueModel {
		return getOrNull(id)
			?: throw NotFoundException("Catalogue", id)
	}

	override suspend fun getByIdentifierOrNull(identifier: CatalogueIdentifier): CatalogueModel? {
		return catalogueRepository.findByIdentifier(identifier)?.toModel()
	}

	override suspend fun getByIdentifier(identifier: CatalogueIdentifier): CatalogueModel {
		return getByIdentifierOrNull(identifier)
			?: throw NotFoundException("Catalogue with identifier", identifier)
	}

	override suspend fun getAll(): List<CatalogueModel> {
		return catalogueRepository.findAll().map {
			it.toModel()
		}
	}

	override suspend fun page(
		id: Match<CatalogueId>?,
		identifier: Match<CatalogueIdentifier>?,
		title: Match<String>?,
		parentIdentifier: String?,
		language: Match<String>?,
		type: Match<String>?,
		status: Match<CatalogueState>?,
		hidden: Match<Boolean>?,
		offset: OffsetPagination?
	): PageDTO<CatalogueModel> {
		val childIdFilter = parentIdentifier
			?.let { pIdentifier ->
				catalogueRepository.findByIdentifier(pIdentifier)
					?.catalogueIds
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
			status = status,
			hidden = hidden,
			offset = offset,
		).map {
			it.toModel()
		}
	}
}
