package city.smartb.registry.program.s2.catalogue.api.query

import city.smartb.registry.infra.redis.PageQueryDB
import city.smartb.registry.infra.redis.match
import city.smartb.registry.program.s2.catalogue.api.entity.CatalogueEntity
import city.smartb.registry.program.s2.catalogue.api.entity.`CatalogueEntity$`
import city.smartb.registry.s2.catalogue.domain.automate.CatalogueId
import city.smartb.registry.s2.catalogue.domain.automate.CatalogueIdentifier
import city.smartb.registry.s2.catalogue.domain.automate.CatalogueState
import com.redis.om.spring.metamodel.SearchFieldAccessor
import com.redis.om.spring.metamodel.indexed.TextField
import com.redis.om.spring.metamodel.indexed.TextTagField
import com.redis.om.spring.search.stream.EntityStream
import f2.dsl.cqrs.filter.Match
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO
import org.springframework.stereotype.Repository

@Repository
class CataloguePageQueryDB(
    override val entityStream: EntityStream,
): PageQueryDB() {

    fun execute(
        id: Match<CatalogueId>? = null,
        identifier: Match<CatalogueIdentifier>? = null,
        title: Match<String>? = null,
        parentIdentifier: Match<CatalogueIdentifier>? = null,
        status: Match<CatalogueState>? = null,
        offset: OffsetPagination? = null,
    ): PageDTO<CatalogueEntity> = doQuery(offset) {
        match(`CatalogueEntity$`.ID, id)
        match(`CatalogueEntity$`.IDENTIFIER, identifier)
        match(`CatalogueEntity$`.TITLE, title)
        match(`CatalogueEntity$`.STATUS as TextField<CatalogueEntity, CatalogueState>, status)
    }
}
