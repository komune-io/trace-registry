package io.komune.registry.program.s2.catalogue.api.query

import com.redis.om.spring.search.stream.EntityStream
import f2.dsl.cqrs.filter.Match
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO
import io.komune.registry.infra.redis.PageQueryDB
import io.komune.registry.infra.redis.match
import io.komune.registry.program.s2.catalogue.api.entity.CatalogueEntity
import io.komune.registry.program.s2.catalogue.api.entity.`CatalogueEntity$`
import io.komune.registry.s2.catalogue.domain.automate.CatalogueState
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.CatalogueIdentifier
import org.springframework.stereotype.Repository

@Repository
class CataloguePageQueryDB(
    override val entityStream: EntityStream,
): PageQueryDB() {

    fun execute(
        id: Match<CatalogueId>? = null,
        identifier: Match<CatalogueIdentifier>? = null,
        title: Match<String>? = null,
        language: Match<String>? = null,
        type: Match<String>? = null,
        childrenIds: Match<CatalogueId>? = null,
        status: Match<CatalogueState>? = null,
        hidden: Match<Boolean>? = null,
        offset: OffsetPagination? = null,
    ): PageDTO<CatalogueEntity> = doQuery(offset) {
        match(`CatalogueEntity$`.ID, id)
        match(`CatalogueEntity$`.IDENTIFIER, identifier)
        match(`CatalogueEntity$`.TITLE, title)
        match(`CatalogueEntity$`.LANGUAGE, language)
        match(`CatalogueEntity$`.TYPE, type)
        match(`CatalogueEntity$`.CATALOGUE_IDS, childrenIds)
        match(`CatalogueEntity$`.HIDDEN, hidden)
        match(`CatalogueEntity$`.STATUS, status)
    }
}
