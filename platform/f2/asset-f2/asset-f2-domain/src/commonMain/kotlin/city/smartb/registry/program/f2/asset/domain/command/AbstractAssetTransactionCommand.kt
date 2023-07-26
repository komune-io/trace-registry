package city.smartb.registry.program.f2.asset.domain.command

import city.smartb.registry.program.api.commons.model.BigDecimalAsNumber
import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolId
import city.smartb.registry.program.s2.asset.domain.model.AssetTransactionType

interface AbstractAssetTransactionCommand {
    val poolId: AssetPoolId?
    val from: String?
    val to: String?
    val quantity: BigDecimalAsNumber
    val type: AssetTransactionType
    val draft: Boolean
}
