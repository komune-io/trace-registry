package io.komune.registry.f2.license.client

import f2.client.F2Client
import f2.client.domain.AuthRealm
import f2.client.function
import f2.client.ktor.F2ClientBuilder
import f2.client.ktor.http.plugin.F2Auth
import f2.dsl.fnc.F2SupplierSingle
import f2.dsl.fnc.f2SupplierSingle
import io.komune.registry.f2.license.domain.LicenseApi
import io.komune.registry.f2.license.domain.command.LicenseCreateFunction
import io.komune.registry.f2.license.domain.command.LicenseUpdateFunction
import io.komune.registry.f2.license.domain.query.LicenseGetByIdentifierFunction
import io.komune.registry.f2.license.domain.query.LicenseGetFunction
import io.komune.registry.f2.license.domain.query.LicenseListFunction
import io.ktor.client.plugins.logging.DEFAULT
import io.ktor.client.plugins.logging.LogLevel
import io.ktor.client.plugins.logging.Logger
import io.ktor.client.plugins.logging.Logging
import kotlin.js.JsExport
import kotlin.js.JsName

fun F2Client.licenseClient(): F2SupplierSingle<LicenseClient> = f2SupplierSingle {
    LicenseClient(this)
}
typealias AuthRealmProvider = suspend () -> AuthRealm

fun licenseClient(
    urlBase: String,
    authRealmProvider: AuthRealmProvider
): F2SupplierSingle<LicenseClient> = f2SupplierSingle {
    LicenseClient(
        F2ClientBuilder.get(urlBase) {
            install(F2Auth) {
                this.getAuth = authRealmProvider
            }
            install(Logging) {
                logger = Logger.DEFAULT
                level = LogLevel.HEADERS
                sanitizeHeader {
                    false
                }
            }
        }
    )
}

@JsExport
@JsName("LicenseClient")
open class LicenseClient(val client: F2Client) : LicenseApi {
    override fun licenseGet(): LicenseGetFunction = client.function("data/${this::licenseGet.name}")
    override fun licenseGetByIdentifier(): LicenseGetByIdentifierFunction = client.function("data/${this::licenseGetByIdentifier.name}")
    override fun licenseList(): LicenseListFunction = client.function("data/${this::licenseList.name}")

    override fun licenseCreate(): LicenseCreateFunction = client.function("data/${this::licenseCreate.name}")
    override fun licenseUpdate(): LicenseUpdateFunction = client.function("data/${this::licenseUpdate.name}")
}
