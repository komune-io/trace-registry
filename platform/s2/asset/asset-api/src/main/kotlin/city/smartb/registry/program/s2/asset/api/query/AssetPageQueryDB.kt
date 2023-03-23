package city.smartb.registry.program.s2.asset.api.query

import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO
import f2.dsl.cqrs.filter.Match
import  city.smartb.registry.program.s2.asset.domain.model.AssetId
import city.smartb.registry.program.s2.asset.api.entity.AssetEntity
import city.smartb.registry.program.s2.asset.api.entity.AssetRepository
import f2.dsl.cqrs.page.Page
import f2.dsl.cqrs.page.toPageRequest
import org.springframework.stereotype.Repository

@Repository
class AssetPageQueryDB(
    val repository: AssetRepository
) {
    fun execute(
        id: Match<AssetId>? = null,
        offset: OffsetPagination? = null
    ): PageDTO<AssetEntity> {
        val page = offset.toPageRequest()
        val items = repository.findAll(page)
        return Page(
            total = items.totalElements.toInt(),
            items =  items.toList()
        )
    }
}
