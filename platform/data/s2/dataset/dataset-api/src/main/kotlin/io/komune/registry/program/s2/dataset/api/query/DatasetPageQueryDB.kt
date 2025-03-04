package io.komune.registry.program.s2.dataset.api.query

import com.redis.om.spring.metamodel.indexed.TextField
import com.redis.om.spring.search.stream.EntityStream
import f2.dsl.cqrs.filter.Match
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO
import io.komune.registry.infra.redis.PageQueryDB
import io.komune.registry.infra.redis.match
import io.komune.registry.program.s2.dataset.api.entity.DatasetEntity
import io.komune.registry.program.s2.dataset.api.entity.`DatasetEntity$`
import io.komune.registry.s2.commons.model.DatasetId
import io.komune.registry.s2.commons.model.DatasetIdentifier
import io.komune.registry.s2.dataset.domain.automate.DatasetState
import org.springframework.stereotype.Repository

@Repository
class DatasetPageQueryDB(
    override val entityStream: EntityStream,
): PageQueryDB() {

    fun execute(
        id: Match<DatasetId>? = null,
        identifier: Match<DatasetIdentifier>? = null,
        title: Match<String>? = null,
        datasetIds: Match<DatasetId>? = null,
        status: Match<DatasetState>? = null,
        offset: OffsetPagination? = null,
    ): PageDTO<DatasetEntity> = doQuery(offset) {
        match(`DatasetEntity$`.ID, id)
        match(`DatasetEntity$`.IDENTIFIER, identifier)
        match(`DatasetEntity$`.TITLE, title)
        match(`DatasetEntity$`.DATASET_IDS, datasetIds)
        match(`DatasetEntity$`.STATUS as TextField<DatasetEntity, DatasetState>, status)
    }
}
