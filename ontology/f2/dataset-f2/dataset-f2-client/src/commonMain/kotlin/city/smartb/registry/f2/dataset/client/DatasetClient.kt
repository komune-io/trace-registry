package city.smartb.registry.f2.dataset.client

import city.smartb.registry.f2.dataset.domain.DatasetApi
import city.smartb.registry.f2.dataset.domain.command.DatasetCreateFunction
import city.smartb.registry.f2.dataset.domain.command.DatasetDeleteFunction
import city.smartb.registry.f2.dataset.domain.command.DatasetLinkDatasetsFunction
import city.smartb.registry.f2.dataset.domain.command.DatasetLinkThemesFunction
import city.smartb.registry.f2.dataset.domain.query.DatasetDataFunction
import city.smartb.registry.f2.dataset.domain.query.DatasetGetFunction
import city.smartb.registry.f2.dataset.domain.query.DatasetPageFunction
import city.smartb.registry.f2.dataset.domain.query.DatasetRefListFunction
import f2.client.F2Client
import f2.client.function
import f2.dsl.fnc.F2SupplierSingle
import kotlin.js.JsExport
import kotlin.js.JsName

expect fun F2Client.datasetClient(): F2SupplierSingle<DatasetClient>
expect fun datasetClient(urlBase: String, accessToken: String): F2SupplierSingle<DatasetClient>

@JsExport
@JsName("DatasetClient")
open class DatasetClient(val client: F2Client) : DatasetApi {
    override fun datasetCreate(): DatasetCreateFunction = client.function(this::datasetCreate.name)
    override fun datasetLinkDatasets(): DatasetLinkDatasetsFunction = client.function(this::datasetLinkDatasets.name)
    override fun datasetLinkThemes(): DatasetLinkThemesFunction = client.function(this::datasetLinkThemes.name)
    override fun datasetDelete(): DatasetDeleteFunction = client.function(this::datasetDelete.name)
    override fun datasetPage(): DatasetPageFunction = client.function(this::datasetPage.name)
    override fun datasetGet(): DatasetGetFunction = client.function(this::datasetGet.name)
    override fun datasetRefList(): DatasetRefListFunction = client.function(this::datasetRefList.name)
    override fun datasetData(): DatasetDataFunction = client.function(this::datasetData.name)
}
