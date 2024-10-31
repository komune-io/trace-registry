package io.komune.registry.f2.asset.pool.client

import io.komune.registry.f2.asset.pool.domain.AssetPoolApi
import io.komune.registry.f2.asset.pool.domain.command.AssetIssueFunction
import io.komune.registry.f2.asset.pool.domain.command.AssetOffsetFunction
import io.komune.registry.f2.asset.pool.domain.command.AssetPoolCloseFunction
import io.komune.registry.f2.asset.pool.domain.command.AssetPoolCreateFunction
import io.komune.registry.f2.asset.pool.domain.command.AssetPoolHoldFunction
import io.komune.registry.f2.asset.pool.domain.command.AssetPoolResumeFunction
import io.komune.registry.f2.asset.pool.domain.command.AssetRetireFunction
import io.komune.registry.f2.asset.pool.domain.command.AssetTransferFunction
import io.komune.registry.f2.asset.pool.domain.query.AssetPoolGetFunction
import io.komune.registry.f2.asset.pool.domain.query.AssetPoolPageFunction
import io.komune.registry.f2.asset.pool.domain.query.AssetStatsGetFunction
import io.komune.registry.f2.asset.pool.domain.query.AssetTransactionGetFunction
import io.komune.registry.f2.asset.pool.domain.query.AssetTransactionPageFunction
import f2.client.F2Client
import f2.client.domain.AuthRealm
import f2.client.function
import f2.client.ktor.F2ClientBuilder
import f2.client.ktor.http.plugin.F2Auth
import f2.dsl.fnc.F2SupplierSingle
import f2.dsl.fnc.f2SupplierSingle
import io.ktor.client.plugins.HttpTimeout
import kotlin.js.JsExport
import kotlin.js.JsName


fun assetPoolClient(
    urlBase: String,
    getAuth: suspend () -> AuthRealm,
): F2SupplierSingle<AssetPoolClient> = f2SupplierSingle {
    AssetPoolClient(
        F2ClientBuilder.get(urlBase) {
            install(F2Auth) {
                this.getAuth = getAuth
            }
        }
    )
}

fun F2Client.assetPoolClient(): F2SupplierSingle<AssetPoolClient> = f2SupplierSingle {
    AssetPoolClient(this)
}


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
