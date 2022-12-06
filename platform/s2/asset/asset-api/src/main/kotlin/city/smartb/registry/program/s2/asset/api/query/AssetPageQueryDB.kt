package city.smartb.registry.program.s2.asset.api.query

import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO
import city.smartb.registry.program.api.commons.model.Match
import  city.smartb.registry.program.s2.asset.domain.model.AssetId
import city.smartb.registry.program.s2.asset.api.entity.asset.AssetEntity
import org.springframework.stereotype.Repository

@Repository
class AssetPageQueryDB {
    fun execute(
        id: Match<AssetId>? = null,
        offset: OffsetPagination? = null
    ): PageDTO<AssetEntity> = TODO()
}
