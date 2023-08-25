package city.smartb.registry.program.f2.pool.client

import city.smartb.registry.program.f2.pool.domain.AssetPoolApi
import city.smartb.registry.program.f2.pool.domain.command.AssetIssueFunction
import city.smartb.registry.program.f2.pool.domain.command.AssetOffsetFunction
import city.smartb.registry.program.f2.pool.domain.command.AssetPoolCloseFunction
import city.smartb.registry.program.f2.pool.domain.command.AssetPoolCreateFunction
import city.smartb.registry.program.f2.pool.domain.command.AssetPoolHoldFunction
import city.smartb.registry.program.f2.pool.domain.command.AssetPoolResumeFunction
import city.smartb.registry.program.f2.pool.domain.command.AssetRetireFunction
import city.smartb.registry.program.f2.pool.domain.command.AssetTransferFunction
import city.smartb.registry.program.f2.pool.domain.query.AssetPoolGetFunction
import city.smartb.registry.program.f2.pool.domain.query.AssetPoolPageFunction
import city.smartb.registry.program.f2.pool.domain.query.AssetStatsGetFunction
import city.smartb.registry.program.f2.pool.domain.query.AssetTransactionGetFunction
import city.smartb.registry.program.f2.pool.domain.query.AssetTransactionPageFunction
import f2.client.F2Client
import f2.client.function
import f2.dsl.fnc.F2SupplierSingle
import kotlin.js.JsExport
import kotlin.js.JsName

expect fun F2Client.assetPoolClient(): F2SupplierSingle<AssetPoolClient>
expect fun assetPoolClient(urlBase: String, accessToken: String): F2SupplierSingle<AssetPoolClient>

@JsName("AssetPoolClient")
@JsExport
open class AssetPoolClient constructor(private val client: F2Client) : AssetPoolApi {
    override fun assetPoolCreate(): AssetPoolCreateFunction = client.function(this::assetPoolCreate.name)
    override fun assetPoolHold(): AssetPoolHoldFunction = client.function(this::assetPoolHold.name)
    override fun assetPoolResume(): AssetPoolResumeFunction = client.function(this::assetPoolResume.name)
    override fun assetPoolClose(): AssetPoolCloseFunction = client.function(this::assetPoolClose.name)
    override fun assetPoolGet(): AssetPoolGetFunction = client.function(this::assetPoolGet.name)
    override fun assetPoolPage(): AssetPoolPageFunction = client.function(this::assetPoolPage.name)
    override fun assetIssue(): AssetIssueFunction = client.function(this::assetIssue.name)
    override fun assetTransfer(): AssetTransferFunction = client.function(this::assetTransfer.name)
    override fun assetOffset(): AssetOffsetFunction = client.function(this::assetOffset.name)
    override fun assetRetire(): AssetRetireFunction = client.function(this::assetRetire.name)

    override fun assetTransactionGet(): AssetTransactionGetFunction = client.function(this::assetTransactionGet.name)
    override fun assetTransactionPage(): AssetTransactionPageFunction = client.function(this::assetTransactionPage.name)
    override fun assetStatsGet(): AssetStatsGetFunction = client.function(this::assetTransactionPage.name)

}
