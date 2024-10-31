package io.komune.registry.script.init.catalogue

import cccev.dsl.client.DCatGraphClient
import f2.client.domain.AuthRealm
import io.komune.registry.f2.catalogue.client.CatalogueClient
import io.komune.registry.f2.catalogue.client.catalogueClient
import io.komune.registry.f2.catalogue.domain.command.CatalogueCreateCommandDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueCreatedEventDTOBase
import io.komune.registry.f2.dataset.client.datasetClient
import io.komune.registry.s2.catalogue.domain.automate.CatalogueId
import io.komune.registry.script.init.actor.Actor
import io.komune.registry.script.init.utils.asyncExecution
import kotlinx.coroutines.flow.first
import kotlinx.coroutines.flow.flowOf
import kotlinx.coroutines.flow.toList
import kotlinx.coroutines.runBlocking
import net.datafaker.Faker

class CatalogueFactory(
    private val url: String,
    private val authRealm: AuthRealm
) {
    val faker = Faker()
    val catalogueClient = catalogueClient(url, { authRealm })
    val datasetsClient = datasetClient(url, { authRealm })
    val dcatGraphClient = DCatGraphClient(catalogueClient, datasetsClient)
}

fun createRandomCatalogue(
    url: String, actor: Actor, countRange: IntRange = 1..2
): List<CatalogueId> = runBlocking {
    val helper = CatalogueFactory(url, actor.authRealm)
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

//private suspend fun List<CatalogueCreateCommandDTOBase>.createCatalogues(
//    catalogueClient: CatalogueClient
//): List<CatalogueCreatedEventDTOBase> =
//    asyncExecution(size = 8) { catalogueCreateCommand ->
//        println("Catalogue Creation[${catalogueCreateCommand.identifier}]: ${catalogueCreateCommand}...")
//        val created = catalogueClient.catalogueCreate().invoke(flowOf(catalogueCreateCommand))
//        println("Catalogue[${catalogueCreateCommand.identifier}] Created.")
//        created.first()
//    }
