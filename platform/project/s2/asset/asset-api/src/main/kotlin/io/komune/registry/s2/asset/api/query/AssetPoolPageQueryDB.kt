package io.komune.registry.s2.asset.api.query

import com.redis.om.spring.metamodel.indexed.TextField
import com.redis.om.spring.search.stream.EntityStream
import f2.dsl.cqrs.filter.Match
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO
import io.komune.registry.infra.redis.PageQueryDB
import io.komune.registry.infra.redis.match
import io.komune.registry.s2.asset.api.entity.pool.AssetPoolEntity
import io.komune.registry.s2.asset.api.entity.pool.`AssetPoolEntity$`
import io.komune.registry.s2.asset.domain.automate.AssetPoolState
import org.springframework.stereotype.Repository

@Repository
class AssetPoolPageQueryDB(
    override val entityStream: EntityStream,
): PageQueryDB() {
    fun execute(
        status: Match<AssetPoolState>? = null,
        vintage: Match<String>? = null,
        offset: OffsetPagination? = null,
    ): PageDTO<AssetPoolEntity> = doQuery(offset) {
        match(`AssetPoolEntity$`.VINTAGE, vintage)
        match(`AssetPoolEntity$`.STATUS as TextField<AssetPoolEntity, AssetPoolState>, status)
    }
}
