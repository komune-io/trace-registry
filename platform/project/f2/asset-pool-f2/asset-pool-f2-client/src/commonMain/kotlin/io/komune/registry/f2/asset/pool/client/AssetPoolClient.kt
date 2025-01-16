package io.komune.registry.f2.asset.pool.client

import f2.client.F2Client
import f2.client.domain.AuthRealm
import f2.client.function
import f2.client.ktor.F2ClientBuilder
import f2.client.ktor.http.plugin.F2Auth
import f2.dsl.fnc.F2SupplierSingle
import f2.dsl.fnc.f2SupplierSingle
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
import kotlin.js.JsExport
import kotlin.js.JsName

typealias AuthRealmProvider = suspend () -> AuthRealm
fun assetPoolClient(
    urlBase: String,
    authRealmProvider: AuthRealmProvider,
): F2SupplierSingle<AssetPoolClient> = f2SupplierSingle {
    AssetPoolClient(
        F2ClientBuilder.get(urlBase) {
            install(F2Auth) {
                this.getAuth = authRealmProvider
            }
        }
    )
}

fun F2Client.assetPoolClient(): F2SupplierSingle<AssetPoolClient> = f2SupplierSingle {
    AssetPoolClient(this)
}


@JsName("AssetPoolClient")
@JsExport
open class AssetPoolClient(private val client: F2Client) : AssetPoolApi {
    override fun assetPoolCreate(): AssetPoolCreateFunction = client.function("project/${this::assetPoolCreate.name}")
    override fun assetPoolHold(): AssetPoolHoldFunction = client.function("project/${this::assetPoolHold.name}")
    override fun assetPoolResume(): AssetPoolResumeFunction = client.function("project/${this::assetPoolResume.name}")
    override fun assetPoolClose(): AssetPoolCloseFunction = client.function("project/${this::assetPoolClose.name}")
    override fun assetPoolGet(): AssetPoolGetFunction = client.function("project/${this::assetPoolGet.name}")
    override fun assetPoolPage(): AssetPoolPageFunction = client.function("project/${this::assetPoolPage.name}")
    override fun assetIssue(): AssetIssueFunction = client.function("project/${this::assetIssue.name}")
    override fun assetTransfer(): AssetTransferFunction = client.function("project/${this::assetTransfer.name}")
    override fun assetOffset(): AssetOffsetFunction = client.function("project/${this::assetOffset.name}")
    override fun assetRetire(): AssetRetireFunction = client.function("project/${this::assetRetire.name}")
    override fun assetTransactionGet(): AssetTransactionGetFunction = client.function("project/${this::assetTransactionGet.name}")
    override fun assetTransactionPage(): AssetTransactionPageFunction = client.function("project/${this::assetTransactionPage.name}")
    override fun assetStatsGet(): AssetStatsGetFunction = client.function("project/${this::assetTransactionPage.name}")

}
