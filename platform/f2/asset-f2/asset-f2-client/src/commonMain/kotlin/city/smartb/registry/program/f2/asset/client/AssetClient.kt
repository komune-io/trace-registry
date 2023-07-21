package city.smartb.registry.program.f2.asset.client

import city.smartb.registry.program.f2.asset.domain.AssetApi
import city.smartb.registry.program.f2.asset.domain.command.AssetIssueFunction
import city.smartb.registry.program.f2.asset.domain.command.AssetOffsetFunction
import city.smartb.registry.program.f2.asset.domain.command.AssetOrderCancelFunction
import city.smartb.registry.program.f2.asset.domain.command.AssetOrderCompleteFunction
import city.smartb.registry.program.f2.asset.domain.command.AssetOrderDeleteFunction
import city.smartb.registry.program.f2.asset.domain.command.AssetOrderSubmitFunction
import city.smartb.registry.program.f2.asset.domain.command.AssetOrderUpdateFunction
import city.smartb.registry.program.f2.asset.domain.command.AssetRetireFunction
import city.smartb.registry.program.f2.asset.domain.command.AssetTransferFunction
import city.smartb.registry.program.f2.asset.domain.query.AssetStatsGetFunction
import city.smartb.registry.program.f2.asset.domain.query.AssetTransactionGetFunction
import city.smartb.registry.program.f2.asset.domain.query.AssetTransactionPageFunction
import f2.client.F2Client
import f2.client.function
import f2.dsl.fnc.F2SupplierSingle
import kotlin.js.JsExport
import kotlin.js.JsName

expect fun F2Client.assetClient(): F2SupplierSingle<AssetClient>
expect fun assetClient(urlBase: String, accessToken: String): F2SupplierSingle<AssetClient>

@JsName("AssetClient")
@JsExport
open class AssetClient constructor(private val client: F2Client) : AssetApi {
    override fun assetIssue(): AssetIssueFunction = client.function(this::assetIssue.name)
    override fun assetTransfer(): AssetTransferFunction = client.function(this::assetTransfer.name)
    override fun assetOffset(): AssetOffsetFunction = client.function(this::assetOffset.name)
    override fun assetOrderCancel(): AssetOrderCancelFunction = client.function(this::assetOrderCancel.name)
    override fun assetOrderComplete(): AssetOrderCompleteFunction = client.function(this::assetOrderComplete.name)
    override fun assetRetire(): AssetRetireFunction = client.function(this::assetRetire.name)
    override fun assetOrderSubmit(): AssetOrderSubmitFunction = client.function(this::assetOrderSubmit.name)
    override fun assetOrderUpdate(): AssetOrderUpdateFunction = client.function(this::assetOrderUpdate.name)
    override fun assetOrderDelete(): AssetOrderDeleteFunction = client.function(this::assetOrderDelete.name)
    override fun assetTransactionGet(): AssetTransactionGetFunction = client.function(this::assetTransactionGet.name)
    override fun assetTransactionPage(): AssetTransactionPageFunction = client.function(this::assetTransactionPage.name)
    override fun assetStatsGet(): AssetStatsGetFunction = client.function(this::assetTransactionPage.name)
}
