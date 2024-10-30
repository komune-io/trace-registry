package io.komune.registry.f2.catalogue.client

import io.komune.registry.f2.catalogue.domain.CatalogueApi
import io.komune.registry.f2.catalogue.domain.command.CatalogueCreateFunction
import io.komune.registry.f2.catalogue.domain.command.CatalogueDeleteFunction
import io.komune.registry.f2.catalogue.domain.command.CatalogueLinkCataloguesFunction
import io.komune.registry.f2.catalogue.domain.command.CatalogueLinkDatasetsFunction
import io.komune.registry.f2.catalogue.domain.command.CatalogueLinkThemesFunction
import io.komune.registry.f2.catalogue.domain.query.CatalogueGetFunction
import io.komune.registry.f2.catalogue.domain.query.CataloguePageFunction
import io.komune.registry.f2.catalogue.domain.query.CatalogueRefListFunction
import f2.client.F2Client
import f2.client.function
import f2.client.ktor.F2ClientBuilder
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
import kotlin.js.JsExport
import kotlin.js.JsName

fun F2Client.catalogueClient(): F2SupplierSingle<CatalogueClient> = f2SupplierSingle {
    CatalogueClient(this)
}

fun catalogueClient(urlBase: String, accessToken: String): F2SupplierSingle<CatalogueClient> = f2SupplierSingle {
    CatalogueClient(
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

@JsExport
@JsName("CatalogueClient")
open class CatalogueClient(val client: F2Client) : CatalogueApi {
    override fun catalogueCreate(): CatalogueCreateFunction = client.function(this::catalogueCreate.name)
    override fun catalogueLinkCatalogues(): CatalogueLinkCataloguesFunction
        = client.function(this::catalogueLinkCatalogues.name)
    override fun catalogueLinkDatasets(): CatalogueLinkDatasetsFunction
        = client.function(this::catalogueLinkDatasets.name)
    override fun catalogueLinkThemes(): CatalogueLinkThemesFunction = client.function(this::catalogueLinkThemes.name)
    override fun catalogueDelete(): CatalogueDeleteFunction = client.function(this::catalogueDelete.name)
    override fun cataloguePage(): CataloguePageFunction = client.function(this::cataloguePage.name)
    override fun catalogueGet(): CatalogueGetFunction = client.function(this::catalogueGet.name)
    override fun catalogueRefList(): CatalogueRefListFunction = client.function(this::catalogueRefList.name)
}
