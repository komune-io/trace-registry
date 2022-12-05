package city.smartb.registry.program.bdd.steps.f2.project.command

import f2.dsl.fnc.invokeWith
import city.smartb.registry.program.bdd.CucumberStepsDefinition
import city.smartb.registry.program.bdd.data.TestContextKey
import city.smartb.registry.program.bdd.data.parser.project.extractProjectTarget
import city.smartb.registry.program.f2.project.api.ProjectEndpoint
import city.smartb.registry.program.f2.project.api.model.toDTO
import city.smartb.registry.program.f2.project.domain.command.ProjectUpdateDetailsCommandDTOBase
import city.smartb.registry.program.s2.project.domain.model.ProjectTarget
import io.cucumber.java8.En
import org.springframework.beans.factory.annotation.Autowired

class ProjectF2UpdateDetailsSteps: En, CucumberStepsDefinition() {

    @Autowired
    private lateinit var projectEndpoint: ProjectEndpoint

    private lateinit var command: ProjectUpdateDetailsCommandDTOBase

    init {
        DataTableType(::projectUpdateDetailsParams)

        When("I update the details of the project via API") {
            step {
                createProject(projectUpdateDetailsParams(null))
            }
        }

        When("I update the details of the project via API:") { params: ProjectUpdateDetailsParams ->
            step {
                createProject(params)
            }
        }

        Given("The details of the project are updated via API") {
            step {
                createProject(projectUpdateDetailsParams(null))
            }
        }

        Given("The details of the project are updated via API:") { params: ProjectUpdateDetailsParams ->
            step {
                createProject(params)
            }
        }
    }

    private suspend fun createProject(params: ProjectUpdateDetailsParams) {
        command = ProjectUpdateDetailsCommandDTOBase(
            id = context.projectIds[params.identifier] ?: params.identifier,
            name = params.name,
            supervisorId = context.userIds[params.supervisor] ?: params.supervisor,
            target = params.target.toDTO(),
            targetRnc = null,
            address = context.addresses.safeGet(params.address)
        )
        command.invokeWith(projectEndpoint.projectUpdateDetails())
    }

    private fun projectUpdateDetailsParams(entry: Map<String, String>?) = ProjectUpdateDetailsParams(
        identifier = entry?.get("identifier") ?: context.projectIds.lastUsedKey,
        supervisor = entry?.get("supervisor") ?: context.userIds.lastUsedKey,
        name = entry?.get("name") ?: "Projekt",
        target = entry?.extractProjectTarget("target") ?: ProjectTarget.STATION_TRAIN_STATION,
        address = entry?.get("address") ?: context.addresses.lastUsedKey
    )

    private data class ProjectUpdateDetailsParams(
        val identifier: TestContextKey,
        val supervisor: TestContextKey,
        val name: String,
        val target: ProjectTarget,
        val address: TestContextKey
    )
}
