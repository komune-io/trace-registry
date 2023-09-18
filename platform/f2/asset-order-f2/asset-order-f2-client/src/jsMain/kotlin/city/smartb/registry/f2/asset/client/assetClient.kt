package city.smartb.registry.f2.asset.client

import f2.client.F2Client
import f2.client.ktor.F2ClientBuilder
import f2.client.ktor.get
import f2.dsl.fnc.F2SupplierSingle

import f2.dsl.fnc.f2SupplierSingle
import kotlinx.coroutines.await

@JsName("assetClient")
@JsExport
actual fun assetClient(urlBase: String, accessToken: String): F2SupplierSingle<AssetClient> = f2SupplierSingle {
    F2ClientBuilder.get(urlBase)
        .await()
        .let(::AssetClient)
}

actual fun F2Client.assetClient(): F2SupplierSingle<AssetClient> = f2SupplierSingle {
    AssetClient(this)
}
