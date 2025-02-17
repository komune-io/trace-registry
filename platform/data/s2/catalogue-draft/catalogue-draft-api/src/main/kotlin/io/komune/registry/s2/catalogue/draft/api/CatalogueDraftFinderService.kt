package io.komune.registry.s2.catalogue.draft.api

import f2.dsl.cqrs.filter.ExactMatch
import f2.dsl.cqrs.filter.Match
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.map
import f2.spring.exception.NotFoundException
import io.komune.registry.s2.catalogue.domain.automate.CatalogueId
import io.komune.registry.s2.catalogue.draft.api.entity.CatalogueDraftEntity
import io.komune.registry.s2.catalogue.draft.api.entity.CatalogueDraftRepository
import io.komune.registry.s2.catalogue.draft.api.entity.toModel
import io.komune.registry.s2.catalogue.draft.api.exception.CatalogueDraftInvalidException
import io.komune.registry.s2.catalogue.draft.api.query.CatalogueDraftPageQueryDB
import io.komune.registry.s2.catalogue.draft.domain.CatalogueDraftId
import io.komune.registry.s2.catalogue.draft.domain.CatalogueDraftState
import io.komune.registry.s2.catalogue.draft.domain.model.CatalogueDraftModel
import io.komune.registry.s2.commons.model.Language
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

    suspend fun getAndCheck(id: CatalogueDraftId, language: Language, catalogueId: CatalogueId?): CatalogueDraftModel {
        val draft = get(id)

        if (draft.language != language || catalogueId !in listOf(null, draft.originalCatalogueId, draft.catalogueId)) {
            throw CatalogueDraftInvalidException(
                draftId = draft.id,
                catalogueId = catalogueId,
                language = language
            )
        }

        return draft
    }

    suspend fun page(
        id: Match<CatalogueDraftId>? = null,
        originalCatalogueId: Match<CatalogueId>? = null,
        language: Match<String>? = null,
        baseVersion: Match<Int>? = null,
        creatorId: Match<UserId>? = null,
        status: Match<CatalogueDraftState>? = null,
        offset: OffsetPagination? = null,
    ) = catalogueDraftPageQueryDB.execute(
        id = id,
        originalCatalogueId = originalCatalogueId,
        language = language,
        baseVersion = baseVersion,
        creatorId = creatorId,
        status = status,
        deleted = ExactMatch(false),
        offset = offset,
    ).map(CatalogueDraftEntity::toModel)
}
