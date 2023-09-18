package city.smartb.registry.f2.pool.domain.model

import cccev.f2.concept.domain.model.InformationConceptDTO
import cccev.f2.concept.domain.model.InformationConceptDTOBase
import city.smartb.registry.s2.asset.domain.automate.AssetPoolId
import city.smartb.registry.s2.asset.domain.automate.AssetPoolState
import city.smartb.registry.s2.asset.domain.model.AssetPoolStats
import city.smartb.registry.s2.asset.domain.model.AssetPoolStatsBase
import city.smartb.registry.s2.commons.model.BigDecimalAsNumber
import kotlin.js.JsExport
import kotlinx.serialization.Serializable
import s2.dsl.automate.model.WithS2State

/**
 * @d2 model
 * @order 10
 */
@JsExport
interface AssetPoolDTO: WithS2State<AssetPoolState> {
    val id: AssetPoolId
    val status: String
    val vintage: String?
    val indicator: InformationConceptDTO
    val granularity: Double
    val wallets: Map<String, BigDecimalAsNumber>
    val stats: AssetPoolStats
    val metadata: Map<String, String?>
}

/**
 * @d2 inherit
 */
@Serializable
data class AssetPoolDTOBase(
    override val id: AssetPoolId,
    override val status: String,
    override val vintage: String?,
    override val indicator: InformationConceptDTOBase,
    override val granularity: Double,
    override val wallets: Map<String, BigDecimalAsNumber>,
    override val stats: AssetPoolStatsBase,
    override val metadata: Map<String, String?>
): city.smartb.registry.f2.pool.domain.model.AssetPoolDTO {
    override fun s2State() = AssetPoolState.valueOf(status)
}
