package city.smartb.registry.program.s2.asset.domain

import city.smartb.registry.program.s2.asset.domain.model.Asset
import city.smartb.registry.program.s2.asset.domain.model.AssetId
import f2.dsl.cqrs.filter.Match
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO

interface AssetFinder {
    suspend fun getOrNull(id: AssetId): Asset?
    suspend fun get(id: AssetId): Asset
    suspend fun page(
        id: Match<AssetId>? = null,
        offset: OffsetPagination? = null
    ): PageDTO<Asset>
}
