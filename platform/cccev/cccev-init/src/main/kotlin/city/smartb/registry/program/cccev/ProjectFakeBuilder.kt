package city.smartb.registry.program.cccev

import city.smartb.registry.program.api.commons.model.GeoLocation
import city.smartb.registry.program.f2.project.client.projectClient
import city.smartb.registry.program.s2.project.domain.command.ProjectCreateCommand
import city.smartb.registry.program.s2.project.domain.model.OrganizationRef
import java.util.concurrent.TimeUnit
import kotlinx.coroutines.async
import kotlinx.coroutines.awaitAll
import kotlinx.coroutines.flow.asFlow
import kotlinx.coroutines.flow.buffer
import kotlinx.coroutines.flow.flowOf
import kotlinx.coroutines.flow.map
import kotlinx.coroutines.flow.toList
import kotlinx.coroutines.runBlocking
import net.datafaker.Faker

class ProjectFakeBuilder {
    val faker = Faker()
//    val clientBuilder = projectClient("https://api.registry.smartb.network/ver")
    val clientBuilder = projectClient("http://localhost:8070")

    val years = (1980..2022)
    val types = listOf("Solar", "Wind power", "Biogaz", "AFLU")
    val subContinents = listOf("South Asia",
        "Southeast Asia",
        "East Asia",
        "Central Asia",
        "West Asia/Middle East",
        "Europe",
        "North America",
        "Central America",
        "South America",
        "Africa",
        "Oceania"
    )


}

fun main(): Unit = runBlocking {
    val helper = ProjectFakeBuilder()
    val clientBuilder = helper.clientBuilder
    val faker = helper.faker
    val subContinents = helper.subContinents
    val types = helper.types
    val client = clientBuilder.invoke()
    val address =  faker.address()
    val years =  helper.years
    (1..50).map {
        ProjectCreateCommand(
            identifier = faker.idNumber().valid(),
            name = faker.mountain().name(),
            country = address.country(),
            subContinent = subContinents.random(),
            creditingPeriodStartDate = faker.date().past(3, TimeUnit.HOURS).time,
            creditingPeriodEndDate = faker.date().future(3, TimeUnit.HOURS).time,
            description = "Description of the project ${faker.mountain().name()}",
            dueDate = faker.date().future(6, TimeUnit.HOURS).time,
            estimatedReduction = faker.number().positive().toString(),
            localization = address.city(),
            proponent = OrganizationRef(
                id = faker.idNumber().valid(),
                name = faker.company().name()
            ),
            type = types.random(),
            referenceYear = years.random().toString(),
            registrationDate = faker.date().past(1, TimeUnit.HOURS).time,
            vintage = years.random().let { listOf(it, it + 1) }.joinToString(", "),
            slug = "slug",
            assessor = OrganizationRef(
                id = faker.idNumber().valid(),
                name = faker.company().name()
            ),
            location = GeoLocation(
                lon = address.longitude().toDouble(),
                lat = address.latitude().toDouble()
            ),
            vvb =  OrganizationRef(
                id = faker.idNumber().valid(),
                name = faker.company().name()
            ),
            activities = listOf("P0", "P1", "P2", "P3", "P4", "P5"),
            sdgs = (1..15).shuffled().take((1..15).random())
        )
    }
//            .asFlow().map {
//            client.projectCreate().invoke(flowOf(it))
//        }.collect()
        .asFlow().buffer(8).map {
            async {
                println("&&&&&&&&&&&&&&"+it.identifier)
                client.projectCreate().invoke(flowOf(it))
                println("$$$$$$$$$$$$$$"+it.identifier)
            }

        }.toList().awaitAll()

}
