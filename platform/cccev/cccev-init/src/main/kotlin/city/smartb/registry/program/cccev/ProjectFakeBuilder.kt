package city.smartb.registry.program.cccev

import city.smartb.registry.program.api.commons.model.GeoLocation
import city.smartb.registry.program.f2.activity.client.ActivityClient
import city.smartb.registry.program.f2.activity.client.activityClient
import city.smartb.registry.program.f2.activity.domain.command.ActivityStepFulfillCommandDTOBase
import city.smartb.registry.program.f2.asset.client.AssetClient
import city.smartb.registry.program.f2.asset.client.assetClient
import city.smartb.registry.program.f2.asset.domain.command.AssetIssueCommandDTOBase
import city.smartb.registry.program.f2.asset.domain.command.AssetOffsetCommandDTOBase
import city.smartb.registry.program.f2.asset.domain.command.AssetTransferCommandDTOBase
import city.smartb.registry.program.f2.pool.client.AssetPoolClient
import city.smartb.registry.program.f2.pool.client.assetPoolClient
import city.smartb.registry.program.f2.pool.domain.command.AssetPoolCreateCommandDTOBase
import city.smartb.registry.program.f2.project.client.ProjectClient
import city.smartb.registry.program.f2.project.client.projectClient
import city.smartb.registry.program.f2.project.domain.query.ProjectGetQuery
import city.smartb.registry.program.f2.project.domain.query.ProjectPageQuery
import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolId
import city.smartb.registry.program.s2.project.domain.command.ProjectCreateCommand
import city.smartb.registry.program.s2.project.domain.command.ProjectCreatedEvent
import city.smartb.registry.program.s2.project.domain.model.OrganizationRef
import city.smartb.registry.program.s2.project.domain.model.ProjectId
import city.smartb.registry.program.s2.project.domain.model.ProjectIdentifier
import com.ionspin.kotlin.bignum.decimal.toBigDecimal
import f2.dsl.fnc.invokeWith
import java.time.LocalDate
import java.time.LocalTime
import java.time.ZoneOffset
import java.time.chrono.IsoChronology
import java.time.format.DateTimeFormatter
import java.time.format.DecimalStyle
import java.util.concurrent.TimeUnit
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

