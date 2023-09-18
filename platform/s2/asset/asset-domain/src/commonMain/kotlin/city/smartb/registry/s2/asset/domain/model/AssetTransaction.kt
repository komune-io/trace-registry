package city.smartb.registry.s2.asset.domain.model

import city.smartb.fs.s2.file.domain.model.FilePath
import city.smartb.registry.s2.asset.domain.automate.AssetPoolId
import city.smartb.registry.s2.asset.domain.automate.AssetTransactionId
import city.smartb.registry.s2.asset.domain.automate.AssetTransactionState
import city.smartb.registry.s2.commons.model.BigDecimalAsString

data class AssetTransaction(
    val id: AssetTransactionId,
    val poolId: AssetPoolId,
    val from: String?,
    val to: String?,
    val by: String,
    val quantity: BigDecimalAsString,
    val type: AssetTransactionType,
    val date: Long,
    val file: FilePath?,
    val state: AssetTransactionState
)
