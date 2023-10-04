package city.smartb.registry.script.init.catalogue

import city.smartb.registry.f2.catalogue.client.CatalogueClient
import city.smartb.registry.f2.catalogue.client.catalogueClient
import city.smartb.registry.f2.catalogue.domain.command.CatalogueCreateCommandDTOBase
import city.smartb.registry.f2.catalogue.domain.command.CatalogueCreatedEventDTOBase
import city.smartb.registry.s2.catalogue.domain.automate.CatalogueId
import city.smartb.registry.script.init.actor.Actor
import city.smartb.registry.script.init.utils.asyncExecution
import kotlinx.coroutines.flow.first
import kotlinx.coroutines.flow.flowOf
import kotlinx.coroutines.runBlocking
import net.datafaker.Faker

class CatalogueFactory(url: String, accessToken: String) {
    val faker = Faker()
    val catalogueClient = catalogueClient(url, accessToken)

}

fun createRandomCatalogue(url: String, accessToken: Actor, countRange: IntRange = 1..2): List<CatalogueId> = runBlocking {
    val helper = CatalogueFactory(url, accessToken.accessToken.access_token)
    val catalogueClient = helper.catalogueClient.invoke()
    val faker = helper.faker
    (countRange).map { count ->
        randomCatalogue(faker)
    }
        .createCatalogues(catalogueClient)
        .map { it.id }
}

private suspend fun List<CatalogueCreateCommandDTOBase>.createCatalogues(catalogueClient: CatalogueClient): List<CatalogueCreatedEventDTOBase> =
    asyncExecution(8) { catalogueCreateCommand ->
        println("Catalogue Creation[${catalogueCreateCommand.identifier}]: ${catalogueCreateCommand}...")
        val created = catalogueClient.catalogueCreate().invoke(flowOf(catalogueCreateCommand))
        println("Catalogue[${catalogueCreateCommand.identifier}] Created.")
        created.first()
    }


private fun randomCatalogue(
    faker: Faker,
): CatalogueCreateCommandDTOBase {
    return CatalogueCreateCommandDTOBase(
        identifier = faker.idNumber().valid(),
        title = faker.artist().name(),
        description = faker.lorem().paragraph(),
        catalogues = emptyList(),
        homepage = faker.internet().url(),
        themes = emptyList(),
        type = "Project",
        img = faker.internet().image(),
    )
}
