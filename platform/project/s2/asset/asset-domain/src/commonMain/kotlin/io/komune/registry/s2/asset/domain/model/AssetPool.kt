package io.komune.registry.s2.asset.domain.model

import cccev.dsl.model.InformationConcept
import io.komune.registry.s2.asset.domain.automate.AssetPoolId
import io.komune.registry.s2.asset.domain.automate.AssetPoolState
import io.komune.registry.s2.commons.model.BigDecimalAsString
import kotlin.js.JsExport
import kotlinx.serialization.Serializable

data class AssetPool(
    val id: AssetPoolId,
    val status: AssetPoolState,
    val vintage: String?,
    val indicator: InformationConcept,
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
