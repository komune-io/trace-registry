package city.smartb.registry.program.s2.asset.domain.model

import cccev.s2.concept.domain.InformationConceptIdentifier
import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolId
import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolState

data class AssetPool(
    val id: AssetPoolId,
    val status: AssetPoolState,
    val vintage: String,
    val indicator: InformationConceptIdentifier,
    val granularity: Double,
    val wallets: Map<String, Double>
)
