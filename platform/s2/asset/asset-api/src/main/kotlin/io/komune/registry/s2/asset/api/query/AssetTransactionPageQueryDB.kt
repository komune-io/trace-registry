package io.komune.registry.s2.asset.api.query

import com.redis.om.spring.metamodel.indexed.TextTagField
import com.redis.om.spring.search.stream.EntityStream
import f2.dsl.cqrs.filter.Match
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO
import io.komune.registry.infra.redis.PageQueryDB
import io.komune.registry.infra.redis.match
import io.komune.registry.s2.asset.api.entity.transaction.AssetTransactionEntity
import io.komune.registry.s2.asset.api.entity.transaction.`AssetTransactionEntity$`
import io.komune.registry.s2.asset.domain.automate.AssetPoolId
import io.komune.registry.s2.asset.domain.automate.AssetTransactionId
import io.komune.registry.s2.asset.domain.model.AssetTransactionType
import org.springframework.stereotype.Repository
import redis.clients.jedis.search.aggr.SortedField

@Repository
class AssetTransactionPageQueryDB(
    override val entityStream: EntityStream
): PageQueryDB() {
    fun execute(
        id: Match<AssetTransactionId>? = null,
        poolId: Match<AssetPoolId>? = null,
        type: Match<AssetTransactionType>? = null,
        from: Match<String?>? = null,
        to: Match<String?>? = null,
        offset: OffsetPagination? = null
    ): PageDTO<AssetTransactionEntity> = doQuery(offset) {
        match(`AssetTransactionEntity$`.ID, id)
        match(`AssetTransactionEntity$`.POOL_ID, poolId)
        match(`AssetTransactionEntity$`.TYPE as TextTagField<AssetTransactionEntity, AssetTransactionType>, type)
        match(`AssetTransactionEntity$`.FROM, from)
        match(`AssetTransactionEntity$`.TO, to)

        sorted({ t1, t2 -> t1.date.compareTo(t2.date) }, SortedField.SortOrder.DESC)
    }
}
