package cccev.dsl.client

import f2.client.ktor.F2ClientBuilder
import f2.client.ktor.common.F2ClientConfigLambda
import io.komune.registry.f2.catalogue.client.CatalogueClient
import io.komune.registry.f2.catalogue.client.catalogueClient
import io.komune.registry.f2.concept.client.conceptClient
import io.komune.registry.f2.dataset.client.datasetClient

class RegistryClient(
    val catalogueClient: CatalogueClient,
    val graphClient: DCatGraphClient
) {
    companion object {
        suspend operator fun invoke(
            url: String,
            config: F2ClientConfigLambda<*>? = null
        ): RegistryClient {
            val f2Client = F2ClientBuilder.get(url, config = config)
            val catalogueClient = f2Client.catalogueClient().invoke()
            val conceptClient = f2Client.conceptClient().invoke()
            val datasetClient = f2Client.datasetClient().invoke()
            return RegistryClient(
                catalogueClient = catalogueClient,
                DCatGraphClient(
                    catalogueClient = catalogueClient,
                    conceptClient = conceptClient,
                    datasetClient = datasetClient,
                )
            )
        }
    }
}
