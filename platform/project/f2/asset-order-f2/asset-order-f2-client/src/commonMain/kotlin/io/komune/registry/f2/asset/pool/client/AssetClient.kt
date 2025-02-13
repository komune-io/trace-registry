package io.komune.registry.f2.asset.pool.client

import f2.client.F2Client
import f2.client.domain.AuthRealm
import f2.client.function
import f2.client.ktor.F2ClientBuilder
import f2.client.ktor.http.plugin.F2Auth
import f2.dsl.fnc.F2SupplierSingle
import f2.dsl.fnc.f2SupplierSingle
import io.komune.registry.f2.asset.order.domain.AssetOrderApi
import io.komune.registry.f2.asset.order.domain.command.AssetOrderCancelFunction
import io.komune.registry.f2.asset.order.domain.command.AssetOrderCompleteFunction
import io.komune.registry.f2.asset.order.domain.command.AssetOrderDeleteFunction
import io.komune.registry.f2.asset.order.domain.command.AssetOrderPlaceFunction
import io.komune.registry.f2.asset.order.domain.command.AssetOrderSubmitFunction
import io.komune.registry.f2.asset.order.domain.command.AssetOrderUpdateFunction
import io.komune.registry.f2.asset.order.domain.query.AssetOrderGetFunction
import io.komune.registry.f2.asset.order.domain.query.AssetOrderPageFunction
import kotlin.js.JsExport
import kotlin.js.JsName

fun F2Client.assetClient(): F2SupplierSingle<AssetClient> = f2SupplierSingle {
    AssetClient(this)
}
typealias AuthRealmProvider = suspend () -> AuthRealm
fun assetClient(
    urlBase: String,
    authRealmProvider: AuthRealmProvider,
): F2SupplierSingle<AssetClient> = f2SupplierSingle {
    AssetClient(
        F2ClientBuilder.get(urlBase) {
            install(F2Auth) {
                this.getAuth = authRealmProvider
            }
        }
    )
}

@JsName("AssetClient")
@JsExport
open class AssetClient(private val client: F2Client) : AssetOrderApi {
    override fun assetOrderGet(): AssetOrderGetFunction = client.function("project/${this::assetOrderGet.name}")
    override fun assetOrderPage(): AssetOrderPageFunction = client.function("project/${this::assetOrderPage.name}")
    override fun assetOrderPlace(): AssetOrderPlaceFunction = client.function("project/${this::assetOrderPlace.name}")
    override fun assetOrderCancel(): AssetOrderCancelFunction = client.function("project/${this::assetOrderCancel.name}")
    override fun assetOrderComplete(): AssetOrderCompleteFunction = client.function("project/${this::assetOrderComplete.name}")
    override fun assetOrderSubmit(): AssetOrderSubmitFunction = client.function("project/${this::assetOrderSubmit.name}")
    override fun assetOrderUpdate(): AssetOrderUpdateFunction = client.function("project/${this::assetOrderUpdate.name}")
    override fun assetOrderDelete(): AssetOrderDeleteFunction = client.function("project/${this::assetOrderDelete.name}")
}
