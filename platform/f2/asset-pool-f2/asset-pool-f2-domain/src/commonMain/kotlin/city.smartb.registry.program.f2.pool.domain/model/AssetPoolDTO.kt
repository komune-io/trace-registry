package city.smartb.registry.program.f2.pool.domain.model

import cccev.f2.concept.domain.model.InformationConceptDTO
import cccev.f2.concept.domain.model.InformationConceptDTOBase
import city.smartb.registry.program.api.commons.model.BigDecimalAsNumber
import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * @d2 model
 * @order 10
 */
@JsExport
interface AssetPoolDTO {
    val id: AssetPoolId
    val status: String
    val vintage: String
    val indicator: InformationConceptDTO
    val granularity: Double
    val wallets: Map<String, BigDecimalAsNumber>
}

/**
 * @d2 inherit
 */
@Serializable
data class AssetPoolDTOBase(
    override val id: AssetPoolId,
    override val status: String,
    override val vintage: String,
    override val indicator: InformationConceptDTOBase,
    override val granularity: Double,
    override val wallets: Map<String, BigDecimalAsNumber>
): AssetPoolDTO
