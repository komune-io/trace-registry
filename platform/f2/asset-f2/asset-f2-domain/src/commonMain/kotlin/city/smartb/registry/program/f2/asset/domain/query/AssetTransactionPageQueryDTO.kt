package city.smartb.registry.program.f2.asset.domain.query

import city.smartb.registry.program.f2.asset.domain.model.TransactionDTO
import city.smartb.registry.program.f2.asset.domain.model.TransactionDTOBase
import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolId
import city.smartb.registry.program.s2.asset.domain.automate.TransactionId
import city.smartb.registry.program.s2.project.domain.model.ProjectId
import f2.dsl.cqrs.page.PageDTO
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport

/**
 * @d2 function
 * @parent [city.smartb.registry.program.f2.asset.domain.D2AssetF2Page]
 * @order 100
 */
typealias AssetTransactionPageFunction = F2Function<AssetTransactionPageQueryDTOBase, AssetTransactionPageResultDTOBase>

/**
 * @d2 query
 * @parent [AssetTransactionPageFunction]
 */
@JsExport
interface AssetTransactionPageQueryDTO {
    val limit: Int?
    val offset: Int?
    val projectId: ProjectId?
    val poolId: AssetPoolId?
    val transactionId: TransactionId?
    val transactionFrom: String?
    val transactionTo: String?
    val type: String?
}

/**
 * @d2 inherit
 */
data class AssetTransactionPageQueryDTOBase(
    override val limit: Int?,
    override val offset: Int?,
    override val projectId: ProjectId?,
    override val poolId: AssetPoolId?,
    override val transactionId: TransactionId?,
    override val transactionFrom: String?,
    override val transactionTo: String?,
    override val type: String?
): AssetTransactionPageQueryDTO

/**
 * @d2 result
 * @parent [AssetTransactionPageFunction]
 */
@JsExport
interface AssetTransactionPageResultDTO: PageDTO<TransactionDTO>

/**
 * @d2 inherit
 */
data class AssetTransactionPageResultDTOBase(
    override val items: List<TransactionDTOBase>,
    override val total: Int
): AssetTransactionPageResultDTO
