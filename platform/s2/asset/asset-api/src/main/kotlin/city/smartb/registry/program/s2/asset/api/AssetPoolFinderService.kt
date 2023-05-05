package city.smartb.registry.program.s2.asset.api

import city.smartb.registry.program.api.commons.exception.NotFoundException
import city.smartb.registry.program.s2.asset.api.entity.pool.AssetPoolRepository
import city.smartb.registry.program.s2.asset.api.entity.pool.toAssetPool
import city.smartb.registry.program.s2.asset.api.entity.transaction.TransactionEntity
import city.smartb.registry.program.s2.asset.api.entity.transaction.TransactionRepository
import city.smartb.registry.program.s2.asset.api.entity.transaction.toTransaction
import city.smartb.registry.program.s2.asset.api.query.TransactionPageQueryDB
import city.smartb.registry.program.s2.asset.domain.AssetPoolFinder
import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolId
import city.smartb.registry.program.s2.asset.domain.automate.TransactionId
import city.smartb.registry.program.s2.asset.domain.model.AssetPool
import city.smartb.registry.program.s2.asset.domain.model.Transaction
import city.smartb.registry.program.s2.asset.domain.model.TransactionType
import f2.dsl.cqrs.filter.Match
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO
import f2.dsl.cqrs.page.map
import org.springframework.stereotype.Service

@Service
class AssetPoolFinderService(
    private val assetPoolRepository: AssetPoolRepository,
    private val transactionPageQueryDB: TransactionPageQueryDB,
    private val transactionRepository: TransactionRepository
): AssetPoolFinder {
    override suspend fun getOrNull(id: AssetPoolId): AssetPool? {
        return assetPoolRepository.findById(id).orElse(null)?.toAssetPool()
    }

    override suspend fun get(id: AssetPoolId): AssetPool {
        return getOrNull(id) ?: throw NotFoundException("AssetPool", id)
    }

    override suspend fun getTransactionOrNull(id: TransactionId): Transaction? {
        return transactionRepository.findById(id).orElse(null)?.toTransaction()
    }

    override suspend fun getTransaction(id: TransactionId): Transaction {
        return getTransactionOrNull(id) ?: throw NotFoundException("Transaction", id)
    }

    override suspend fun pageTransactions(
        id: Match<TransactionId>?,
        poolId: Match<AssetPoolId>?,
        type: Match<TransactionType>?,
        offset: OffsetPagination?
    ): PageDTO<Transaction> {
        return transactionPageQueryDB.execute(
            id = id,
            poolId = poolId,
            type = type,
            offset= offset
        ).map(TransactionEntity::toTransaction)
    }
}
