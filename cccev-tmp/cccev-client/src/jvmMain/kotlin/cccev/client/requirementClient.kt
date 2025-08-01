package cccev.client

import f2.client.F2Client
import f2.client.ktor.F2ClientBuilder
import f2.client.ktor.get
import f2.dsl.fnc.F2SupplierSingle
import f2.dsl.fnc.f2SupplierSingle
import io.ktor.client.plugins.HttpTimeout

actual fun F2Client.requirementClient(): F2SupplierSingle<RequirementClient> = f2SupplierSingle {
    RequirementClient(this)
}


actual fun requirementClient(
    urlBase: String
): F2SupplierSingle<RequirementClient> = f2SupplierSingle {
    RequirementClient(
        F2ClientBuilder.get(urlBase) {
            install(HttpTimeout) {
                requestTimeoutMillis = 60000
            }
        }
    )
}
