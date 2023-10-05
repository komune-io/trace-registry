package city.smartb.registry.script.init.catalogue

import cccev.dsl.client.DCatGraphClient
import city.smartb.registry.f2.catalogue.client.CatalogueClient
import city.smartb.registry.f2.catalogue.client.catalogueClient
import city.smartb.registry.f2.catalogue.domain.command.CatalogueCreateCommandDTOBase
import city.smartb.registry.f2.catalogue.domain.command.CatalogueCreatedEventDTOBase
import city.smartb.registry.s2.catalogue.domain.automate.CatalogueId
import city.smartb.registry.s2.catalogue.domain.model.DcatApCatalogue
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
    val dcatGraphClient = DCatGraphClient(catalogueClient)

}

fun createRandomCatalogue(url: String, accessToken: Actor, countRange: IntRange = 1..2): List<CatalogueId> = runBlocking {
    val helper = CatalogueFactory(url, accessToken.accessToken.access_token)
    val catalogueClient = helper.catalogueClient.invoke()
    val dcatGraphClient = helper.dcatGraphClient
    val faker = helper.faker

    val items = flowOf(catalogue(faker))
    dcatGraphClient.create(items).toList().onEach {
        println("Catalogue[${it.identifier}] Created.")
    }.map { it.identifier }
//
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


private fun randomCatalogue(
    faker: Faker,
): CatalogueCreateCommandDTOBase {
    return CatalogueCreateCommandDTOBase(
        identifier = faker.idNumber().valid(),
        title = faker.artist().name(),
        description = faker.lorem().paragraph(),
        homepage = faker.internet().url(),
        themes = emptyList(),
        type = "Standard",
        img = faker.internet().image(),
    )
}

fun catalogue(faker: Faker) = catalogue {
    identifier = "standards-${UUID.randomUUID()}"
    title = "Standards"
    type = "Standards"
    description = """
        Explore our comprehensive list of recognized standards for environmental project evaluation and certification. 
        Discover diverse opportunities in energy, carbon, water, waste, and more. 
        Choose the standard that aligns with your goals and make a positive environmental impact.
    """.trimIndent()
    services {
        dataService {
            identifier = "standards"
            endpointURL = "https://standardsregistry.verra.org/api/standards"
        }
    }
    catalogues {
        +verraCatalogue
    }
}


val verraCatalogue = catalogue {
        identifier = "verra-${UUID.randomUUID()}"
        homepage = "https://verra.org/"
        title = "Verra"
         type = "Standard"
        description = """
            Verra, formerly known as Verified Carbon Standard (VCS), is a leading global standard 
            for the certification of greenhouse gas emission reduction projects.
            """.trimIndent()
        themes {
            concept {
                id = "ForestryAndLandUse"
                prefLabels = mutableMapOf("en" to "Forestry and Land Use")
                definitions = mutableMapOf("en" to "Forestry and Land Use")
            }
            concept {
                id = "Transport"
                prefLabels = mutableMapOf("en" to "Transport")
                definitions = mutableMapOf("en" to "Transport")
            }
            concept {
                id = "Energy Efficiency"
                prefLabels = mutableMapOf("en" to "Energy Efficiency")
                definitions = mutableMapOf("en" to "Energy Efficiency")
            }
            concept {
                id = "Collection, Recycling"
                prefLabels = mutableMapOf("en" to "Collection, Recycling")
                definitions = mutableMapOf("en" to "Collection, Recycling")
            }
        }
        datasets {
            dataset {
                identifier = "standards"
                title = "standards"
                type = "standard"
                description = """
                """.trimIndent()
            }
            dataset {
                identifier = "programs"
                title = "programs"
                type = "program"
                description = """
                Explore our comprehensive list of recognized standards for environmental project evaluation 
                and certification. Discover diverse opportunities in energy, carbon, water, waste, and more. 
                Choose the standard that aligns with your goals and make a positive environmental impact.
                """.trimIndent()
            }
            dataset {
                identifier = "methodologies"
                title = "methodologies"
                type = "methodology"
            }
            dataset {
                identifier = "documents"
                title = "documents"
                type = "document"
            }
        }
    }

