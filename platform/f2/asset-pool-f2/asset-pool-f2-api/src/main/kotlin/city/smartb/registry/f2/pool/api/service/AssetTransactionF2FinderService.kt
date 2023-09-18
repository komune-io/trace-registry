package city.smartb.registry.f2.pool.api.service

import city.smartb.registry.api.commons.model.SimpleCache
import city.smartb.registry.f2.pool.api.model.toDTO
import city.smartb.registry.s2.asset.api.AssetPoolFinderService
import city.smartb.registry.s2.asset.domain.automate.AssetPoolId
import city.smartb.registry.s2.asset.domain.automate.AssetTransactionId
import city.smartb.registry.s2.asset.domain.model.AssetTransaction
import city.smartb.registry.s2.asset.domain.model.AssetTransactionType
import city.smartb.registry.s2.commons.model.BigDecimalAsString
import city.smartb.registry.s2.project.api.ProjectFinderService
import city.smartb.registry.s2.project.domain.model.Project
import city.smartb.registry.s2.project.domain.model.ProjectId
import f2.dsl.cqrs.filter.CollectionMatch
import f2.dsl.cqrs.filter.Match
import f2.dsl.cqrs.filter.andMatchOfNotNull
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO
import f2.dsl.cqrs.page.map
import org.springframework.stereotype.Service

@Service
class AssetTransactionF2FinderService(
    private val projectFinderService: ProjectFinderService,
    private val assetPoolFinderService: AssetPoolFinderService,
    private val assetPoolF2FinderService: AssetPoolF2FinderService,
) {

    suspend fun getTransaction(id: AssetTransactionId): city.smartb.registry.f2.pool.domain.model.AssetTransactionDTOBase {
        return assetPoolFinderService.getTransaction(id).toDTO()
    }

    suspend fun page(
        projectId: Match<ProjectId>? = null,
        poolId: Match<AssetPoolId>? = null,
        transactionId: Match<AssetTransactionId>? = null,
        transactionFrom: Match<String?>? = null,
        transactionTo: Match<String?>? = null,
        type: Match<AssetTransactionType>? = null,
        offset: OffsetPagination? = null
    ): PageDTO<city.smartb.registry.f2.pool.domain.model.AssetTransactionDTOBase> {
        val cache = Cache()

        val projects = projectId?.let {
            projectFinderService.page(id = projectId).items
        }

        return assetPoolFinderService.pageTransactions(
            id = transactionId,
            poolId = andMatchOfNotNull(
                projects?.flatMap(Project::assetPools)?.let(::CollectionMatch),
                poolId
            ),
            type = type,
            from = transactionFrom,
            to = transactionTo,
            offset = offset
        ).map { it.toDTO(cache) }
    }

    private suspend fun AssetTransaction.toDTO(cache: Cache = Cache()) = toDTO(
        getAssetPool = cache.pools::get
    )

    suspend fun getAssetStats(projectId: ProjectId): city.smartb.registry.f2.pool.domain.query.AssetStatsGetResultDTOBase {
        val project = projectFinderService.get(projectId)
        return project.assetPools.map { poolId ->
            assetPoolF2FinderService.get(poolId)
        }.foldRight(
            city.smartb.registry.f2.pool.domain.query.AssetStatsGetResultDTOBase(
                available = BigDecimalAsString.ZERO,
                retired = BigDecimalAsString.ZERO,
                transferred = BigDecimalAsString.ZERO
            )
        ) { assetPool, acc ->
            city.smartb.registry.f2.pool.domain.query.AssetStatsGetResultDTOBase(
                available = assetPool.stats.available + acc.available,
                retired = assetPool.stats.retired + acc.retired,
                transferred = assetPool.stats.transferred + acc.transferred
            )
        }
    }

    private inner class Cache {
        val pools = SimpleCache(assetPoolF2FinderService::get)
    }
}
