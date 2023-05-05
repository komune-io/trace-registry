package city.smartb.registry.program.cccev

import city.smartb.registry.program.api.commons.model.GeoLocation
import city.smartb.registry.program.f2.activity.client.activityClient
import city.smartb.registry.program.f2.activity.domain.command.ActivityStepFulfillCommandDTOBase
import city.smartb.registry.program.f2.project.client.projectClient
import city.smartb.registry.program.s2.project.domain.command.ProjectCreateCommand
import city.smartb.registry.program.s2.project.domain.command.ProjectCreatedEvent
import city.smartb.registry.program.s2.project.domain.model.OrganizationRef
import f2.dsl.fnc.invokeWith
import kotlinx.coroutines.async
import kotlinx.coroutines.awaitAll
import kotlinx.coroutines.flow.asFlow
import kotlinx.coroutines.flow.buffer
import kotlinx.coroutines.flow.first
import kotlinx.coroutines.flow.flowOf
import kotlinx.coroutines.flow.map
import kotlinx.coroutines.flow.toList
import kotlinx.coroutines.runBlocking
import net.datafaker.Faker
import net.datafaker.providers.base.Address
import java.time.LocalDate
import java.time.LocalTime
import java.time.ZoneOffset
import java.time.chrono.IsoChronology
import java.time.format.DateTimeFormatter
import java.time.format.DecimalStyle
import java.util.concurrent.TimeUnit

class ProjectFakeBuilder(url: String) {
    val faker = Faker()
    val activityClient = activityClient(url)
    val projectClient = projectClient(url)

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

fun main() {
//     val url = "https://api.registry.smartb.network/ver"
    val url = "http://localhost:8070"
    createYahuma(url)
//    createRandom(url, 1..1)
}

fun createYahuma(url: String): Unit = runBlocking {
    val helper = ProjectFakeBuilder(url)
    val projectClient = helper.projectClient.invoke()
    val activityClient = helper.activityClient.invoke()
    val created = projectClient.projectCreate().invoke(flowOf(yahuma())).toList()
    val project = created.first()

    println("////////////////////////////////////")
    println(project.id)
    println(project.certification?.id)
    println("////////////////////////////////////")
    project.certification?.let { certification ->
        val fulfilledEvent = ActivityStepFulfillCommandDTOBase(
            certificationIdentifier = certification.identifier,
            identifier = "B101",
            value = "Yahuma Sud"
        ).invokeWith(activityClient.activityStepFulfill())
        println(fulfilledEvent)
    }
}
fun createRandom(url: String, countRange: IntRange): Unit = runBlocking {
    val helper = ProjectFakeBuilder(url)
    val projectClient = helper.projectClient.invoke()
    val activityClient = helper.activityClient.invoke()
    val faker = helper.faker
    val subContinents = helper.subContinents
    val types = helper.types
    val address =  faker.address()
    val years =  helper.years
    val projects: List<ProjectCreatedEvent> = (countRange).map {
        randomProject(faker, address, subContinents, types, years)
    }.asFlow().buffer(8).map {
        async {
            println("&&&&&&&&&&&&&&"+it.identifier)
            val created = projectClient.projectCreate().invoke(flowOf(it))
            println("$$$$$$$$$$$$$$"+it.identifier)
            created.first()
        }
    }.toList().awaitAll()

    projects.forEach { project ->
        project.certification?.let { certification ->
            val fulfilledEvent = ActivityStepFulfillCommandDTOBase(
                certificationIdentifier = certification.identifier,
                identifier = "B101",
                value = "Yahuma Sud"
            ).invokeWith(activityClient.activityStepFulfill())
            println(fulfilledEvent)
        }
    }
}

private fun randomProject(
    faker: Faker,
    address: Address,
    subContinents: List<String>,
    types: List<String>,
    years: IntRange,
) = ProjectCreateCommand(
    identifier = faker.idNumber().valid(),
    name = faker.mountain().name(),
    country = address.country(),
    indicator = "carbon",
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
    type = (1..25).random(),
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
    vvb = OrganizationRef(
        id = faker.idNumber().valid(),
        name = faker.company().name()
    ),
    activities = listOf("P0", "P1", "P2", "P3", "P4", "P5"),
    sdgs = (1..15).shuffled().take((1..15).random())
)


private fun yahuma(): ProjectCreateCommand {
    val formatter = DateTimeFormatter.ofPattern("dd/MM/yy").withZone(ZoneOffset.UTC).withChronology(IsoChronology.INSTANCE).withDecimalStyle(DecimalStyle.STANDARD)
    val creditingPeriodStartDate = LocalDate.parse("16/12/20", formatter).toEpochSecond(LocalTime.MIN, ZoneOffset.UTC)
    val creditingPeriodEndDate = LocalDate.parse("15/12/50", formatter).toEpochSecond(LocalTime.MIN, ZoneOffset.UTC)
    return ProjectCreateCommand(
        identifier = "yahumasud",
        name = "Yahuma Sud",
        country = "Congo [DRC]",
        indicator = "carbon",
        subContinent = "Africa",
        creditingPeriodStartDate = creditingPeriodStartDate,
        creditingPeriodEndDate = creditingPeriodEndDate,
        description = """
            The Yahuma Sud REDD+ project is located in the DRC, Province of Tshopo on a territory of more than 288,000 hectares. Its main activity is to avoid planned deforestation in the context of a logging concession in favor of improved forest management practices and conservation activities.
            The financing of the project is ensured by the sale of Verified Carbon Units (VCU) by the Verra VCS standard.
            The socio-environmental benefits of forest conservation as well as additional activities of cooperation for the sustainable development of local communities will be labeled by the CCB standard of Verra. The project will consolidate an important territorial link in the integrity of the forests of the Province where existing neighboring projects will also benefit from constituting a natural landscape and larger continuous habitats due to the ecological management of Yahuma Sud.
            These impulses will enable the approximately 75,000 estimated inhabitants of the territory to perpetuate in the long term an open-up anchorage in their forest territory.
            By reducing Emissions from deforestation and forest degradation, it optimizes synergies between the three Earth Summit Conventions.
            Indeed, this project based on the results of carbon sequestration, mitigates climate change, protects the biodiversity of the most diverse continental ecosystem, protects the most fragile soils against degradation, while ensuring income for local communities among the most marginalized on the planet.
            It falls within the context of the REDD+ initiative, like the Emission Reduction Program (ERP) initiated by the Forest Carbon Partnership Facility (FCPF) in the Province of Mai-Ndombe in the DRC.
        """.trimIndent(),
        dueDate = null,
        estimatedReduction = null,
        localization = "",
        proponent = OrganizationRef(
            id = "",
            name = "Certi Congo"
        ),
        type = 1,
        referenceYear = null,
        registrationDate = null,
        vintage = null,
        slug = null,
        assessor = null,
        location = GeoLocation(
            lon = 24.233000,
            lat = 0.783000
        ),
        vvb = null,
        activities = listOf("P0", "P1", "P2", "P3", "P4", "P5"),
        sdgs = emptyList()
    )
}
