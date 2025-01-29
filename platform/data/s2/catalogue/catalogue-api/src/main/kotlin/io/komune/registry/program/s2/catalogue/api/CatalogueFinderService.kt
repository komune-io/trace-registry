package io.komune.registry.program.s2.catalogue.api

import f2.dsl.cqrs.filter.CollectionMatch
import f2.dsl.cqrs.filter.Match
import f2.dsl.cqrs.filter.StringMatch
import f2.dsl.cqrs.filter.StringMatchCondition
import f2.dsl.cqrs.filter.andMatchOfNotNull
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO
import f2.dsl.cqrs.page.map
import io.komune.registry.program.s2.catalogue.api.entity.CatalogueRepository
import io.komune.registry.program.s2.catalogue.api.entity.toCatalogue
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
			?.toCatalogue()
	}

	override suspend fun getAll(): List<CatalogueModel> {
		return catalogueRepository.findAll().map {
			it.toCatalogue()
		}
	}

	override suspend fun getOrNullByIdentifier(id: CatalogueIdentifier, language: String): CatalogueModel? {
		return catalogueRepository.findByIdentifierAndLanguage(id, language)
			.orElse(null)
			?.toCatalogue()
	}

	override suspend fun getByIdentifier(id: CatalogueIdentifier, language: String): CatalogueModel {
		return getOrNullByIdentifier(id, language)
			?: throw NotFoundException("Catalogue", id)
	}

	override suspend fun get(id: CatalogueId): CatalogueModel {
		return getOrNull(id)
			?: throw NotFoundException("Catalogue", id)
	}

	override suspend fun page(
		id: Match<CatalogueId>?,
		identifier: Match<CatalogueIdentifier>?,
		title: Match<String>?,
		parentIdentifier: String?,
		language: String?,
		type: Match<String>?,
		status: Match<CatalogueState>?,
		offset: OffsetPagination?
	): PageDTO<CatalogueModel> {

		val childIdFilter = parentIdentifier
			?.let { pIdentifier ->
				if (language == null) {
					catalogueRepository.findAllByIdentifier(pIdentifier)
						.flatMap { it.catalogues }
				} else {
					catalogueRepository.findByIdentifierAndLanguage(pIdentifier, language)
						.orElse(null)
						?.catalogues
				}
			}?.ifEmpty { listOf("none") }
			?.let(::CollectionMatch)

		return cataloguePageQueryDB.execute(
			id = andMatchOfNotNull(
				id,
				childIdFilter
			),
			identifier = identifier,
			title = title,
			language = language?.let { StringMatch(it, StringMatchCondition.EXACT) },
			type = type,
			status = status,
			offset = offset,
		).map {
			it.toCatalogue()
		}
	}

	override suspend fun listByIdentifier(identifier: String): List<CatalogueModel> {
		return catalogueRepository.findAllByIdentifier(identifier)
			.map { it.toCatalogue() }
	}
}
