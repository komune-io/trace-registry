package city.smartb.registry.program.f2.asset.domain.command

import city.smartb.registry.program.api.commons.model.BigDecimalAsNumber
import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolId
import city.smartb.registry.program.s2.asset.domain.model.TransactionType

abstract class AbstractAssetTransactionCommand {
    abstract val poolId: AssetPoolId
    abstract val from: String?
    abstract val to: String?
    abstract val quantity: BigDecimalAsNumber
    abstract val type: TransactionType
}
