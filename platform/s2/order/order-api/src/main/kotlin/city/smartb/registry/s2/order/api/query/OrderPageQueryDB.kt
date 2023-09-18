package city.smartb.registry.s2.order.api.query

import city.smartb.registry.infra.redis.PageQueryDB
import city.smartb.registry.infra.redis.match
import city.smartb.registry.s2.order.api.entity.`OrderEntity$`
import city.smartb.registry.s2.asset.domain.automate.AssetPoolId
import city.smartb.registry.s2.asset.domain.model.AssetTransactionType
import city.smartb.registry.s2.order.api.entity.OrderEntity
import city.smartb.registry.s2.order.domain.OrderState
import com.redis.om.spring.metamodel.indexed.TextField
import com.redis.om.spring.search.stream.EntityStream
import f2.dsl.cqrs.filter.Match
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO
import org.springframework.stereotype.Repository

@Repository
class OrderPageQueryDB(
    override val entityStream: EntityStream,
): PageQueryDB() {
    fun execute(
        offset: OffsetPagination? = null,
        status: Match<OrderState>? = null,
        from: Match<String>? = null,
        to: Match<String>? = null,
        by: Match<String>? = null,
        type: Match<AssetTransactionType>? = null,
        poolId: Match<AssetPoolId>? = null
    ): PageDTO<OrderEntity> = doQuery(offset) {
        match(`OrderEntity$`.STATUS as TextField<OrderEntity, OrderState>, status)
        match(`OrderEntity$`.FROM, from)
        match(`OrderEntity$`.TO, to)
        match(`OrderEntity$`.BY, by)
        match(`OrderEntity$`.TYPE, type)
        match(`OrderEntity$`.POOL_ID, poolId)
    }
}
