package city.smartb.registry.program.bdd.steps.s2.project

import city.smartb.registry.program.bdd.CucumberStepsDefinition
import city.smartb.registry.program.bdd.assertion.AssertionBdd
import city.smartb.registry.program.bdd.assertion.project
import city.smartb.registry.program.bdd.data.TestContextKey
import city.smartb.registry.program.s2.project.api.ProjectAggregateService
import city.smartb.registry.program.s2.project.api.entity.project.ProjectRepository
import city.smartb.registry.program.s2.project.domain.automate.ProjectState
import city.smartb.registry.program.s2.project.domain.command.ProjectDeleteCommand
import io.cucumber.datatable.DataTable
import io.cucumber.java8.En
import org.springframework.beans.factory.annotation.Autowired

class ProjectDeleteSteps: En, CucumberStepsDefinition() {

    @Autowired
    private lateinit var projectAggregateService: ProjectAggregateService

    @Autowired
    private lateinit var projectRepository: ProjectRepository

    private lateinit var command: ProjectDeleteCommand

    init {
        DataTableType(::projectDeleteParams)

        When("I delete the project") {
            step {
                deleteProject(projectDeleteParams(null))
            }
        }

        When("I delete the project:") { params: ProjectDeleteParams ->
            step {
                deleteProject(params)
            }
        }

        Given("The project is deleted") {
            step {
                deleteProject(projectDeleteParams(null))
            }
        }

        Given("The project is deleted:") { params: ProjectDeleteParams ->
            step {
                deleteProject(params)
            }
        }

        Given("The projects are deleted:") { dataTable: DataTable ->
            step {
                dataTable.asList(ProjectDeleteParams::class.java)
                    .forEach { deleteProject(it) }
            }
        }

        Then("The project should be deleted") {
            step {
                val projectId = context.projectIds.lastUsed
                AssertionBdd.project(projectRepository).assertThat(projectId).hasFields(
                    status = ProjectState.DELETED,
                )
            }
        }
    }

    private suspend fun deleteProject(params: ProjectDeleteParams) {
        command = ProjectDeleteCommand(
            id = context.projectIds.safeGet(params.identifier),
            deletedBy = context.userIds.safeGet(params.deletedBy)
        )
        projectAggregateService.delete(command)
    }

    private fun projectDeleteParams(entry: Map<String, String>?) = ProjectDeleteParams(
        identifier = entry?.get("identifier") ?: context.projectIds.lastUsedKey,
        deletedBy = entry?.get("deletedBy") ?: context.userIds.lastUsedKey
    )

    private data class ProjectDeleteParams(
        val identifier: TestContextKey,
        val deletedBy: TestContextKey
    )
}
