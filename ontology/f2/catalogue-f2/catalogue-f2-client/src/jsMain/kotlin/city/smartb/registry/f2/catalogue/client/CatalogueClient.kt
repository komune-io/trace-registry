package city.smartb.registry.f2.catalogue.client

import f2.client.F2Client
import f2.client.ktor.F2ClientBuilder
import f2.client.ktor.get
import f2.dsl.fnc.F2SupplierSingle

import f2.dsl.fnc.f2SupplierSingle
import kotlinx.coroutines.await

@JsExport
@JsName("catalogueClient")
actual fun catalogueClient(urlBase: String, accessToken: String): F2SupplierSingle<CatalogueClient> = f2SupplierSingle {
    F2ClientBuilder.get(urlBase)
        .await()
        .let(::CatalogueClient)
}

actual fun F2Client.catalogueClient(): F2SupplierSingle<CatalogueClient> = f2SupplierSingle {
    CatalogueClient(this)
}
