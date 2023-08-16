package city.smartb.registry.program.f2.asset.client

import city.smartb.registry.program.f2.asset.domain.AssetOrderApi
import city.smartb.registry.program.f2.asset.domain.command.AssetOrderCancelFunction
import city.smartb.registry.program.f2.asset.domain.command.AssetOrderCompleteFunction
import city.smartb.registry.program.f2.asset.domain.command.AssetOrderDeleteFunction
import city.smartb.registry.program.f2.asset.domain.command.AssetOrderSubmitFunction
import city.smartb.registry.program.f2.asset.domain.command.AssetOrderUpdateFunction
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
    override fun assetOrderCancel(): AssetOrderCancelFunction = client.function(this::assetOrderCancel.name)
    override fun assetOrderComplete(): AssetOrderCompleteFunction = client.function(this::assetOrderComplete.name)
    override fun assetOrderSubmit(): AssetOrderSubmitFunction = client.function(this::assetOrderSubmit.name)
    override fun assetOrderUpdate(): AssetOrderUpdateFunction = client.function(this::assetOrderUpdate.name)
    override fun assetOrderDelete(): AssetOrderDeleteFunction = client.function(this::assetOrderDelete.name)
}
