package io.komune.registry.infra.redis

import com.redis.om.spring.search.stream.EntityStream
import com.redis.om.spring.search.stream.SearchStream
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.Page
import f2.dsl.cqrs.page.PageDTO
import java.util.stream.Collectors
import kotlin.math.min

abstract class PageQueryDB {

    protected abstract val entityStream: EntityStream

    protected inline fun <reified E> doQuery(
        offset: OffsetPagination? = null, buildQuery: SearchStream<E>.() -> Unit
    ): PageDTO<E> {
        val query = entityStream.of(E::class.java)

        if (offset != null) {
            query.limit(min(offset.limit.toLong(), 1000000L)) // Redis OM limit max is 1,000,000
            query.skip(offset.offset.toLong())
        }

        query.buildQuery()

        return Page(
            items = query.collect(Collectors.toList()),
            total = query.count().toInt()
        )
    }
}
