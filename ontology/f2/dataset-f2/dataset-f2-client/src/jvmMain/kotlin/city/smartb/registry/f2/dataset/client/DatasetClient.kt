package city.smartb.registry.f2.dataset.client

import f2.client.F2Client
import f2.client.ktor.F2ClientBuilder
import f2.client.ktor.get
import f2.dsl.fnc.F2SupplierSingle
import f2.dsl.fnc.f2SupplierSingle
import io.ktor.client.plugins.HttpTimeout
import io.ktor.client.plugins.auth.Auth
import io.ktor.client.plugins.auth.providers.BearerTokens
import io.ktor.client.plugins.auth.providers.bearer
import io.ktor.client.plugins.logging.DEFAULT
import io.ktor.client.plugins.logging.LogLevel
import io.ktor.client.plugins.logging.Logger
import io.ktor.client.plugins.logging.Logging

actual fun F2Client.datasetClient(): F2SupplierSingle<DatasetClient> = f2SupplierSingle {
    DatasetClient(this)
}


actual fun datasetClient(urlBase: String, accessToken: String): F2SupplierSingle<DatasetClient> = f2SupplierSingle {
    DatasetClient(
        F2ClientBuilder.get(urlBase) {
            install(HttpTimeout) {
                requestTimeoutMillis = 60000
            }
            install(Logging) {
                logger = Logger.DEFAULT
                level = LogLevel.HEADERS
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
