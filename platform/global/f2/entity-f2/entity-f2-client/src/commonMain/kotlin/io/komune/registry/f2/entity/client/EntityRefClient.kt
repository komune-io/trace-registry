package io.komune.registry.f2.entity.client

import f2.client.F2Client
import f2.client.domain.AuthRealm
import f2.client.function
import f2.client.ktor.F2ClientBuilder
import f2.client.ktor.http.plugin.F2Auth
import f2.dsl.fnc.F2SupplierSingle
import f2.dsl.fnc.f2SupplierSingle
import io.komune.registry.f2.entity.domain.EntityRefApi
import io.komune.registry.f2.entity.domain.query.EntityRefGetFunction
import io.ktor.client.plugins.logging.DEFAULT
import io.ktor.client.plugins.logging.LogLevel
import io.ktor.client.plugins.logging.Logger
import io.ktor.client.plugins.logging.Logging
import kotlin.js.JsExport

fun F2Client.entityRefClient(): F2SupplierSingle<EntityRefClient> = f2SupplierSingle {
    EntityRefClient(this)
}
typealias AuthRealmProvider = suspend () -> AuthRealm

fun entityRefClient(
    urlBase: String,
    authRealmProvider: AuthRealmProvider
): F2SupplierSingle<EntityRefClient> = f2SupplierSingle {
    EntityRefClient(
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
open class EntityRefClient(val client: F2Client) : EntityRefApi {
    override fun entityRefGet(): EntityRefGetFunction = client.function("data/${this::entityRefGet.name}")
}
