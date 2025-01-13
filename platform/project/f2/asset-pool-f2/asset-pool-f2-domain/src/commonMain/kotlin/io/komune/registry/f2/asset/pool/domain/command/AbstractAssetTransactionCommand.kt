package io.komune.registry.f2.asset.pool.domain.command

import io.komune.registry.s2.asset.domain.automate.AssetPoolId
import io.komune.registry.s2.asset.domain.model.AssetTransactionType
import io.komune.registry.s2.commons.model.BigDecimalAsNumber

interface AbstractAssetTransactionCommand {
    val id: AssetPoolId
    val from: String?
    val to: String?
    val quantity: BigDecimalAsNumber
    val type: AssetTransactionType
    val draft: Boolean
}
