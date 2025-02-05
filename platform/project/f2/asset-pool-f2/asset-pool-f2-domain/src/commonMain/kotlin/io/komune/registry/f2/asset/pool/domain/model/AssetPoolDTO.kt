package io.komune.registry.f2.asset.pool.domain.model

import cccev.dsl.model.InformationConcept
import io.komune.registry.s2.asset.domain.automate.AssetPoolId
import io.komune.registry.s2.asset.domain.automate.AssetPoolState
import io.komune.registry.s2.asset.domain.model.AssetPoolStats
import io.komune.registry.s2.asset.domain.model.AssetPoolStatsBase
import io.komune.registry.s2.commons.model.BigDecimalAsNumber
import kotlin.js.JsExport
import kotlinx.serialization.Serializable
import s2.dsl.automate.model.WithS2State

/**
 * @d2 model
 * @parent [io.komune.registry.f2.asset.pool.domain.D2AssetPoolF2Page]
 * @order 10
 */
@JsExport
interface AssetPoolDTO: WithS2State<AssetPoolState> {
    val id: AssetPoolId
    val status: String
    val vintage: String?
    val indicator: InformationConcept
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
    override val indicator: InformationConcept,
    override val granularity: Double,
    override val wallets: Map<String, BigDecimalAsNumber>,
    override val stats: AssetPoolStatsBase,
    override val metadata: Map<String, String?>
): AssetPoolDTO {
    override fun s2State() = AssetPoolState.valueOf(status)
}
