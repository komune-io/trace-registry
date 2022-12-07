package city.smartb.registry.program.f2.asset.api.service

import f2.dsl.cqrs.page.OffsetPagination
import city.smartb.registry.program.f2.asset.domain.query.AssetPageResult
import city.smartb.registry.program.s2.asset.api.AssetFinderService
import city.smartb.registry.program.s2.asset.domain.model.Asset
import city.smartb.registry.program.s2.asset.domain.model.AssetId
import org.springframework.stereotype.Service

@Service
class AssetF2FinderService(
    private val assetFinderService: AssetFinderService,
) {
    suspend fun getOrNull(id: AssetId): Asset? {
        return assetFinderService.getOrNull(id)
    }

    suspend fun get(id: AssetId): Asset {
        return assetFinderService.get(id)
    }

    suspend fun page(
        offset: OffsetPagination? = null
    ): AssetPageResult {
        return assetFinderService.page(
            offset = offset
        ).let { page ->
            AssetPageResult(
                items = page.items,
                total = page.total
            )
        }
    }

}
