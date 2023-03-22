package city.smartb.registry.program.f2.project.client

import city.smartb.registry.program.s2.project.domain.automate.ProjectState
import city.smartb.registry.program.s2.project.domain.command.ProjectCreateCommand
import city.smartb.registry.program.s2.project.domain.command.ProjectCreatedEvent
import city.smartb.registry.program.s2.project.domain.model.OrganizationRef
import city.smartb.registry.program.s2.project.domain.model.Project
import java.util.UUID
import java.util.concurrent.TimeUnit
import kotlinx.coroutines.flow.asFlow
import kotlinx.coroutines.flow.collect
import kotlinx.coroutines.flow.flowOf
import kotlinx.coroutines.test.runTest
import net.datafaker.Faker
import org.junit.jupiter.api.Test

class ProjectClientKtTest {
    private val faker = Faker()
    private val clientBuilder = projectClient("https://api.registry.smartb.network/ver")
    @Test
    fun projectClient() = runTest {
        val country = faker.country()
        val client = clientBuilder.invoke()
        (1..10).map {
            ProjectCreateCommand(
                identifier = UUID.randomUUID().toString(),
                name = faker.mountain().name(),
                country = country.name(),
                creditingPeriodStartDate = faker.date().past(3, TimeUnit.HOURS).time,
                creditingPeriodEndDate = faker.date().future(3, TimeUnit.HOURS).time,
                description = "Description of the project ${faker.mountain().name()}",
                dueDate = faker.date().future(6, TimeUnit.HOURS).time,
                estimatedReduction = faker.number().positive().toString(),
                localization = country.capital(),
                proponentAccount = OrganizationRef(
                    id = faker.idNumber().valid(),
                    name = faker.company().name()
                ),
                proponent = "Description about the proponent",
                type = "Type of the project",
                referenceYear = faker.date().future(1, TimeUnit.HOURS).toLocalDateTime().year.toString(),
                registrationDate = faker.date().past(1, TimeUnit.HOURS).time,
                vintage = faker.date().future(6, TimeUnit.HOURS).toLocalDateTime().year.toDouble(),
                slug = "slug",
            )
        }.map {
            client.projectCreate().invoke(flowOf(it)) }
//        }.asFlow().let {
//            client.projectCreate().invoke(it)
//        }.collect()

    }
}