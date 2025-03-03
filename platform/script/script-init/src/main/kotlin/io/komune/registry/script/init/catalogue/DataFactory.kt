package io.komune.registry.script.init.catalogue

import cccev.dsl.client.DCatGraphClient
import f2.client.domain.AuthRealm
import f2.client.ktor.F2ClientBuilder
import f2.client.ktor.http.plugin.F2Auth
import io.komune.registry.dsl.dcat.domain.model.catalogue
import io.komune.registry.f2.catalogue.client.CatalogueClient
import io.komune.registry.f2.catalogue.client.catalogueClient
import io.komune.registry.f2.concept.client.ConceptClient
import io.komune.registry.f2.concept.client.conceptClient
import io.komune.registry.f2.dataset.client.DatasetClient
import io.komune.registry.f2.dataset.client.datasetClient
import io.komune.registry.f2.license.client.LicenseClient
import io.komune.registry.f2.license.client.licenseClient
import io.komune.registry.s2.commons.model.CatalogueIdentifier
import io.komune.registry.s2.structure.domain.model.Structure
import io.komune.registry.script.init.actor.Actor
import kotlinx.coroutines.flow.flowOf
import kotlinx.coroutines.flow.toList
import kotlinx.coroutines.runBlocking
import net.datafaker.Faker

class DataFactory(
    val catalogueClient: CatalogueClient,
    val conceptClient: ConceptClient,
    val datasetClient: DatasetClient,
    val licenseClient: LicenseClient,
    val dcatGraphClient:  DCatGraphClient = DCatGraphClient(
        catalogueClient, conceptClient, datasetClient, licenseClient
    )
) {
    val faker = Faker()

    companion object {
        suspend operator fun invoke(
            url: String,
            authRealm: AuthRealm,
        ): DataFactory {
            val f2Client = F2ClientBuilder.get(url) {
                install(F2Auth) {
                    this.getAuth = { authRealm }
                }
            }
            return DataFactory(
                catalogueClient = f2Client.catalogueClient().invoke(),
                conceptClient = f2Client.conceptClient().invoke(),
                datasetClient = f2Client.datasetClient().invoke(),
                licenseClient = f2Client.licenseClient().invoke()
            )
        }
    }
}

fun createStandardsCatalogue(
    url: String, actor: Actor, debug: String
): List<CatalogueIdentifier> = runBlocking {
    val helper = DataFactory(url, actor.authRealm)
    val dcatGraphClient = helper.dcatGraphClient

    val itemsStandards = flowOf(catalogueStandards(debug))
    dcatGraphClient.create(itemsStandards).toList()
        .onEach { println("Catalogue[$it] Created.") }

}

fun create100MThemes(
    url: String,
    actor: Actor
) = runBlocking {
    val helper = DataFactory(url, actor.authRealm)
    val dcatGraphClient = helper.dcatGraphClient

    val themesCentMillion = listOf(schemeCentMillion)
    dcatGraphClient.createSchemes(themesCentMillion)
}

fun create100MLicenses(
    url: String,
    actor: Actor
) = runBlocking {
    val helper = DataFactory(url, actor.authRealm)
    val dcatGraphClient = helper.dcatGraphClient
    dcatGraphClient.createLicenses(licensesCentMillion)
}

fun create100MCatalogue(
    url: String,
    actor: Actor,
    debug: String
): List<CatalogueIdentifier> = runBlocking {
    val helper = DataFactory(url, actor.authRealm)
    val dcatGraphClient = helper.dcatGraphClient

    val cataloguesCentMillion = flowOf(catalogueCentMillion(debug))
    dcatGraphClient.create(cataloguesCentMillion).toList()
        .onEach { println("Catalogue[${it}] Created.") }
}

fun catalogueMenu(debug: String) = catalogue {
    identifier = "menuWikiCoe${debug}"
    type = "menu"
    structure = Structure("menu")

    translation("fr") {
        title = "Wiki CO2"
        description = ""
    }
    translation("en") {
        title = "Wiki CO2"
        description = ""
    }
    translation("es") {
        title = "Wiki CO2"
        description = ""
    }

    +Secteur(debug)
    +Systeme(debug)
}

fun createMenuCatalogue(
    url: String,
    actor: Actor,
    debug: String
): List<CatalogueIdentifier> = runBlocking {
    val helper = DataFactory(url, actor.authRealm)
    val dcatGraphClient = helper.dcatGraphClient
    val catalogueMenu = flowOf(catalogueMenu(debug))
    dcatGraphClient.create(catalogueMenu).toList()
        .onEach { println("Catalogue[${it}] Created.") }
}
