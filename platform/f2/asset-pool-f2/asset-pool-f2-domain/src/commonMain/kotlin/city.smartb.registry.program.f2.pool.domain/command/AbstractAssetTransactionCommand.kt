package city.smartb.registry.program.f2.pool.domain.command

import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolId
import city.smartb.registry.program.s2.asset.domain.model.AssetTransactionType
import city.smartb.registry.program.s2.commons.model.BigDecimalAsNumber

interface AbstractAssetTransactionCommand {
    val id: AssetPoolId
    val from: String?
    val to: String?
    val quantity: BigDecimalAsNumber
    val type: AssetTransactionType
    val draft: Boolean
}
