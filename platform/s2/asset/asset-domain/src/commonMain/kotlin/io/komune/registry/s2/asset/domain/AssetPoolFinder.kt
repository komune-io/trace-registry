package io.komune.registry.s2.asset.domain

import f2.dsl.cqrs.filter.Match
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO
import io.komune.registry.s2.asset.domain.automate.AssetPoolId
import io.komune.registry.s2.asset.domain.automate.AssetPoolState
import io.komune.registry.s2.asset.domain.automate.AssetTransactionId
import io.komune.registry.s2.asset.domain.model.AssetPool
import io.komune.registry.s2.asset.domain.model.AssetTransaction
import io.komune.registry.s2.asset.domain.model.AssetTransactionType

interface AssetPoolFinder {
    suspend fun getOrNull(id: AssetPoolId): AssetPool?
    suspend fun get(id: AssetPoolId): AssetPool
    suspend fun page(
        status: Match<AssetPoolState>? = null,
        vintage: Match<String>? = null,
        offset: OffsetPagination? = null
    ): PageDTO<AssetPool>
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
