package city.smartb.registry.f2.asset.pool.domain.query

import city.smartb.registry.s2.asset.domain.automate.AssetTransactionId
import f2.dsl.fnc.F2Function
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
