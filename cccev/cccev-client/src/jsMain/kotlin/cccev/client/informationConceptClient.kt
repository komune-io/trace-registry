package cccev.client

import f2.client.F2Client
import f2.client.ktor.F2ClientBuilder
import f2.client.ktor.get
import f2.dsl.fnc.F2SupplierSingle

import f2.dsl.fnc.f2SupplierSingle
import kotlinx.coroutines.await

@JsExport
actual fun informationConceptClient(urlBase: String): F2SupplierSingle<InformationConceptClient> = f2SupplierSingle {
    F2ClientBuilder.get(urlBase)
        .await()
        .let(::InformationConceptClient)
}

actual fun F2Client.informationConceptClient(): F2SupplierSingle<InformationConceptClient> = f2SupplierSingle {
    InformationConceptClient(this)
}
