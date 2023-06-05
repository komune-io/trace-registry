package city.smartb.registry.program.f2.asset.api.service

import city.smartb.registry.program.api.commons.model.SimpleCache
import city.smartb.registry.program.f2.asset.api.model.toDTO
import city.smartb.registry.program.f2.asset.domain.model.TransactionDTOBase
import city.smartb.registry.program.f2.pool.api.service.AssetPoolF2FinderService
import city.smartb.registry.program.s2.asset.api.AssetPoolFinderService
import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolId
import city.smartb.registry.program.s2.asset.domain.automate.TransactionId
import city.smartb.registry.program.s2.asset.domain.model.Transaction
import city.smartb.registry.program.s2.asset.domain.model.TransactionType
import city.smartb.registry.program.s2.project.api.ProjectFinderService
import city.smartb.registry.program.s2.project.domain.model.Project
import city.smartb.registry.program.s2.project.domain.model.ProjectId
import f2.dsl.cqrs.filter.CollectionMatch
import f2.dsl.cqrs.filter.Match
import f2.dsl.cqrs.filter.andMatchOfNotNull
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO
import f2.dsl.cqrs.page.map
import org.springframework.stereotype.Service

@Service
class AssetF2FinderService(
    private val assetPoolFinderService: AssetPoolFinderService,
    private val assetPoolF2FinderService: AssetPoolF2FinderService,
    private val projectFinderService: ProjectFinderService
) {

    suspend fun assetTransactionGet(id: TransactionId): TransactionDTOBase {
        return assetPoolFinderService.getTransaction(id).toDTO()
    }

    suspend fun page(
        projectId: Match<ProjectId>? = null,
        poolId: Match<AssetPoolId>? = null,
        transactionId: Match<TransactionId>? = null,
        transactionFrom: Match<String?>? = null,
        transactionTo: Match<String?>? = null,
        type: Match<TransactionType>? = null,
        offset: OffsetPagination? = null
    ): PageDTO<TransactionDTOBase> {
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

    private suspend fun Transaction.toDTO(cache: Cache = Cache()) = toDTO(
        getAssetPool = cache.pools::get
    )

    private inner class Cache {
        val pools = SimpleCache(assetPoolF2FinderService::get)
    }
}
