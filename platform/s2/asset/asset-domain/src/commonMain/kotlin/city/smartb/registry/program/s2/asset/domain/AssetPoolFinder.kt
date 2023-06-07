package city.smartb.registry.program.s2.asset.domain

import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolId
import city.smartb.registry.program.s2.asset.domain.automate.TransactionId
import city.smartb.registry.program.s2.asset.domain.model.AssetPool
import city.smartb.registry.program.s2.asset.domain.model.Transaction
import city.smartb.registry.program.s2.asset.domain.model.TransactionType
import f2.dsl.cqrs.filter.Match
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO

interface AssetPoolFinder {
    suspend fun getOrNull(id: AssetPoolId): AssetPool?
    suspend fun get(id: AssetPoolId): AssetPool

    suspend fun getTransactionOrNull(id: TransactionId): Transaction?
    suspend fun getTransaction(id: TransactionId): Transaction
    suspend fun pageTransactions(
        id: Match<TransactionId>? = null,
        poolId: Match<AssetPoolId>? = null,
        type: Match<TransactionType>? = null,
        from: Match<String?>? = null,
        to: Match<String?>? = null,
        offset: OffsetPagination? = null
    ): PageDTO<Transaction>
}
