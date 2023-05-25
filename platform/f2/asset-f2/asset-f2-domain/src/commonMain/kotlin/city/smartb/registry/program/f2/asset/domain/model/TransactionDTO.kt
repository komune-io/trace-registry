package city.smartb.registry.program.f2.asset.domain.model

import city.smartb.fs.s2.file.domain.model.FilePath
import city.smartb.fs.s2.file.domain.model.FilePathDTO
import city.smartb.registry.program.api.commons.model.BigDecimalAsNumber
import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolId
import city.smartb.registry.program.s2.asset.domain.automate.TransactionId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * @d2 model
 * @parent [city.smartb.registry.program.f2.asset.domain.D2AssetF2Page]
 * @order 100
 */
@JsExport
interface TransactionDTO {
    val id: TransactionId
    val date: Long
    val poolId: AssetPoolId
    val type: String
    val from: String?
    val to: String?
    val by: String
    val quantity: BigDecimalAsNumber
    val unit: String
    val vintage: String
    val file: FilePathDTO?
}

/**
 * @d2 inherit
 */
@Serializable
data class TransactionDTOBase(
    override val id: TransactionId,
    override val poolId: AssetPoolId,
    override val from: String?,
    override val to: String?,
    override val by: String,
    override val quantity: BigDecimalAsNumber,
    override val type: String,
    override val date: Long,
    override val unit: String,
    override val vintage: String,
    override val file: FilePath?
): TransactionDTO
