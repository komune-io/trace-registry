package city.smartb.registry.program.s2.asset.domain.model

import cccev.s2.concept.domain.InformationConceptIdentifier
import city.smartb.registry.program.api.commons.model.BigDecimalAsString
import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolId
import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolState
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

data class AssetPool(
    val id: AssetPoolId,
    val status: AssetPoolState,
    val vintage: String,
    val indicator: InformationConceptIdentifier,
    val granularity: Double,
    val wallets: Map<String, BigDecimalAsString>,
    val stats: AssetPoolStatsBase,
    val metadata: Map<String, String?>
)

@JsExport
interface AssetPoolStats {
    val available: BigDecimalAsString
    val retired: BigDecimalAsString
    val transferred: BigDecimalAsString
}

@Serializable
data class AssetPoolStatsBase(
    override val available: BigDecimalAsString,
    override val retired: BigDecimalAsString,
    override val transferred: BigDecimalAsString
): AssetPoolStats
