package city.smartb.registry.program.s2.asset.api.query

import city.smartb.registry.program.infra.redis.PageQueryDB
import city.smartb.registry.program.infra.redis.match
import city.smartb.registry.program.s2.asset.api.entity.transaction.AssetTransactionEntity
import city.smartb.registry.program.s2.asset.api.entity.transaction.`AssetTransactionEntity$`
import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolId
import city.smartb.registry.program.s2.asset.domain.automate.AssetTransactionId
import city.smartb.registry.program.s2.asset.domain.model.AssetTransactionType
import com.redis.om.spring.metamodel.indexed.TextTagField
import com.redis.om.spring.search.stream.EntityStream
import f2.dsl.cqrs.filter.Match
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO
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
