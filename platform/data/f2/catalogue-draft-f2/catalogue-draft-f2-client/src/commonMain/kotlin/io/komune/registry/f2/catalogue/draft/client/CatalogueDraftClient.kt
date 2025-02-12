package io.komune.registry.f2.catalogue.draft.client

import f2.client.F2Client
import f2.client.domain.AuthRealm
import f2.client.function
import f2.client.ktor.F2ClientBuilder
import f2.client.ktor.http.plugin.F2Auth
import f2.dsl.fnc.F2SupplierSingle
import f2.dsl.fnc.f2SupplierSingle
import io.komune.registry.f2.catalogue.draft.domain.CatalogueDraftApi
import io.komune.registry.f2.catalogue.draft.domain.command.CatalogueDraftRejectFunction
import io.komune.registry.f2.catalogue.draft.domain.command.CatalogueDraftRequestUpdateFunction
import io.komune.registry.f2.catalogue.draft.domain.command.CatalogueDraftSubmitFunction
import io.komune.registry.f2.catalogue.draft.domain.command.CatalogueDraftValidateFunction
import io.komune.registry.f2.catalogue.draft.domain.query.CatalogueDraftGetFunction
import io.komune.registry.f2.catalogue.draft.domain.query.CatalogueDraftPageFunction
import io.ktor.client.plugins.logging.DEFAULT
import io.ktor.client.plugins.logging.LogLevel
import io.ktor.client.plugins.logging.Logger
import io.ktor.client.plugins.logging.Logging
import kotlin.js.JsExport
import kotlin.js.JsName

fun F2Client.catalogueDraftClient(): F2SupplierSingle<CatalogueDraftClient> = f2SupplierSingle {
    CatalogueDraftClient(this)
}
typealias AuthRealmProvider = suspend () -> AuthRealm

fun catalogueDraftClient(
    urlBase: String,
    authRealmProvider: AuthRealmProvider
): F2SupplierSingle<CatalogueDraftClient> = f2SupplierSingle {
    CatalogueDraftClient(
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
@JsName("CatalogueDraftClient")
open class CatalogueDraftClient(val client: F2Client) : CatalogueDraftApi {
    override fun catalogueDraftSubmit(): CatalogueDraftSubmitFunction = client.function("data/${this::catalogueDraftSubmit.name}")
    override fun catalogueDraftRequestUpdate(): CatalogueDraftRequestUpdateFunction
        = client.function("data/${this::catalogueDraftRequestUpdate.name}")
    override fun catalogueDraftReject(): CatalogueDraftRejectFunction = client.function("data/${this::catalogueDraftReject.name}")
    override fun catalogueDraftValidate(): CatalogueDraftValidateFunction = client.function("data/${this::catalogueDraftValidate.name}")

    override fun catalogueDraftGet(): CatalogueDraftGetFunction = client.function("data/${this::catalogueDraftGet.name}")
    override fun catalogueDraftPage(): CatalogueDraftPageFunction = client.function("data/${this::catalogueDraftPage.name}")
}
