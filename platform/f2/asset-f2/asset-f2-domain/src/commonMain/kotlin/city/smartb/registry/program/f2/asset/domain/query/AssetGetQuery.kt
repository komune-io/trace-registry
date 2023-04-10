package city.smartb.registry.program.f2.asset.domain.query

import city.smartb.registry.program.s2.asset.domain.model.Asset
import city.smartb.registry.program.s2.asset.domain.model.AssetDTO
import city.smartb.registry.program.s2.asset.domain.model.AssetId
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Get Asset By id
 * @d2 function
 * @parent [city.smartb.registry.program.s2.asset.domain.D2AssetSectionApi]
 * @child [AssetGetQuery]
 * @child [AssetGetResult]
 */
typealias AssetGetFunction = F2Function<AssetGetQuery, AssetGetResult>

/**
 * @d2 query
 * @parent [AssetGetFunction]
 */
@JsExport
@JsName("AssetGetQueryDTO")
interface AssetGetQueryDTO {
    val id: AssetId
}

/**
 * @d2 event
 * @parent [AssetGetFunction]
 */
@JsExport
@JsName("AssetGetResultDTO")
interface AssetGetResultDTO {
    val item: AssetDTO?
}

/**
 * @d2 inherit
 */
data class AssetGetQuery(
    override val id: AssetId
): AssetGetQueryDTO

/**
 * @d2 inherit
 */
data class AssetGetResult(
    override val item: Asset?
): AssetGetResultDTO
