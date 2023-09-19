package city.smartb.registry.f2.asset.pool.client

import city.smartb.registry.f2.asset.pool.client.AssetPoolClient
import f2.client.F2Client
import f2.client.ktor.F2ClientBuilder
import f2.client.ktor.get
import f2.dsl.fnc.F2SupplierSingle
import f2.dsl.fnc.f2SupplierSingle
import kotlinx.coroutines.await

@JsName("assetPoolClient")
@JsExport
actual fun assetPoolClient(urlBase: String, accessToken: String): F2SupplierSingle<AssetPoolClient> = f2SupplierSingle {
    F2ClientBuilder.get(urlBase)
        .await()
        .let(::AssetPoolClient)
}

actual fun F2Client.assetPoolClient(): F2SupplierSingle<AssetPoolClient> = f2SupplierSingle {
    AssetPoolClient(this)
}
