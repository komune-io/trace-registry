package city.smartb.registry.program.s2.dataset.api.query

import city.smartb.registry.infra.redis.PageQueryDB
import city.smartb.registry.infra.redis.match
import city.smartb.registry.program.s2.dataset.api.entity.DatasetEntity
import city.smartb.registry.program.s2.dataset.api.entity.`DatasetEntity$`
import city.smartb.registry.s2.dataset.domain.automate.DatasetId
import city.smartb.registry.s2.dataset.domain.automate.DatasetIdentifier
import city.smartb.registry.s2.dataset.domain.automate.DatasetState
import com.redis.om.spring.metamodel.SearchFieldAccessor
import com.redis.om.spring.metamodel.indexed.TextField
import com.redis.om.spring.metamodel.indexed.TextTagField
import com.redis.om.spring.search.stream.EntityStream
import f2.dsl.cqrs.filter.Match
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO
import org.springframework.stereotype.Repository

@Repository
class DatasetPageQueryDB(
    override val entityStream: EntityStream,
): PageQueryDB() {

    fun execute(
        id: Match<DatasetId>? = null,
        identifier: Match<DatasetIdentifier>? = null,
        title: Match<String>? = null,
        parentIdentifier: Match<DatasetIdentifier>? = null,
        status: Match<DatasetState>? = null,
        offset: OffsetPagination? = null,
    ): PageDTO<DatasetEntity> = doQuery(offset) {
        match(`DatasetEntity$`.ID, id)
        match(`DatasetEntity$`.IDENTIFIER, identifier)
        match(`DatasetEntity$`.TITLE, title)
        match(`DatasetEntity$`.STATUS as TextField<DatasetEntity, DatasetState>, status)
    }
}
