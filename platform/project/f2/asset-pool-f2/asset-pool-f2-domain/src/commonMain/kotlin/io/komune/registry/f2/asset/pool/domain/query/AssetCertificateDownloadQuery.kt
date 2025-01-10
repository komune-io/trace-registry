package io.komune.registry.f2.asset.pool.domain.query

import f2.dsl.fnc.F2Function
import io.komune.registry.s2.asset.domain.automate.AssetTransactionId
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Download the certificate of an asset transaction.
 * @d2 function
 * @order 10
 * @parent [io.komune.registry.f2.asset.pool.domain.D2AssetPoolF2Page]
 */
typealias AssetCertificateDownloadFunction = F2Function<AssetCertificateDownloadQuery, AssetCertificateDownloadResult>

/**
 * @d2 query
 * @parent [AssetCertificateDownloadFunction]
 */
@JsExport
@JsName("AssetCertificateDownloadQueryDTO")
interface AssetCertificateDownloadQueryDTO {
    val transactionId: AssetTransactionId
}

/**
 * @d2 inherit
 */
data class AssetCertificateDownloadQuery(
    override val transactionId: AssetTransactionId
): AssetCertificateDownloadQueryDTO

/**
 * @d2 event
 * @parent [AssetCertificateDownloadFunction]
 */
typealias AssetCertificateDownloadResult = ByteArray
