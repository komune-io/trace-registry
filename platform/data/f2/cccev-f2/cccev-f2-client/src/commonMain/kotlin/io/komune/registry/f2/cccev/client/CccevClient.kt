package io.komune.registry.f2.cccev.client

import f2.client.F2Client
import f2.client.domain.AuthRealm
import f2.client.function
import f2.client.ktor.F2ClientBuilder
import f2.client.ktor.http.plugin.F2Auth
import f2.dsl.fnc.F2SupplierSingle
import f2.dsl.fnc.f2SupplierSingle
import io.komune.registry.f2.cccev.domain.CccevApi
import io.komune.registry.f2.cccev.domain.concept.command.InformationConceptCreateFunction
import io.komune.registry.f2.cccev.domain.concept.query.InformationConceptGetByIdentifierFunction
import io.komune.registry.f2.cccev.domain.concept.query.InformationConceptListFunction
import io.komune.registry.f2.cccev.domain.unit.command.DataUnitCreateFunction
import io.komune.registry.f2.cccev.domain.unit.query.DataUnitGetByIdentifierFunction
import io.ktor.client.plugins.logging.DEFAULT
import io.ktor.client.plugins.logging.LogLevel
import io.ktor.client.plugins.logging.Logger
import io.ktor.client.plugins.logging.Logging
import kotlin.js.JsExport

fun F2Client.cccevClient(): F2SupplierSingle<CccevClient> = f2SupplierSingle {
    CccevClient(this)
}
typealias AuthRealmProvider = suspend () -> AuthRealm

fun cccevClient(
    urlBase: String,
    authRealmProvider: AuthRealmProvider
): F2SupplierSingle<CccevClient> = f2SupplierSingle {
    CccevClient(
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
open class CccevClient(val client: F2Client) : CccevApi {
    override fun informationConceptCreate(): InformationConceptCreateFunction
        = client.function("data/${this::informationConceptCreate.name}")
    override fun informationConceptGetByIdentifier(): InformationConceptGetByIdentifierFunction
        = client.function("data/${this::informationConceptGetByIdentifier.name}")
    override fun informationConceptList(): InformationConceptListFunction
        = client.function("data/${this::informationConceptList.name}")


    override fun dataUnitCreate(): DataUnitCreateFunction = client.function("data/${this::dataUnitCreate.name}")
    override fun dataUnitGetByIdentifier(): DataUnitGetByIdentifierFunction
        = client.function("data/${this::dataUnitGetByIdentifier.name}")
}
