package cccev.client

import f2.client.F2Client
import f2.client.ktor.F2ClientBuilder
import f2.client.ktor.get
import f2.dsl.fnc.F2SupplierSingle
import f2.dsl.fnc.f2SupplierSingle

actual fun F2Client.dataUnitClient(): F2SupplierSingle<DataUnitClient> = f2SupplierSingle {
    DataUnitClient(this)
}

actual fun dataUnitClient(urlBase: String): F2SupplierSingle<DataUnitClient> = f2SupplierSingle {
    DataUnitClient(
        F2ClientBuilder.get(urlBase)
    )
}
