package city.smartb.registry.script.init.catalogue

import cccev.dsl.client.DCatGraphClient
import city.smartb.registry.f2.catalogue.client.CatalogueClient
import city.smartb.registry.f2.catalogue.client.catalogueClient
import city.smartb.registry.f2.catalogue.domain.command.CatalogueCreateCommandDTOBase
import city.smartb.registry.f2.catalogue.domain.command.CatalogueCreatedEventDTOBase
import city.smartb.registry.f2.dataset.client.datasetClient
import city.smartb.registry.s2.catalogue.domain.automate.CatalogueId
import city.smartb.registry.s2.catalogue.domain.model.catalogue
import city.smartb.registry.s2.catalogue.domain.model.concept
import city.smartb.registry.s2.catalogue.domain.model.dataService
import city.smartb.registry.script.init.actor.Actor
import city.smartb.registry.script.init.utils.asyncExecution
import java.util.UUID
import kotlinx.coroutines.flow.first
import kotlinx.coroutines.flow.flowOf
import kotlinx.coroutines.flow.toList
import kotlinx.coroutines.runBlocking
import net.datafaker.Faker

class CatalogueFactory(
    private val url: String,
    private val accessToken: String
) {
    val faker = Faker()
    val catalogueClient = catalogueClient(url, accessToken)
    val datasetsClient = datasetClient(url, accessToken)
    val dcatGraphClient = DCatGraphClient(catalogueClient, datasetsClient)
}

fun createRandomCatalogue(url: String, accessToken: Actor, countRange: IntRange = 1..2): List<CatalogueId> = runBlocking {
    val helper = CatalogueFactory(url, accessToken.accessToken.access_token)
    val dcatGraphClient = helper.dcatGraphClient

    val items = flowOf(catalogueStandards(""))
//    val items = flowOf(catalogueStandards("-${UUID.randomUUID()}"))
    dcatGraphClient.create(items).toList().onEach {
        println("Catalogue[${it.identifier}] Created.")
    }.map { it.identifier }

//    (countRange).map { count ->
//        randomCatalogue(faker)
//    }
//        .createCatalogues(catalogueClient)
//        .map { it.id }
}

private suspend fun List<CatalogueCreateCommandDTOBase>.createCatalogues(catalogueClient: CatalogueClient): List<CatalogueCreatedEventDTOBase> =
    asyncExecution(8) { catalogueCreateCommand ->
        println("Catalogue Creation[${catalogueCreateCommand.identifier}]: ${catalogueCreateCommand}...")
        val created = catalogueClient.catalogueCreate().invoke(flowOf(catalogueCreateCommand))
        println("Catalogue[${catalogueCreateCommand.identifier}] Created.")
        created.first()
    }
