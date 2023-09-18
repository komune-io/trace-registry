package city.smartb.registry.f2.pool.client

import city.smartb.registry.f2.pool.domain.query.AssetPoolPageFunction
import city.smartb.registry.f2.pool.domain.query.AssetTransactionGetFunction
import city.smartb.registry.f2.pool.domain.query.AssetTransactionPageFunction
import f2.client.F2Client
import f2.client.function
import f2.dsl.fnc.F2SupplierSingle
import kotlin.js.JsExport
import kotlin.js.JsName

expect fun F2Client.assetPoolClient(): F2SupplierSingle<AssetPoolClient>
expect fun assetPoolClient(urlBase: String, accessToken: String): F2SupplierSingle<AssetPoolClient>

@JsName("AssetPoolClient")
@JsExport
open class AssetPoolClient constructor(private val client: F2Client) :
    city.smartb.registry.f2.pool.domain.AssetPoolApi {
    override fun assetPoolCreate(): city.smartb.registry.f2.pool.domain.command.AssetPoolCreateFunction = client.function(this::assetPoolCreate.name)
    override fun assetPoolHold(): city.smartb.registry.f2.pool.domain.command.AssetPoolHoldFunction = client.function(this::assetPoolHold.name)
    override fun assetPoolResume(): city.smartb.registry.f2.pool.domain.command.AssetPoolResumeFunction = client.function(this::assetPoolResume.name)
    override fun assetPoolClose(): city.smartb.registry.f2.pool.domain.command.AssetPoolCloseFunction = client.function(this::assetPoolClose.name)
    override fun assetPoolGet(): city.smartb.registry.f2.pool.domain.query.AssetPoolGetFunction = client.function(this::assetPoolGet.name)
    override fun assetPoolPage(): AssetPoolPageFunction = client.function(this::assetPoolPage.name)
    override fun assetIssue(): city.smartb.registry.f2.pool.domain.command.AssetIssueFunction = client.function(this::assetIssue.name)
    override fun assetTransfer(): city.smartb.registry.f2.pool.domain.command.AssetTransferFunction = client.function(this::assetTransfer.name)
    override fun assetOffset(): city.smartb.registry.f2.pool.domain.command.AssetOffsetFunction = client.function(this::assetOffset.name)
    override fun assetRetire(): city.smartb.registry.f2.pool.domain.command.AssetRetireFunction = client.function(this::assetRetire.name)

    override fun assetTransactionGet(): AssetTransactionGetFunction = client.function(this::assetTransactionGet.name)
    override fun assetTransactionPage(): AssetTransactionPageFunction = client.function(this::assetTransactionPage.name)
    override fun assetStatsGet(): city.smartb.registry.f2.pool.domain.query.AssetStatsGetFunction = client.function(this::assetTransactionPage.name)

}
