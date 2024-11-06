package io.komune.registry.f2.asset.pool.domain.query

import f2.dsl.fnc.F2Function
import io.komune.registry.s2.asset.domain.automate.AssetTransactionId
import kotlin.js.JsExport
import kotlin.js.JsName

typealias AssetCertificateDownloadFunction = F2Function<AssetCertificateDownloadQuery, AssetCertificateDownloadResult>

@JsExport
@JsName("AssetCertificateDownloadQueryDTO")
interface AssetCertificateDownloadQueryDTO {
    val transactionId: AssetTransactionId
}

data class AssetCertificateDownloadQuery(
    override val transactionId: AssetTransactionId
): AssetCertificateDownloadQueryDTO

typealias AssetCertificateDownloadResult = ByteArray
