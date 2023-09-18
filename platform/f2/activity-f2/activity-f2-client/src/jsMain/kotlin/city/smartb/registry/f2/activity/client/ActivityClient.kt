package city.smartb.registry.f2.activity.client

import f2.client.F2Client
import f2.client.ktor.F2ClientBuilder
import f2.client.ktor.get
import f2.dsl.fnc.F2SupplierSingle

import f2.dsl.fnc.f2SupplierSingle
import kotlinx.coroutines.await

@JsExport
@JsName("activityClient")
actual fun activityClient(urlBase: String, accessToken: String): F2SupplierSingle<ActivityClient> = f2SupplierSingle {
    F2ClientBuilder.get(urlBase)
        .await()
        .let(::ActivityClient)
}

actual fun F2Client.activityClient(): F2SupplierSingle<ActivityClient> = f2SupplierSingle {
    ActivityClient(this)
}
