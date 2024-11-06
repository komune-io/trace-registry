package io.komune.registry.script.init.catalogue

import cccev.dsl.client.DCatGraphClient
import cccev.dsl.client.RegistryClient
import f2.client.domain.AuthRealm
import f2.client.ktor.F2ClientBuilder
import f2.client.ktor.common.F2ClientConfigLambda
import f2.client.ktor.common.applyConfig
import f2.client.ktor.http.plugin.F2Auth
import io.komune.registry.f2.catalogue.client.CatalogueClient
import io.komune.registry.f2.catalogue.client.catalogueClient
import io.komune.registry.f2.catalogue.domain.command.CatalogueCreateCommandDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueCreatedEventDTOBase
import io.komune.registry.f2.dataset.client.DatasetClient
import io.komune.registry.f2.dataset.client.datasetClient
import io.komune.registry.s2.catalogue.domain.automate.CatalogueId
import io.komune.registry.script.init.actor.Actor
import io.komune.registry.script.init.utils.asyncExecution
import io.ktor.client.plugins.logging.DEFAULT
import io.ktor.client.plugins.logging.LogLevel
import io.ktor.client.plugins.logging.Logger
import io.ktor.client.plugins.logging.Logging
import kotlinx.coroutines.flow.first
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
