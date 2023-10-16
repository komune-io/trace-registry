package city.smartb.registry.f2.dataset.client

import f2.client.F2Client
import f2.client.ktor.F2ClientBuilder
import f2.client.ktor.get
import f2.dsl.fnc.F2SupplierSingle

import f2.dsl.fnc.f2SupplierSingle
import kotlinx.coroutines.await

@JsExport
@JsName("datasetClient")
actual fun datasetClient(urlBase: String, accessToken: String): F2SupplierSingle<DatasetClient> = f2SupplierSingle {
    F2ClientBuilder.get(urlBase)
        .await()
        .let(::DatasetClient)
}

actual fun F2Client.datasetClient(): F2SupplierSingle<DatasetClient> = f2SupplierSingle {
    DatasetClient(this)
}
