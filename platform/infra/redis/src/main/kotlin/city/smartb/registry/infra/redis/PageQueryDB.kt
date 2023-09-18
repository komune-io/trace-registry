package city.smartb.registry.infra.redis

import com.redis.om.spring.search.stream.EntityStream
import com.redis.om.spring.search.stream.SearchStream
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.Page
import f2.dsl.cqrs.page.PageDTO
import java.util.stream.Collectors

abstract class PageQueryDB {

    protected abstract val entityStream: EntityStream

    protected inline fun <reified E> doQuery(
        offset: OffsetPagination? = null, buildQuery: SearchStream<E>.() -> Unit
    ): PageDTO<E> {
        val query = entityStream.of(E::class.java)

        if (offset != null) {
            query.limit(offset.limit.toLong())
            query.skip(offset.offset.toLong())
        }

        query.buildQuery()

        return Page(
            items = query.collect(Collectors.toList()),
            total = query.count().toInt()
        )
    }
}
