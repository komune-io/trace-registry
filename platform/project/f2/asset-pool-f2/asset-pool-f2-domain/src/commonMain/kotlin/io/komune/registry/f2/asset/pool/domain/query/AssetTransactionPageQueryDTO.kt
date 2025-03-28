package io.komune.registry.f2.asset.pool.domain.query

import f2.dsl.cqrs.page.PageDTO
import f2.dsl.fnc.F2Function
import io.komune.registry.f2.asset.pool.domain.model.AssetTransactionDTO
import io.komune.registry.f2.asset.pool.domain.model.AssetTransactionDTOBase
import io.komune.registry.s2.asset.domain.automate.AssetPoolId
import io.komune.registry.s2.asset.domain.automate.AssetTransactionId
import io.komune.registry.s2.project.domain.model.ProjectId
import kotlin.js.JsExport

/**
 * @d2 function
 * @parent [io.komune.registry.f2.asset.pool.domain.D2AssetPoolF2Page]
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
    val transactionId: AssetTransactionId?
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
    override val transactionId: AssetTransactionId?,
    override val transactionFrom: String?,
    override val transactionTo: String?,
    override val type: String?
): AssetTransactionPageQueryDTO

/**
 * @d2 result
 * @parent [AssetTransactionPageFunction]
 */
@JsExport
interface AssetTransactionPageResultDTO: PageDTO<AssetTransactionDTO>

/**
 * @d2 inherit
 */
data class AssetTransactionPageResultDTOBase(
    override val items: List<AssetTransactionDTOBase>,
    override val total: Int
): AssetTransactionPageResultDTO
