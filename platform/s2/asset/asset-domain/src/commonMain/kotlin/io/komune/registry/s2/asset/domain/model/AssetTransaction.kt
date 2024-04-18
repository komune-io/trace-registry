package io.komune.registry.s2.asset.domain.model

import io.komune.fs.s2.file.domain.model.FilePath
import io.komune.registry.s2.asset.domain.automate.AssetPoolId
import io.komune.registry.s2.asset.domain.automate.AssetTransactionId
import io.komune.registry.s2.asset.domain.automate.AssetTransactionState
import io.komune.registry.s2.commons.model.BigDecimalAsString

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
