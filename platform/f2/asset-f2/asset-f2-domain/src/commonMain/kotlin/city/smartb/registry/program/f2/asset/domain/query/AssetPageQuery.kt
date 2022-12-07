package city.smartb.registry.program.f2.asset.domain.query

import city.smartb.registry.program.s2.asset.domain.model.AssetDTO
import f2.dsl.cqrs.page.PageDTO
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Get page of asset
 *
 * @d2 function
 * @parent [city.smartb.registry.program.s2.asset.domain.D2AssetSectionApi]
 * @child [AssetPageQueryDTO]
 * @child [AssetPageResultDTO]
 */
typealias AssetPageFunction = F2Function<AssetPageQuery, AssetPageResult>

/**
 * @d2 query
 */
@JsExport
@JsName("AssetPageQueryDTO")
interface AssetPageQueryDTO {
    val name: String?
    val size: Int
    val page: Int
}

/**
 * @d2 inherit
 */
data class AssetPageQuery(
    override val name: String?,
    override val size: Int,
    override val page: Int,
): AssetPageQueryDTO

/**
 * Result of the query to get a page of assets.
 * @d2 event
 */
@JsExport
@JsName("AssetPageResultDTO")
interface AssetPageResultDTO: PageDTO<AssetDTO>

/**
 * @d2 inherit
 */
data class AssetPageResult(
    override val items: List<AssetDTO>,
    override val total: Int
): AssetPageResultDTO
