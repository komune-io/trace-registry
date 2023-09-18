package city.smartb.registry.s2.asset.api

import city.smartb.registry.api.commons.exception.NotFoundException
import city.smartb.registry.s2.asset.api.entity.pool.AssetPoolEntity
import city.smartb.registry.s2.asset.api.entity.pool.AssetPoolRepository
import city.smartb.registry.s2.asset.api.entity.pool.toAssetPool
import city.smartb.registry.s2.asset.api.entity.transaction.AssetTransactionEntity
import city.smartb.registry.s2.asset.api.entity.transaction.AssetTransactionRepository
import city.smartb.registry.s2.asset.api.entity.transaction.toTransaction
import city.smartb.registry.s2.asset.api.query.AssetPoolPageQueryDB
import city.smartb.registry.s2.asset.api.query.AssetTransactionPageQueryDB
import city.smartb.registry.s2.asset.domain.AssetPoolFinder
import city.smartb.registry.s2.asset.domain.automate.AssetPoolId
import city.smartb.registry.s2.asset.domain.automate.AssetPoolState
import city.smartb.registry.s2.asset.domain.automate.AssetTransactionId
import city.smartb.registry.s2.asset.domain.model.AssetPool
import city.smartb.registry.s2.asset.domain.model.AssetTransaction
import city.smartb.registry.s2.asset.domain.model.AssetTransactionType
import f2.dsl.cqrs.filter.Match
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO
import f2.dsl.cqrs.page.map
import org.springframework.stereotype.Service

@Service
class AssetPoolFinderService(
    private val assetPoolRepository: AssetPoolRepository,
    private val assetPoolPageQueryDB: AssetPoolPageQueryDB,
    private val transactionPageQueryDB: AssetTransactionPageQueryDB,
    private val assetTransactionRepository: AssetTransactionRepository
): AssetPoolFinder {
    override suspend fun getOrNull(id: AssetPoolId): AssetPool? {
        return assetPoolRepository.findById(id).orElse(null)?.toAssetPool()
    }

    override suspend fun get(id: AssetPoolId): AssetPool {
        return getOrNull(id) ?: throw NotFoundException("AssetPool", id)
    }

    override suspend fun page(
        status: Match<AssetPoolState>?,
        vintage: Match<String>?,
        offset: OffsetPagination?,
    ): PageDTO<AssetPool> {
        return assetPoolPageQueryDB.execute(
            status = status,
            vintage = vintage,
            offset = offset
        ).map(AssetPoolEntity::toAssetPool)
    }

    override suspend fun getTransactionOrNull(id: AssetTransactionId): AssetTransaction? {
        return assetTransactionRepository.findById(id).orElse(null)?.toTransaction()
    }

    override suspend fun getTransaction(id: AssetTransactionId): AssetTransaction {
        return getTransactionOrNull(id) ?: throw NotFoundException("Transaction", id)
    }

    override suspend fun pageTransactions(
        id: Match<AssetTransactionId>?,
        poolId: Match<AssetPoolId>?,
        type: Match<AssetTransactionType>?,
        from: Match<String?>?,
        to: Match<String?>?,
        offset: OffsetPagination?
    ): PageDTO<AssetTransaction> {
        return transactionPageQueryDB.execute(
            id = id,
            poolId = poolId,
            type = type,
            from = from,
            to = to,
            offset= offset
        ).map(AssetTransactionEntity::toTransaction)
    }
}
