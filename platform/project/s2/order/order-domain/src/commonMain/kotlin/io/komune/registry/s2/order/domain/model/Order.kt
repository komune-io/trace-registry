package io.komune.registry.s2.order.domain.model

import io.komune.fs.s2.file.domain.model.FilePath
import io.komune.registry.s2.asset.domain.automate.AssetPoolId
import io.komune.registry.s2.asset.domain.model.AssetTransactionType
import io.komune.registry.s2.commons.model.BigDecimalAsString
import io.komune.registry.s2.order.domain.OrderId
import io.komune.registry.s2.order.domain.OrderState

data class Order(
    val id: OrderId,
    val status: OrderState,
    val poolId: AssetPoolId?,
    val from: String?,
    val to: String?,
    val by: String,
    val quantity: BigDecimalAsString,
    val type: AssetTransactionType,
    val creationDate: Long,
    val completedDate: Long?,
    val certificate: FilePath?,
    val cancelReason: String?
)