class ProjectFakeBuilder(url: String, accessToken: String) {
    val faker = Faker()
    val activityClient = activityClient(url)
    val projectClient = projectClient(url, accessToken)
    val assetPoolClient = assetPoolClient(url, accessToken)
    val assetClient = assetClient(url, accessToken)

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

fun createYahuma(url: String, accessToken: String): Unit = runBlocking {
    val helper = ProjectFakeBuilder(url, accessToken)
    val projectClient = helper.projectClient.invoke()
    val activityClient = helper.activityClient.invoke()
    val created = projectClient.projectCreate().invoke(flowOf(yahuma())).toList()
    val project = created.first()

    fullFillProject(project.id, projectClient, activityClient)
}
fun createBrazilRockFeller(
    url: String,
    accessToken: String,
    accessTokenRockfeller: String,
    accessTokenOffseter: String
): Unit = runBlocking {

    val helper = ProjectFakeBuilder(url, accessToken)
    val helperRockfeller = ProjectFakeBuilder(url, accessTokenRockfeller)
    val helperOffseter = ProjectFakeBuilder(url, accessTokenOffseter)

    val projectClient = helper.projectClient.invoke()
    val activityClient = helper.activityClient.invoke()
    val assetPoolClient = helperRockfeller.assetPoolClient.invoke()
    val assetClientRockfeller = helperRockfeller.assetClient.invoke()
    val assetClientOffseter = helperOffseter.assetClient.invoke()

    val created = projectClient.projectCreate().invoke(flowOf(brazilRockFeller())).toList()
    val project = created.first()

    fullFillProject(project.id, projectClient, activityClient)

    createAssetPool(project.id, assetPoolClient, assetClientRockfeller, assetClientOffseter)
}
private fun createAssetPool(
    projectId: ProjectId,
    assetPoolClient: AssetPoolClient,
    assetClientRockfeller: AssetClient,
    assetClientOffseter: AssetClient
): Unit = runBlocking {
    val assetPoolId = assetPoolCreateCommand(projectId).invokeWith(assetPoolClient.assetPoolCreate()).id
    val assetIssue = assetIssueCommand(assetPoolId).invokeWith(assetClientRockfeller.assetIssue())
    val assetTransfer = assetTransferCommand(assetPoolId).invokeWith(assetClientRockfeller.assetTransfer())
    val assetOffset1 = assetOffset1Command(assetPoolId).invokeWith(assetClientOffseter.assetOffset())
//    val assetOffset2 = assetOffset2Command(assetPoolId).invokeWith(assetClientOffseter.assetOffset())
//    val assetOffset3 = assetOffset3Command(assetPoolId).invokeWith(assetClientOffseter.assetOffset()) //ShouldNotWork
}

private suspend fun fullFillProject(
    projectId: ProjectIdentifier,
    projectClient: ProjectClient,
    activityClient: ActivityClient,
) {
    val project = ProjectGetQuery(projectId).invokeWith(projectClient.projectGet()).item!!

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

fun createRandomProject(url: String, accessToken: String, countRange: IntRange = 1..10): Unit = runBlocking {
    val helper = ProjectFakeBuilder(url, accessToken)
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
        lon = -15.793889,
        lat = -47.882778
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

private fun brazilRockFeller(): ProjectCreateCommand {
    val formatter = DateTimeFormatter.ofPattern("dd/MM/yy").withZone(ZoneOffset.UTC).withChronology(IsoChronology.INSTANCE).withDecimalStyle(DecimalStyle.STANDARD)
    val creditingPeriodStartDate = LocalDate.parse("23/05/12", formatter).toEpochSecond(LocalTime.MIN, ZoneOffset.UTC)
    val creditingPeriodEndDate = LocalDate.parse("31/12/31", formatter).toEpochSecond(LocalTime.MIN, ZoneOffset.UTC)
    val registrationDate = LocalDate.parse("16/07/17", formatter).toEpochSecond(LocalTime.MIN, ZoneOffset.UTC)
    return ProjectCreateCommand(
        identifier = "3424-0001",
        name = "Projecto d'Cerrado a'Amazonia REDD Brasil",
        country = "Brazil",
        indicator = "carbon",
        subContinent = "South America",
        creditingPeriodStartDate = creditingPeriodStartDate,
        creditingPeriodEndDate = creditingPeriodEndDate,
        description = """
            REDD APD Project - GHG Emission Reductions From Avoiding Planned Deforestation
        """.trimIndent(),
        dueDate = creditingPeriodEndDate,
        estimatedReduction = "1161.17",
        localization = null,
        proponent = OrganizationRef(
            id = "",
            name = "MediaGEO Group Ltg."
        ),
        type = 1,
        referenceYear = "2013",
        registrationDate = registrationDate,
        vintage = null,
        slug = null,
        assessor = null,
        location = GeoLocation(
            lon = -47.882778,
            lat = -15.793889
        ),
        vvb = OrganizationRef(
            id = "",
            name = "InBECAS"
        ),
        activities = listOf(),
        sdgs = emptyList()
    )
}

private fun projectPageQuery(): ProjectPageQuery {
    println("projectPageQuery")
    return ProjectPageQuery(
        limit = null,
        offset = null,
        identifier = null,
        name = null,
        proponent = null,
        type = null,
        estimatedReductions = null,
        referenceYear = null,
        dueDate = null,
        status = null,
        vintage = null,
        origin = null
    )
}
private fun assetPoolCreateCommand(projectId: ProjectId): AssetPoolCreateCommandDTOBase {
    println("assetPoolCommand, projectId: $projectId")
    return AssetPoolCreateCommandDTOBase(
        vintage = "2013",
        indicator = "carbon",
        granularity = 0.001
    )
}

private fun assetIssueCommand(assetPoolId: AssetPoolId): AssetIssueCommandDTOBase {
    println("assetIssueCommand, assetPoolId: $assetPoolId")
    return AssetIssueCommandDTOBase(
        poolId = assetPoolId,
        to = "Rockfeller",
        quantity = 10000.toBigDecimal()
    )
}

private fun assetTransferCommand(assetPoolId: AssetPoolId): AssetTransferCommandDTOBase {
    println("assetTransferCommand, assetPoolId: $assetPoolId")
    return AssetTransferCommandDTOBase(
        poolId = assetPoolId,
        from = "Rockfeller",
        to = "Phease",
        quantity = 10000.toBigDecimal()
    )
}

private fun assetOffset1Command(assetPoolId: AssetPoolId): AssetOffsetCommandDTOBase {
    println("assetOffset1Command, assetPoolId: $assetPoolId")
    return AssetOffsetCommandDTOBase(
        poolId = assetPoolId,
        from = "Phease",
        to = "Phease",
        quantity = 0.001.toBigDecimal() //TODO "Value cannot be narrowed to float"
    )
}
private fun assetOffset2Command(assetPoolId: AssetPoolId): AssetOffsetCommandDTOBase {
    println("assetOffset2Command, assetPoolId: $assetPoolId")
    return AssetOffsetCommandDTOBase(
        poolId = assetPoolId,
        from = "Phease",
        to = "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
        quantity = 42.141f.toBigDecimal()
    )
}
private fun assetOffset3Command(assetPoolId: AssetPoolId): AssetOffsetCommandDTOBase {
    println("assetOffset3Command, assetPoolId: $assetPoolId")
    return AssetOffsetCommandDTOBase(
        poolId = assetPoolId,
        from = "ShouldNotWork",
        to = "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
        quantity = 42.141f.toBigDecimal()
    )
}
