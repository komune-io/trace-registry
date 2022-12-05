package city.smartb.registry.program.bdd.steps.s2.project

import city.smartb.im.commons.model.Address
import city.smartb.registry.program.bdd.CucumberStepsDefinition
import city.smartb.registry.program.bdd.assertion.AssertionBdd
import city.smartb.registry.program.bdd.assertion.project
import city.smartb.registry.program.bdd.data.TestContextKey
import city.smartb.registry.program.s2.project.api.ProjectAggregateService
import city.smartb.registry.program.s2.project.api.entity.project.ProjectRepository
import city.smartb.registry.program.s2.project.domain.automate.ProjectState
import city.smartb.registry.program.s2.project.domain.command.ProjectUpdateDetailsCommand
import io.cucumber.java8.En
import org.springframework.beans.factory.annotation.Autowired

class ProjectUpdateDetailsSteps: En, CucumberStepsDefinition() {

    @Autowired
    private lateinit var projectAggregateService: ProjectAggregateService

    @Autowired
    private lateinit var projectRepository: ProjectRepository

    private lateinit var command: ProjectUpdateDetailsCommand

    init {
        DataTableType(::projectUpdateDetailsParams)

        When("I update the details of the project") {
            step {
                updateProjectDetails(projectUpdateDetailsParams(null))
            }
        }

        When("I update the details of the project:") { params: ProjectUpdateDetailsParams ->
            step {
                updateProjectDetails(params)
            }
        }

        Then("The details of the project should be updated") {
            step {
                val projectId = context.projectIds.lastUsed
                AssertionBdd.project(projectRepository).assertThat(projectId).hasFields(
                    status = ProjectState.DRAFT,
                    name = command.name,
                    supervisorId = command.supervisorId,
                )
            }
        }
    }

    private suspend fun updateProjectDetails(params: ProjectUpdateDetailsParams) {
        command = ProjectUpdateDetailsCommand(
            id = context.projectIds.safeGet(params.identifier),
            name = params.name,
            targetRnc = null,
            address = Address(
                street = params.street,
                postalCode = params.postalCode,
                city = params.city
            ),
            supervisorId = context.userIds[params.supervisor] ?: params.supervisor
        )
        projectAggregateService.updateDetails(command)
    }

    private fun projectUpdateDetailsParams(entry: Map<String, String>?) = ProjectUpdateDetailsParams(
        identifier = entry?.get("identifier") ?: context.projectIds.lastUsedKey,
        name = entry?.get("name") ?: "Projekt (updated)",
        supervisor = entry?.get("supervisor") ?: context.userIds.lastUsedKey,
        street = entry?.get("street") ?: "123 rue Matysme (updated)",
        postalCode = entry?.get("postalCode") ?: "66666 (updated)",
        city = entry?.get("city") ?: "Velo City (updated)",
    )

    private data class ProjectUpdateDetailsParams(
        val identifier: TestContextKey,
        val name: String,
        val supervisor: TestContextKey,
        val street: String,
        val postalCode: String,
        val city: String
    )
}
