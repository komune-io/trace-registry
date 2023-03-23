package city.smartb.registry.program.f2.project.client

import f2.client.F2Client
import f2.client.ktor.F2ClientBuilder
import f2.client.ktor.get
import f2.dsl.fnc.F2SupplierSingle
import f2.dsl.fnc.f2SupplierSingle
import io.ktor.client.plugins.HttpTimeout

actual fun F2Client.projectClient(): F2SupplierSingle<ProjectClient> = f2SupplierSingle {
    ProjectClient(this)
}

actual fun projectClient(
    urlBase: String
): F2SupplierSingle<ProjectClient> = f2SupplierSingle {
    ProjectClient(
        F2ClientBuilder.get(urlBase) {
            install(HttpTimeout) {
                requestTimeoutMillis = 60000
            }
        }
    )
}
