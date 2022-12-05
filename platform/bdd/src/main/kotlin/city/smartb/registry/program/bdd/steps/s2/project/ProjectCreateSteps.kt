package city.smartb.registry.program.bdd.steps.s2.project

import city.smartb.registry.program.bdd.CucumberStepsDefinition
import city.smartb.registry.program.bdd.assertion.AssertionBdd
import city.smartb.registry.program.bdd.assertion.project
import city.smartb.registry.program.bdd.data.TestContextKey
import city.smartb.registry.program.bdd.data.parser.project.extractProjectTarget
import city.smartb.registry.program.s2.project.api.ProjectAggregateService
import city.smartb.registry.program.s2.project.api.entity.project.ProjectRepository
import city.smartb.registry.program.s2.project.domain.automate.ProjectState
import city.smartb.registry.program.s2.project.domain.command.ProjectCreateCommand
import city.smartb.registry.program.s2.project.domain.model.ProjectTarget
import io.cucumber.java8.En
import org.assertj.core.api.Assertions
import org.springframework.beans.factory.annotation.Autowired

class ProjectCreateSteps: En, CucumberStepsDefinition() {

    @Autowired
    private lateinit var projectAggregateService: ProjectAggregateService

    @Autowired
    private lateinit var projectRepository: ProjectRepository

    private lateinit var command: ProjectCreateCommand

    init {
        DataTableType(::projectCreateParams)
        DataTableType(::projectAssertionParams)

        When("I create a project") {
            step {
                createProject(projectCreateParams(null))
            }
        }

        When("I create a project:") { params: ProjectCreateParams ->
            step {
                createProject(params)
            }
        }

        Given("A project is created") {
            step {
                createProject(projectCreateParams(null))
            }
        }

        Given("A project is created:") { params: ProjectCreateParams ->
            step {
                createProject(params)
            }
        }

        Then("The project should be created") {
            step {
                val projectId = context.projectIds.lastUsed
                AssertionBdd.project(projectRepository).assertThat(projectId).hasFields(
                    status = ProjectState.DRAFT,
                    name = command.name,
                    target = command.target,
                    beneficiaryId = command.beneficiaryId,
                    supervisorId = command.supervisorId,
                    address = command.address
                )
            }
        }

        Then("The project should be created:") { params: ProjectAssertionParams ->
            step {
                val projectId = context.projectIds.safeGet(params.identifier)
                val project = projectRepository.findById(projectId).orElse(null)

                Assertions.assertThat(project).isNotNull
                AssertionBdd.project(projectRepository).assertThat(project!!).hasFields(
                    status = ProjectState.DRAFT,
                    friendlyId = params.friendlyId ?: project.friendlyId,
                    name = params.name ?: project.name,
                    target = params.target ?: project.target,
                    beneficiaryId = params.beneficiary?.let(context.organizationIds::safeGet) ?: project.beneficiaryId,
                    supervisorId = params.supervisor?.let(context.userIds::safeGet) ?: project.supervisorId,
                    address = params.address?.let(context.addresses::safeGet) ?: project.address,
                )
            }
        }
    }

    private suspend fun createProject(params: ProjectCreateParams) = context.projectIds.register(params.identifier) {
        command = ProjectCreateCommand(
            name = params.name,
            beneficiaryId = context.organizationIds.safeGet(params.beneficiary),
            supervisorId = context.userIds.safeGet(params.supervisor),
            target = params.target,
            targetRnc = null,
            address = Address(
                street = params.street,
                postalCode = params.postalCode,
                city = params.city
            ),
            createdBy = context.userIds.safeGet(params.supervisor)
        )
        projectAggregateService.create(command).id
    }

    private fun projectCreateParams(entry: Map<String, String>?) = ProjectCreateParams(
        identifier = entry?.get("identifier").orRandom(),
        beneficiary = entry?.get("beneficiary") ?: context.organizationIds.lastUsedKey,
        supervisor = entry?.get("supervisor") ?: context.userIds.lastUsedKey,
        name = entry?.get("name") ?: "Projekt",
        target = entry?.extractProjectTarget("target") ?: ProjectTarget.STATION_TRAIN_STATION,
        street = entry?.get("street") ?: "123 rue Matysme",
        postalCode = entry?.get("postalCode") ?: "66666",
        city = entry?.get("city") ?: "Velo City",
        createdBy = entry?.get("createdBy") ?: context.userIds.lastUsedKey,
    )

    private data class ProjectCreateParams(
        val identifier: TestContextKey,
        val beneficiary: TestContextKey,
        val supervisor: TestContextKey,
        val name: String,
        val target: ProjectTarget,
        val street: String,
        val postalCode: String,
        val city: String,
        val createdBy: TestContextKey
    )

    private fun projectAssertionParams(entry: Map<String, String>?) = ProjectAssertionParams(
        identifier = entry?.get("identifier") ?: context.projectIds.lastUsedKey,
        friendlyId = entry?.get("friendlyId"),
        beneficiary = entry?.get("beneficiary"),
        supervisor = entry?.get("supervisor"),
        name = entry?.get("name"),
        target = entry?.extractProjectTarget("target"),
        address = entry?.get("address")
    )

    private data class ProjectAssertionParams(
        val identifier: TestContextKey,
        val friendlyId: String?,
        val beneficiary: TestContextKey?,
        val supervisor: TestContextKey?,
        val name: String?,
        val target: ProjectTarget?,
        val address: TestContextKey?
    )
}
