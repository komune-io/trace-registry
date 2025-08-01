package io.komune.registry.script.init.project

import f2.client.domain.AuthRealm
import f2.dsl.fnc.invokeWith
import io.komune.registry.f2.project.client.ProjectClient
import io.komune.registry.f2.project.client.projectClient
import io.komune.registry.f2.project.domain.command.ProjectCreatedEventDTOBase
import io.komune.registry.s2.asset.domain.automate.AssetPoolId
import io.komune.registry.s2.commons.model.GeoLocation
import io.komune.registry.s2.project.domain.command.ProjectAddAssetPoolCommand
import io.komune.registry.s2.project.domain.command.ProjectCreateCommand
import io.komune.registry.s2.project.domain.model.OrganizationRef
import io.komune.registry.s2.project.domain.model.ProjectId
import io.komune.registry.script.init.actor.Actor
import io.komune.registry.script.init.utils.asyncExecution
import java.util.concurrent.TimeUnit
import kotlinx.coroutines.flow.first
import kotlinx.coroutines.flow.flowOf
import kotlinx.coroutines.runBlocking
import net.datafaker.Faker
import net.datafaker.providers.base.Address

class ProjectFactory(url: String, authRealm: AuthRealm) {
    val faker = Faker()
//    val activityClient = activityClient(url, { authRealm })
    val projectClient = projectClient(url, { authRealm })
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

suspend fun createRandomProject(
    url: String, accessTokenAdmin: Actor, countRange: IntRange = 1..2
): List<ProjectId> {
    val helper = ProjectFactory(url, accessTokenAdmin.authRealm)
    val projectClient = helper.projectClient.invoke()
//    val activityClient = helper.activityClient.invoke()
    val faker = helper.faker
    val subContinents = helper.subContinents
    val address =  faker.address()
    val years =  helper.years
    return (countRange).map { count ->
        randomProject(faker, address, subContinents, years, count)
    }
        .createProjects(projectClient)
//        .fullfillActivities(activityClient)
        .map { it.id }
}

//private suspend fun List<ProjectCreatedEventDTOBase>.fullfillActivities(
//    activityClient: ActivityClient
//): List<ProjectCreatedEventDTOBase> =
//    asyncExecution { project ->
//        project.certificationId?.let { certificationId ->
//            ActivityStepFulfillCommandDTOBase(
//                certificationId = certificationId,
//                identifier = "B101",
//                value = "Yahuma Sud"
//            ).invokeWith(activityClient.activityStepFulfill())
//        }
//        project
//    }

private suspend fun List<ProjectCreateCommand>.createProjects(
    projectClient: ProjectClient
): List<ProjectCreatedEventDTOBase> =
    asyncExecution(size = 8) { projectCreateCommand ->
        println("Project Creation[${projectCreateCommand.identifier}]: ${projectCreateCommand}...")
        val created = projectClient.projectCreate().invoke(flowOf(projectCreateCommand))
        println("Project[${projectCreateCommand.identifier}] Created.")
        created.first()
    }

fun addAssetPoolToProject(
    url: String, accessToken: Actor, projectId: ProjectId, assetPoolId: AssetPoolId
): Unit = runBlocking {
    val helper = ProjectFactory(url, accessToken.authRealm)
    val projectClient = helper.projectClient.invoke()
    projectClient.projectAddAssetPool().invoke(flowOf(
        ProjectAddAssetPoolCommand(id = projectId, poolId = assetPoolId)
    ))
}

private fun randomProject(
    faker: Faker,
    address: Address,
    subContinents: List<String>,
    years: IntRange,
    count: Int,
): ProjectCreateCommand {
    val type = (count % 25) + 1
    return ProjectCreateCommand(
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
        type = type,
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
        sdgs = (1..15).shuffled().take((1..15).random()),
        isPrivate = false
    )
}
