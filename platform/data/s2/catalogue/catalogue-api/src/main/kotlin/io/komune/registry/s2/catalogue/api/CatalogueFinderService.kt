package io.komune.registry.s2.catalogue.api

import f2.dsl.cqrs.filter.AndMatch
import f2.dsl.cqrs.filter.CollectionMatch
import f2.dsl.cqrs.filter.Match
import f2.dsl.cqrs.filter.andMatchOfNotNull
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO
import f2.dsl.cqrs.page.map
import io.komune.registry.api.commons.utils.anyNotNull
import io.komune.registry.s2.catalogue.api.entity.CatalogueRepository
import io.komune.registry.s2.catalogue.api.entity.CatalogueSnapMeiliSearchRepository
import io.komune.registry.s2.catalogue.api.entity.toModel
import io.komune.registry.s2.catalogue.api.query.CataloguePageQueryDB
import io.komune.registry.s2.catalogue.domain.automate.CatalogueState
import io.komune.registry.s2.catalogue.domain.model.CatalogueCriterionField
import io.komune.registry.s2.catalogue.domain.model.CatalogueModel
import io.komune.registry.s2.commons.exception.NotFoundException
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.CatalogueIdentifier
import io.komune.registry.s2.commons.model.Criterion
import io.komune.registry.s2.commons.model.DatasetId
import io.komune.registry.s2.commons.model.FacetPageModel
import io.komune.registry.s2.commons.model.FieldCriterion
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.commons.model.OrganizationId
import io.komune.registry.s2.commons.model.andCriterionOfNotNull
import io.komune.registry.s2.commons.model.orCriterionOf
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

	suspend fun page(
		id: Match<CatalogueId>? = null,
		identifier: Match<CatalogueIdentifier>? = null,
		parentId: Match<CatalogueId>? = null,
		parentIdentifier: Match<CatalogueIdentifier>? = null,
		title: Match<String>? = null,
		language: Match<String>? = null,
		type: Match<String>? = null,
		childrenCatalogueIds: Match<CatalogueId>? = null,
		relatedInCatalogueIds: Map<String, Match<CatalogueId>>? = null,
		childrenDatasetIds: Match<DatasetId>? = null,
		referencedDatasetIds: Match<DatasetId>? = null,
		creatorOrganizationId: Match<OrganizationId>? = null,
		status: Match<CatalogueState>? = null,
		hidden: Match<Boolean>? = null,
		freeCriterion: Criterion? = null,
		offset: OffsetPagination? = null
	): PageDTO<CatalogueModel> {
		return cataloguePageQueryDB.execute(
			id = buildIdMatch(
				id = id,
				parentId = parentId,
				parentIdentifier = parentIdentifier,
				relatedInCatalogueIds = relatedInCatalogueIds
			),
			identifier = identifier,
			title = title,
			language = language,
			type = type,
			childrenCatalogueIds = childrenCatalogueIds,
			childrenDatasetIds = childrenDatasetIds,
			referencedDatasetIds = referencedDatasetIds,
			creatorOrganizationId = creatorOrganizationId,
			status = status,
			hidden = hidden,
			freeCriterion = freeCriterion,
			offset = offset,
		).map { it.toModel() }
	}

	suspend fun search(
		query: String? = null,
		language: Match<String>? = null,
		accessRights: Match<String>? = null,
		catalogueIds: Match<String>? = null,
		parentId: Match<CatalogueId>? = null,
		parentIdentifier: Match<CatalogueIdentifier>? = null,
		type: Match<String>? = null,
		relatedCatalogueIds: Map<String, Match<CatalogueId>>? = null,
		relatedInCatalogueIds: Map<String, Match<CatalogueId>>? = null,
		themeIds: Match<String>? = null,
		licenseId: Match<String>? = null,
		creatorOrganizationId: Match<OrganizationId>? = null,
		availableLanguages: Match<Language>? = null,
		freeCriterion: Criterion? = null,
		page: OffsetPagination? = null
	): FacetPageModel<CatalogueModel> {
		val idMatch = buildIdMatch(
			parentId = parentId,
			parentIdentifier = parentIdentifier,
			relatedInCatalogueIds = relatedInCatalogueIds
		)

		val idFilter = idMatch?.let {
			orCriterionOf(
				FieldCriterion(CatalogueCriterionField.Id, it),
				FieldCriterion(CatalogueCriterionField.IsTranslationOf, it)
			)
		}

		return meiliSearch.search(
			language = language,
			query = query,
			accessRights = accessRights,
			catalogueIds = catalogueIds,
			relatedCatalogueIds = relatedCatalogueIds,
			type = type,
			themeIds = themeIds,
			licenseId = licenseId,
			creatorOrganizationId = creatorOrganizationId,
			availableLanguages = availableLanguages,
			freeCriterion = andCriterionOfNotNull(
				freeCriterion,
				idFilter
			),
			page = page
		)
	}

	suspend fun checkExist(ids: Collection<CatalogueId>) {
		if (ids.isEmpty()) return

		val distinctIds = ids.toSet()
		val existingCatalogues = page(id = CollectionMatch(distinctIds)).items

		if (existingCatalogues.size < distinctIds.size) {
			val missingIds = distinctIds - existingCatalogues.map { it.id }.toSet()
			throw NotFoundException("Catalogues", missingIds.joinToString(", "))
		}
	}

	private suspend fun buildIdMatch(
		id: Match<CatalogueId>? = null,
		parentId: Match<CatalogueId>? = null,
		parentIdentifier: Match<CatalogueIdentifier>? = null,
		relatedInCatalogueIds: Map<String, Match<CatalogueId>>? = null
	) : Match<CatalogueId>? {
		val childIdMatch = takeIf { anyNotNull(parentId, parentIdentifier) }?.let {
			page(
				id = parentId,
				identifier = parentIdentifier,
			).items.flatMap { it.childrenCatalogueIds }
				.toSet()
				.ifEmpty { setOf("none") }
				.let(::CollectionMatch)
		}

		val relatedInIdMatch = relatedInCatalogueIds?.map { (relation, match) ->
			page(id = match).items
				.flatMap { it.relatedCatalogueIds?.get(relation).orEmpty() }
				.toSet()
				.ifEmpty { setOf("none") }
				.let(::CollectionMatch)
		}?.let { AndMatch(it) }

		return andMatchOfNotNull(
			id,
			childIdMatch,
			relatedInIdMatch
		)
	}
}
