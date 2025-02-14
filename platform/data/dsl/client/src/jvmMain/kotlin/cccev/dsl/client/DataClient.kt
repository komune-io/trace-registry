package cccev.dsl.client

import f2.client.domain.AuthRealm
import f2.client.ktor.F2ClientBuilder
import f2.client.ktor.http.plugin.F2Auth
import io.komune.registry.f2.catalogue.client.CatalogueClient
import io.komune.registry.f2.catalogue.client.catalogueClient
import io.komune.registry.f2.catalogue.draft.client.CatalogueDraftClient
import io.komune.registry.f2.catalogue.draft.client.catalogueDraftClient
import io.komune.registry.f2.concept.client.ConceptClient
import io.komune.registry.f2.concept.client.conceptClient
import io.komune.registry.f2.dataset.client.DatasetClient
import io.komune.registry.f2.dataset.client.datasetClient
import io.komune.registry.f2.license.client.LicenseClient
import io.komune.registry.f2.license.client.licenseClient

class DataClient(
    val catalogue: CatalogueClient,
    val catalogueDraft: CatalogueDraftClient,
    val concept: ConceptClient,
    val dataset: DatasetClient,
    val license: LicenseClient
) {

    companion object {
        suspend operator fun invoke(
            url: String,
            authRealm: AuthRealm,
        ): DataClient {
            val f2Client = F2ClientBuilder.get(url) {
                install(F2Auth) {
                    this.getAuth = { authRealm }
                }
            }
            return DataClient(
                catalogue = f2Client.catalogueClient().invoke(),
                catalogueDraft = f2Client.catalogueDraftClient().invoke(),
                concept = f2Client.conceptClient().invoke(),
                dataset = f2Client.datasetClient().invoke(),
                license = f2Client.licenseClient().invoke()
            )
        }
    }
}
