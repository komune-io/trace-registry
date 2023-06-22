package city.smartb.registry.program.f2.asset.domain.command

import city.smartb.registry.program.api.commons.model.BigDecimalAsNumber
import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolId
import city.smartb.registry.program.s2.asset.domain.model.TransactionType

interface AbstractAssetTransactionCommand {
    val poolId: AssetPoolId?
    val from: String?
    val to: String?
    val quantity: BigDecimalAsNumber
    val type: TransactionType
    val draft: Boolean
}
