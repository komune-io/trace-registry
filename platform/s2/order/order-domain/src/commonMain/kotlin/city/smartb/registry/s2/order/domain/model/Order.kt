package city.smartb.registry.s2.order.domain.model

import city.smartb.fs.s2.file.domain.model.FilePath
import city.smartb.registry.s2.asset.domain.automate.AssetPoolId
import city.smartb.registry.s2.asset.domain.model.AssetTransactionType
import city.smartb.registry.s2.commons.model.BigDecimalAsString
import city.smartb.registry.s2.order.domain.OrderId
import city.smartb.registry.s2.order.domain.OrderState

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
