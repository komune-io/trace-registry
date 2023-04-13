package city.smartb.registry.program.f2.activity.client

import f2.client.F2Client
import f2.client.ktor.F2ClientBuilder
import f2.client.ktor.get
import f2.dsl.fnc.F2SupplierSingle
import f2.dsl.fnc.f2SupplierSingle

actual fun F2Client.activityClient(): F2SupplierSingle<ActivityClient> = f2SupplierSingle {
    ActivityClient(this)
}


actual fun activityClient(urlBase: String): F2SupplierSingle<ActivityClient> = f2SupplierSingle {
    ActivityClient(
        F2ClientBuilder.get(urlBase)
    )
}
