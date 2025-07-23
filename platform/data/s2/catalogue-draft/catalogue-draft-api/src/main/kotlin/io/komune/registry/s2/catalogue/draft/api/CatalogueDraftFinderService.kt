package io.komune.registry.s2.catalogue.draft.api

import f2.dsl.cqrs.filter.ExactMatch
import f2.dsl.cqrs.filter.Match
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.map
import f2.spring.exception.NotFoundException
import io.komune.registry.s2.catalogue.draft.api.entity.CatalogueDraftEntity
import io.komune.registry.s2.catalogue.draft.api.entity.CatalogueDraftRepository
import io.komune.registry.s2.catalogue.draft.api.entity.toModel
import io.komune.registry.s2.catalogue.draft.api.query.CatalogueDraftPageQueryDB
import io.komune.registry.s2.catalogue.draft.domain.CatalogueDraftState
import io.komune.registry.s2.catalogue.draft.domain.model.CatalogueDraftModel
import io.komune.registry.s2.commons.model.CatalogueDraftId
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.UserId
import org.springframework.stereotype.Service

@Service
class CatalogueDraftFinderService(
    private val catalogueDraftPageQueryDB: CatalogueDraftPageQueryDB,
    private val catalogueDraftRepository: CatalogueDraftRepository,
) {
    suspend fun getOrNull(id: CatalogueDraftId): CatalogueDraftModel? {
        return catalogueDraftRepository.findById(id)
            .orElse(null)
            ?.toModel()
    }

    suspend fun get(id: CatalogueDraftId): CatalogueDraftModel {
        return getOrNull(id)
            ?: throw NotFoundException("CatalogueDraft", id)
    }

    suspend fun getByCatalogueIdOrNull(catalogueId: CatalogueId): CatalogueDraftModel? {
        return catalogueDraftRepository.findByCatalogueId(catalogueId)?.toModel()
    }

    suspend fun existsByCatalogueId(catalogueId: CatalogueId): Boolean {
        return catalogueDraftRepository.findByCatalogueId(catalogueId) != null
    }

    suspend fun page(
        id: Match<CatalogueDraftId>? = null,
        parentId: Match<CatalogueDraftId?>? = null,
        catalogueId: Match<CatalogueId>? = null,
        originalCatalogueId: Match<CatalogueId>? = null,
        language: Match<String>? = null,
        baseVersion: Match<Int>? = null,
        creatorId: Match<UserId>? = null,
        status: Match<CatalogueDraftState>? = null,
        deleted: Match<Boolean>? = ExactMatch(false),
        offset: OffsetPagination? = null,
    ) = catalogueDraftPageQueryDB.execute(
        id = id,
        parentId = parentId,
        catalogueId = catalogueId,
        originalCatalogueId = originalCatalogueId,
        language = language,
        baseVersion = baseVersion,
        creatorId = creatorId,
        status = status,
        deleted = deleted,
        offset = offset,
    ).map(CatalogueDraftEntity::toModel)
}
