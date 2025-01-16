package io.komune.registry.f2.dataset.client

import f2.client.F2Client
import f2.client.domain.AuthRealm
import f2.client.function
import f2.client.ktor.F2ClientBuilder
import f2.client.ktor.http.plugin.F2Auth
import f2.dsl.fnc.F2SupplierSingle
import f2.dsl.fnc.f2SupplierSingle
import io.komune.registry.f2.dataset.domain.DatasetApi
import io.komune.registry.f2.dataset.domain.command.DatasetCreateFunction
import io.komune.registry.f2.dataset.domain.command.DatasetDeleteFunction
import io.komune.registry.f2.dataset.domain.command.DatasetLinkDatasetsFunction
import io.komune.registry.f2.dataset.domain.command.DatasetLinkThemesFunction
import io.komune.registry.f2.dataset.domain.query.DatasetDataFunction
import io.komune.registry.f2.dataset.domain.query.DatasetGetByIdentifierFunction
import io.komune.registry.f2.dataset.domain.query.DatasetGetFunction
import io.komune.registry.f2.dataset.domain.query.DatasetListLanguagesFunction
import io.komune.registry.f2.dataset.domain.query.DatasetPageFunction
import io.komune.registry.f2.dataset.domain.query.DatasetRefListFunction
import kotlin.js.JsExport
import kotlin.js.JsName

fun F2Client.datasetClient(): F2SupplierSingle<DatasetClient> = f2SupplierSingle {
    DatasetClient(this)
}

typealias AuthRealmProvider = suspend () -> AuthRealm

fun datasetClient(urlBase: String, authRealmProvider: AuthRealmProvider): F2SupplierSingle<DatasetClient> =
    f2SupplierSingle {
        DatasetClient(
            F2ClientBuilder.get(urlBase) {
                install(F2Auth) {
                    this.getAuth = authRealmProvider
                }
            }
        )
    }


@JsExport
@JsName("DatasetClient")
open class DatasetClient(val client: F2Client) : DatasetApi {
    override fun datasetCreate(): DatasetCreateFunction = client.function(this::datasetCreate.name)
    override fun datasetLinkDatasets(): DatasetLinkDatasetsFunction = client.function(this::datasetLinkDatasets.name)
    override fun datasetLinkThemes(): DatasetLinkThemesFunction = client.function(this::datasetLinkThemes.name)
    override fun datasetDelete(): DatasetDeleteFunction = client.function(this::datasetDelete.name)
    override fun datasetPage(): DatasetPageFunction = client.function(this::datasetPage.name)
    override fun datasetGet(): DatasetGetFunction = client.function(this::datasetGet.name)
    override fun datasetGetByIdentifier(): DatasetGetByIdentifierFunction = client.function(this::datasetGetByIdentifier.name)
    override fun datasetRefList(): DatasetRefListFunction = client.function(this::datasetRefList.name)
    override fun datasetData(): DatasetDataFunction = client.function(this::datasetData.name)
    override fun datasetListLanguages(): DatasetListLanguagesFunction = client.function(this::datasetListLanguages.name)
}
