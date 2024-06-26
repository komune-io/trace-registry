package cccev.dsl.client

import io.komune.registry.f2.catalogue.client.CatalogueClient
import io.komune.registry.f2.catalogue.client.catalogueClient
import io.komune.registry.f2.dataset.client.datasetClient
import f2.client.ktor.F2ClientBuilder
import f2.client.ktor.get
import f2.client.ktor.http.F2ClientConfigLambda
import f2.dsl.fnc.F2SupplierSingle
import kotlinx.serialization.json.Json

class RegistryClient(
    val catalogueClient: F2SupplierSingle<CatalogueClient>,
    val graphClient: DCatGraphClient
) {
    companion object {
        suspend operator fun invoke(
            url: String,
            json: Json? = null,
            config: F2ClientConfigLambda? = null
        ): RegistryClient {
            val f2Client = F2ClientBuilder.get(url, json, config = config)
            val catalogueClient = f2Client.catalogueClient()
            val datasetClient = f2Client.datasetClient()
            return RegistryClient(
                catalogueClient = catalogueClient,
                DCatGraphClient(
                    catalogueClient = catalogueClient,
                    datasetClient = datasetClient,
                )
            )
        }
    }
}
