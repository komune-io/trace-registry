package city.smartb.registry.program.bdd.steps.f2.project.command

import f2.dsl.fnc.invokeWith
import city.smartb.registry.program.bdd.CucumberStepsDefinition
import city.smartb.registry.program.bdd.data.TestContextKey
import city.smartb.registry.program.bdd.data.parser.project.extractProjectTarget
import city.smartb.registry.program.f2.project.api.ProjectEndpoint
import city.smartb.registry.program.f2.project.api.model.toDTO
import city.smartb.registry.program.f2.project.domain.command.ProjectCreateCommandDTOBase
import city.smartb.registry.program.s2.project.domain.model.ProjectTarget
import io.cucumber.java8.En
import org.springframework.beans.factory.annotation.Autowired

class ProjectF2CreateSteps: En, CucumberStepsDefinition() {

    @Autowired
    private lateinit var projectEndpoint: ProjectEndpoint

    private lateinit var command: ProjectCreateCommandDTOBase

    init {
        DataTableType(::projectCreateParams)

        When("I create a project via API") {
            step {
                createProject(projectCreateParams(null))
            }
        }

        When("I create a project via API:") { params: ProjectCreateParams ->
            step {
                createProject(params)
            }
        }

        Given("A project is created via API") {
            step {
                createProject(projectCreateParams(null))
            }
        }

        Given("A project is created via API:") { params: ProjectCreateParams ->
            step {
                createProject(params)
            }
        }
    }

    private suspend fun createProject(params: ProjectCreateParams) = context.projectIds.register(params.identifier) {
        command = ProjectCreateCommandDTOBase(
            name = params.name,
            supervisorId = context.userIds.safeGet(params.supervisor),
            target = params.target.toDTO(),
            targetRnc = null,
            address = context.addresses.safeGet(params.address)
        )
        command.invokeWith(projectEndpoint.projectCreate()).id
    }

    private fun projectCreateParams(entry: Map<String, String>?) = ProjectCreateParams(
        identifier = entry?.get("identifier").orRandom(),
        supervisor = entry?.get("supervisor") ?: context.userIds.lastUsedKey,
        name = entry?.get("name") ?: "Projekt",
        target = entry?.extractProjectTarget("target") ?: ProjectTarget.STATION_TRAIN_STATION,
        address = entry?.get("address") ?: context.addresses.lastUsedKey
    )

    private data class ProjectCreateParams(
        val identifier: TestContextKey,
        val supervisor: TestContextKey,
        val name: String,
        val target: ProjectTarget,
        val address: TestContextKey
    )
}
