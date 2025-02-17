package io.komune.registry.s2.catalogue.draft.api.query

import com.redis.om.spring.search.stream.EntityStream
import f2.dsl.cqrs.filter.Match
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO
import io.komune.registry.infra.redis.PageQueryDB
import io.komune.registry.infra.redis.match
import io.komune.registry.s2.catalogue.domain.automate.CatalogueId
import io.komune.registry.s2.catalogue.draft.api.entity.CatalogueDraftEntity
import io.komune.registry.s2.catalogue.draft.api.entity.`CatalogueDraftEntity$`
import io.komune.registry.s2.catalogue.draft.domain.CatalogueDraftId
import io.komune.registry.s2.catalogue.draft.domain.CatalogueDraftState
import io.komune.registry.s2.commons.model.UserId
import org.springframework.stereotype.Repository

@Repository
class CatalogueDraftPageQueryDB(
    override val entityStream: EntityStream,
): PageQueryDB() {

    fun execute(
        id: Match<CatalogueDraftId>? = null,
        originalCatalogueId: Match<CatalogueId>? = null,
        language: Match<String>? = null,
        baseVersion: Match<Int>? = null,
        creatorId: Match<UserId>? = null,
        status: Match<CatalogueDraftState>? = null,
        deleted: Match<Boolean>? = null,
        offset: OffsetPagination? = null,
    ): PageDTO<CatalogueDraftEntity> = doQuery(offset) {
        match(`CatalogueDraftEntity$`.ID, id)
        match(`CatalogueDraftEntity$`.ORIGINAL_CATALOGUE_ID, originalCatalogueId)
        match(`CatalogueDraftEntity$`.LANGUAGE, language)
        match(`CatalogueDraftEntity$`.BASE_VERSION, baseVersion)
        match(`CatalogueDraftEntity$`.CREATOR_ID, creatorId)
        match(`CatalogueDraftEntity$`.STATUS, status)
        match(`CatalogueDraftEntity$`.DELETED, deleted)
    }
}
