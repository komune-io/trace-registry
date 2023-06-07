package city.smartb.registry.program.f2.asset.domain.query

import city.smartb.registry.program.s2.asset.domain.automate.TransactionId
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport
import kotlin.js.JsName

typealias AssetCertificateDownloadFunction = F2Function<AssetCertificateDownloadQuery, AssetCertificateDownloadResult>

@JsExport
@JsName("AssetCertificateDownloadQueryDTO")
interface AssetCertificateDownloadQueryDTO {
    val transactionId: TransactionId
}

data class AssetCertificateDownloadQuery(
    override val transactionId: TransactionId
): AssetCertificateDownloadQueryDTO

typealias AssetCertificateDownloadResult = ByteArray
