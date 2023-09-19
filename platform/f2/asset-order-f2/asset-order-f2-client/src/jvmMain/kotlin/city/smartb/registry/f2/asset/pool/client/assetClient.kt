package city.smartb.registry.f2.asset.pool.client

import f2.client.F2Client
import f2.client.ktor.F2ClientBuilder
import f2.client.ktor.get
import f2.dsl.fnc.F2SupplierSingle
import f2.dsl.fnc.f2SupplierSingle
import io.ktor.client.plugins.HttpTimeout
import io.ktor.client.plugins.auth.Auth
import io.ktor.client.plugins.auth.providers.BearerTokens
import io.ktor.client.plugins.auth.providers.bearer

actual fun F2Client.assetClient(): F2SupplierSingle<AssetClient> = f2SupplierSingle {
    AssetClient(this)
}

actual fun assetClient(
    urlBase: String,
    accessToken: String,
): F2SupplierSingle<AssetClient> = f2SupplierSingle {
    AssetClient(
        F2ClientBuilder.get(urlBase) {
            install(HttpTimeout) {
                requestTimeoutMillis = 60000
            }
            install(Auth) {
                bearer {
                    loadTokens {
                        BearerTokens(accessToken, "")
                    }
                }
            }
        }
    )
}
