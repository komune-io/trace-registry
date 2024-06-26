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
import f2.dsl.fnc.F2SupplierSingle
import kotlin.js.JsExport
import kotlin.js.JsName

expect fun F2Client.catalogueClient(): F2SupplierSingle<CatalogueClient>
expect fun catalogueClient(urlBase: String, accessToken: String): F2SupplierSingle<CatalogueClient>

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
