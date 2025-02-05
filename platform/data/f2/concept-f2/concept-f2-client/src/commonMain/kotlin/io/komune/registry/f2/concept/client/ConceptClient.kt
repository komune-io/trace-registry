package io.komune.registry.f2.concept.client

import f2.client.F2Client
import f2.client.domain.AuthRealm
import f2.client.function
import f2.client.ktor.F2ClientBuilder
import f2.client.ktor.http.plugin.F2Auth
import f2.dsl.fnc.F2SupplierSingle
import f2.dsl.fnc.f2SupplierSingle
import io.komune.registry.f2.concept.domain.ConceptApi
import io.komune.registry.f2.concept.domain.command.ConceptCreateFunction
import io.komune.registry.f2.concept.domain.command.ConceptUpdateFunction
import io.komune.registry.f2.concept.domain.query.ConceptGetByIdentifierFunction
import io.komune.registry.f2.concept.domain.query.ConceptGetFunction
import io.komune.registry.f2.concept.domain.query.ConceptGetTranslatedFunction
import io.ktor.client.plugins.logging.DEFAULT
import io.ktor.client.plugins.logging.LogLevel
import io.ktor.client.plugins.logging.Logger
import io.ktor.client.plugins.logging.Logging
import kotlin.js.JsExport
import kotlin.js.JsName

fun F2Client.conceptClient(): F2SupplierSingle<ConceptClient> = f2SupplierSingle {
    ConceptClient(this)
}
typealias AuthRealmProvider = suspend () -> AuthRealm

fun conceptClient(
    urlBase: String,
    authRealmProvider: AuthRealmProvider
): F2SupplierSingle<ConceptClient> = f2SupplierSingle {
    ConceptClient(
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
@JsName("ConceptClient")
open class ConceptClient(val client: F2Client) : ConceptApi {
    override fun conceptCreate(): ConceptCreateFunction = client.function("data/${this::conceptCreate.name}")
    override fun conceptUpdate(): ConceptUpdateFunction = client.function("data/${this::conceptUpdate.name}")

    override fun conceptGet(): ConceptGetFunction = client.function("data/${this::conceptGet.name}")
    override fun conceptGetByIdentifier(): ConceptGetByIdentifierFunction = client.function("data/${this::conceptGetByIdentifier.name}")
    override fun conceptGetTranslated(): ConceptGetTranslatedFunction = client.function("data/${this::conceptGetTranslated.name}")
}
