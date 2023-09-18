package city.smartb.registry.f2.pool.domain.query

import city.smartb.registry.s2.asset.domain.automate.AssetTransactionId
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport
import kotlin.js.JsName

typealias AssetCertificateDownloadFunction = F2Function<city.smartb.registry.f2.pool.domain.query.AssetCertificateDownloadQuery, city.smartb.registry.f2.pool.domain.query.AssetCertificateDownloadResult>

@JsExport
@JsName("AssetCertificateDownloadQueryDTO")
interface AssetCertificateDownloadQueryDTO {
    val transactionId: AssetTransactionId
}

data class AssetCertificateDownloadQuery(
    override val transactionId: AssetTransactionId
): city.smartb.registry.f2.pool.domain.query.AssetCertificateDownloadQueryDTO

typealias AssetCertificateDownloadResult = ByteArray
