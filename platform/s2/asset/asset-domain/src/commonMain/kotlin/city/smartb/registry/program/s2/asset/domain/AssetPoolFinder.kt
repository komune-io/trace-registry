package city.smartb.registry.program.s2.asset.domain

import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolId
import city.smartb.registry.program.s2.asset.domain.automate.AssetTransactionId
import city.smartb.registry.program.s2.asset.domain.model.AssetPool
import city.smartb.registry.program.s2.asset.domain.model.AssetTransaction
import city.smartb.registry.program.s2.asset.domain.model.AssetTransactionType
import f2.dsl.cqrs.filter.Match
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO

interface AssetPoolFinder {
    suspend fun getOrNull(id: AssetPoolId): AssetPool?
    suspend fun get(id: AssetPoolId): AssetPool

    suspend fun getTransactionOrNull(id: AssetTransactionId): AssetTransaction?
    suspend fun getTransaction(id: AssetTransactionId): AssetTransaction
    suspend fun pageTransactions(
        id: Match<AssetTransactionId>? = null,
        poolId: Match<AssetPoolId>? = null,
        type: Match<AssetTransactionType>? = null,
        from: Match<String?>? = null,
        to: Match<String?>? = null,
        offset: OffsetPagination? = null
    ): PageDTO<AssetTransaction>
}
