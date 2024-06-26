package io.komune.registry.f2.asset.pool.client

import io.komune.registry.f2.asset.order.domain.AssetOrderApi
import io.komune.registry.f2.asset.order.domain.command.AssetOrderCancelFunction
import io.komune.registry.f2.asset.order.domain.command.AssetOrderCompleteFunction
import io.komune.registry.f2.asset.order.domain.command.AssetOrderDeleteFunction
import io.komune.registry.f2.asset.order.domain.command.AssetOrderPlaceFunction
import io.komune.registry.f2.asset.order.domain.command.AssetOrderSubmitFunction
import io.komune.registry.f2.asset.order.domain.command.AssetOrderUpdateFunction
import io.komune.registry.f2.asset.order.domain.query.AssetOrderGetFunction
import io.komune.registry.f2.asset.order.domain.query.AssetOrderPageFunction
import f2.client.F2Client
import f2.client.function
import f2.dsl.fnc.F2SupplierSingle
import kotlin.js.JsExport
import kotlin.js.JsName

expect fun F2Client.assetClient(): F2SupplierSingle<AssetClient>
expect fun assetClient(urlBase: String, accessToken: String): F2SupplierSingle<AssetClient>

@JsName("AssetClient")
@JsExport
open class AssetClient constructor(private val client: F2Client) : AssetOrderApi {
    override fun assetOrderGet(): AssetOrderGetFunction = client.function(this::assetOrderGet.name)
    override fun assetOrderPage(): AssetOrderPageFunction = client.function(this::assetOrderPage.name)
    override fun assetOrderPlace(): AssetOrderPlaceFunction = client.function(this::assetOrderPlace.name)
    override fun assetOrderCancel(): AssetOrderCancelFunction = client.function(this::assetOrderCancel.name)
    override fun assetOrderComplete(): AssetOrderCompleteFunction = client.function(this::assetOrderComplete.name)
    override fun assetOrderSubmit(): AssetOrderSubmitFunction = client.function(this::assetOrderSubmit.name)
    override fun assetOrderUpdate(): AssetOrderUpdateFunction = client.function(this::assetOrderUpdate.name)
    override fun assetOrderDelete(): AssetOrderDeleteFunction = client.function(this::assetOrderDelete.name)
}
