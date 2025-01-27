package io.komune.registry.script.init.catalogue

import cccev.dsl.client.CatalogueKey
import cccev.dsl.client.DCatGraphClient
import f2.client.domain.AuthRealm
import f2.client.ktor.F2ClientBuilder
import f2.client.ktor.http.plugin.F2Auth
import io.komune.registry.dsl.dcat.domain.model.catalogueI18n
import io.komune.registry.f2.catalogue.client.CatalogueClient
import io.komune.registry.f2.catalogue.client.catalogueClient
import io.komune.registry.f2.dataset.client.DatasetClient
import io.komune.registry.f2.dataset.client.datasetClient
import io.komune.registry.s2.structure.domain.model.Structure
import io.komune.registry.script.init.actor.Actor
import kotlinx.coroutines.flow.asFlow
import kotlinx.coroutines.flow.flowOf
import kotlinx.coroutines.flow.toList
import kotlinx.coroutines.runBlocking
import net.datafaker.Faker

class CatalogueFactory(
    val catalogueClient: CatalogueClient,
    val datasetClient: DatasetClient,
    val dcatGraphClient:  DCatGraphClient = DCatGraphClient(catalogueClient, datasetClient)
) {
    val faker = Faker()

    companion object {
        suspend operator fun invoke(
            url: String,
            authRealm: AuthRealm,
        ): CatalogueFactory {
            val f2Client = F2ClientBuilder.get(url) {
                install(F2Auth) {
                    this.getAuth = { authRealm }
                }
            }
            val catalogueClient = f2Client.catalogueClient().invoke()
            val datasetClient = f2Client.datasetClient().invoke()
            return CatalogueFactory(
                catalogueClient = catalogueClient,
                datasetClient = datasetClient
            )
        }
    }
}

fun createStandardsCatalogue(
    url: String, actor: Actor, debug: String
): List<CatalogueKey> = runBlocking {
    val helper = CatalogueFactory(url, actor.authRealm)
    val dcatGraphClient = helper.dcatGraphClient

    val itemsStandards = flowOf(catalogueStandards(debug))
    dcatGraphClient.create(itemsStandards).toList()
        .onEach { println("Catalogue[$it] Created.") }

}

fun create100MCatalogue(
    url: String,
    actor: Actor,
    debug: String
): List<CatalogueKey> = runBlocking {
    val helper = CatalogueFactory(url, actor.authRealm)
    val dcatGraphClient = helper.dcatGraphClient

    val itemsCentMillion = catalogueCentMillion(debug).values.asFlow()
    dcatGraphClient.create(itemsCentMillion).toList()
        .onEach { println("Catalogue[${it}] Created.") }
}

fun catalogueMenu(debug: String) = catalogueI18n {
    identifier = "menuWikiCoe${debug}"
    type = "menu"
    structure = Structure("menu")

    language("fr") {
        title = "Wiki CO2"
        description = ""
    }
    language("en") {
        title = "Wiki CO2"
        description = ""
    }
    language("es") {
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
): List<CatalogueKey> = runBlocking {
    val helper = CatalogueFactory(url, actor.authRealm)
    val dcatGraphClient = helper.dcatGraphClient
    val catalogueMenu = catalogueMenu(debug).values.asFlow()
    dcatGraphClient.create(catalogueMenu).toList()
        .onEach { println("Catalogue[${it}] Created.") }
}

//fun createRandomCatalogue(
//    url: String, actor: Actor, countRange: IntRange = 1..2
//): List<CatalogueId> = runBlocking {
//    val helper = CatalogueFactory(url, actor.authRealm)
//    val dcatGraphClient = helper.dcatGraphClient
//
//    (countRange).map { count ->
//        randomCatalogue(faker)
//    }
//        .createCatalogues(catalogueClient)
//        .map { it.id }
//}
//
//private suspend fun List<CatalogueCreateCommandDTOBase>.createCatalogues(
//    catalogueClient: CatalogueClient
//): List<Unit> =
//    asyncExecution(size = 8) { catalogueCreateCommand ->
//        println("Catalogue Creation[${catalogueCreateCommand.identifier}]: ${catalogueCreateCommand}...")
//        val created = catalogueClient.catalogueCreate().invoke(flowOf(catalogueCreateCommand))
//        println("Catalogue[${catalogueCreateCommand.identifier}] Created.")
//        created.first()
//    }
