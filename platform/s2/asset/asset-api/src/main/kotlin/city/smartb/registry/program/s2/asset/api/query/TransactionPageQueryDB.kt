package city.smartb.registry.program.s2.asset.api.query

import city.smartb.registry.program.infra.redis.PageQueryDB
import city.smartb.registry.program.infra.redis.match
import city.smartb.registry.program.s2.asset.api.entity.transaction.TransactionEntity
import city.smartb.registry.program.s2.asset.api.entity.transaction.`TransactionEntity$`
import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolId
import city.smartb.registry.program.s2.asset.domain.automate.TransactionId
import city.smartb.registry.program.s2.asset.domain.model.TransactionType
import com.redis.om.spring.metamodel.indexed.TextTagField
import com.redis.om.spring.search.stream.EntityStream
import f2.dsl.cqrs.filter.Match
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO
import org.springframework.stereotype.Repository
import redis.clients.jedis.search.aggr.SortedField

@Repository
class TransactionPageQueryDB(
    override val entityStream: EntityStream
): PageQueryDB() {
    fun execute(
        id: Match<TransactionId>? = null,
        poolId: Match<AssetPoolId>? = null,
        type: Match<TransactionType>? = null,
        from: Match<String?>? = null,
        to: Match<String?>? = null,
        offset: OffsetPagination? = null
    ): PageDTO<TransactionEntity> = doQuery(offset) {
        match(`TransactionEntity$`.ID, id)
        match(`TransactionEntity$`.POOL_ID, poolId)
        match(`TransactionEntity$`.TYPE as TextTagField<TransactionEntity, TransactionType>, type)
        match(`TransactionEntity$`.FROM, from)
        match(`TransactionEntity$`.TO, to)

        sorted({ t1, t2 -> t1.date.compareTo(t2.date) }, SortedField.SortOrder.DESC)
    }
}