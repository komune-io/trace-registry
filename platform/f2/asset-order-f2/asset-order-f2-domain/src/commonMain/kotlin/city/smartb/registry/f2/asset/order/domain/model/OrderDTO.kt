package city.smartb.registry.f2.asset.order.domain.model

import city.smartb.fs.s2.file.domain.model.FilePath
import city.smartb.fs.s2.file.domain.model.FilePathDTO
import city.smartb.registry.s2.asset.domain.automate.AssetPoolId
import city.smartb.registry.s2.asset.domain.automate.AssetTransactionState
import city.smartb.registry.s2.commons.model.BigDecimalAsNumber
import city.smartb.registry.s2.order.domain.OrderId
import kotlin.js.JsExport
import kotlinx.serialization.Serializable
import s2.dsl.automate.model.WithS2State

/**
 * @d2 model
 * @parent [city.smartb.registry.f2.asset.order.domain.D2AssetF2Page]
 * @order 100
 */
@JsExport
interface OrderDTO: WithS2State<AssetTransactionState> {
    val id: OrderId
    val status: String
    val poolId: AssetPoolId?
    val from: String?
    val to: String?
    val by: String
    val quantity: BigDecimalAsNumber
    val type: String
    val creationDate: Long
    val certificate: FilePathDTO?
    val cancelReason: String?

    override fun s2State() = AssetTransactionState.valueOf(status)
}

/**
 * @d2 inherit
 */
@Serializable
data class OrderDTOBase(
    override val id: OrderId,
    override val status: String,
    override val poolId: AssetPoolId?,
    override val from: String?,
    override val to: String?,
    override val by: String,
    override val quantity: BigDecimalAsNumber,
    override val type: String,
    override val creationDate: Long,
    override val certificate: FilePath?,
    override val cancelReason: String?
): OrderDTO
