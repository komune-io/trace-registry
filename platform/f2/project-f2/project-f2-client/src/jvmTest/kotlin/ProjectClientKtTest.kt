package city.smartb.registry.program.f2.project.client

import city.smartb.registry.program.api.commons.model.GeoLocation
import city.smartb.registry.program.s2.project.domain.command.ProjectCreateCommand
import city.smartb.registry.program.s2.project.domain.model.OrganizationRef
import java.util.UUID
import java.util.concurrent.TimeUnit
import kotlinx.coroutines.async
import kotlinx.coroutines.awaitAll
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.asFlow
import kotlinx.coroutines.flow.buffer
import kotlinx.coroutines.flow.collect
import kotlinx.coroutines.flow.flowOf
import kotlinx.coroutines.flow.map
import kotlinx.coroutines.flow.toList
import kotlinx.coroutines.test.runTest
import net.datafaker.Faker
import org.junit.jupiter.api.Test

class ProjectClientKtTest {
    private val faker = Faker()
//    private val clientBuilder = projectClient("https://api.registry.smartb.network/ver")
    private val clientBuilder = projectClient("http://localhost:8070")
    @Test
    fun projectClient() = runTest {
        val client = clientBuilder.invoke()
        val address =  faker.address()
        (1..10).map {
            ProjectCreateCommand(
                identifier = faker.idNumber().valid(),
                name = faker.mountain().name(),
                country = address.country(),
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
                type = listOf("Solar", "Wind power", "Biogaz", "AFLU").random(),
                referenceYear = faker.date().future(1, TimeUnit.HOURS).toLocalDateTime().year.toString(),
                registrationDate = faker.date().past(1, TimeUnit.HOURS).time,
                vintage = faker.date().future(6, TimeUnit.HOURS).toLocalDateTime().year.toDouble(),
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
                activities = listOf("P1", "P2", "P3", "P4", "P5")
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
}