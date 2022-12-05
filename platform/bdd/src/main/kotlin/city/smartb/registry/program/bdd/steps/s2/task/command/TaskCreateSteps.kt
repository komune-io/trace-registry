package city.smartb.registry.program.bdd.steps.s2.task.command

import city.smartb.registry.program.bdd.CucumberStepsDefinition
import city.smartb.registry.program.bdd.assertion.AssertionBdd
import city.smartb.registry.program.bdd.assertion.task
import city.smartb.registry.program.bdd.data.TestContextKey
import city.smartb.registry.program.bdd.data.parser.task.extractTaskType
import city.smartb.registry.program.bdd.data.parser.task.safeExtractTaskType
import city.smartb.registry.program.s2.task.api.TaskAggregateService
import city.smartb.registry.program.s2.task.api.entity.TaskRepository
import city.smartb.registry.program.s2.task.domain.automate.TaskState
import city.smartb.registry.program.s2.task.domain.command.TaskCreateCommand
import city.smartb.registry.program.s2.task.domain.model.TaskType
import io.cucumber.datatable.DataTable
import io.cucumber.java8.En
import kotlin.jvm.optionals.getOrNull
import org.assertj.core.api.Assertions
import org.springframework.beans.factory.annotation.Autowired

class TaskCreateSteps: En, CucumberStepsDefinition() {

    @Autowired
    private lateinit var taskAggregateService: TaskAggregateService

    @Autowired
    private lateinit var taskRepository: TaskRepository

    private lateinit var command: TaskCreateCommand

    init {
        DataTableType(::taskCreateParams)
        DataTableType(::taskAssertionParams)
        DataTableType(::taskNotExistsParam)

        When("I create a task") {
            step {
                createTask(taskCreateParams(null))
            }
        }

        When("I create a task:") { params: TaskCreateParams ->
            step {
                createTask(params)
            }
        }

        Given("A task is created") {
            step {
                createTask(taskCreateParams(null))
            }
        }

        Given("A task is created:") { params: TaskCreateParams ->
            step {
                createTask(params)
            }
        }

        Given("Some tasks are created:") { dataTable: DataTable ->
            step {
                dataTable.asList(TaskCreateParams::class.java)
                    .forEach { createTask(it) }
            }
        }

        Then("The task should be created") {
            step {
                val taskId = context.taskIds.lastUsed
                AssertionBdd.task(taskRepository).assertThat(taskId).hasFields(
                    id = taskId,
                    type = command.type,
                    priority = 0,
                    supervisor = null,
                    targetId = command.targetId,
                    contact = command.contact,
                    status = TaskState.PENDING
                )
            }
        }

        Then("The task should be created:") { params: TaskAssertionParams ->
            step {
                val target = params.targetOrganization?.let(context.organizationIds::safeGet)

                if (params.automatic) {
                    Assertions.assertThat(params.type).isNotNull
                    Assertions.assertThat(target).isNotNull
                    val task = taskRepository.findByTypeAndTargetId(params.type!!, target!!)
                    Assertions.assertThat(task).isNotNull
                    context.taskIds[params.identifier] = task.getOrNull()!!.id
                }

                val taskId = context.taskIds.safeGet(params.identifier)
                val task = taskRepository.findById(taskId).get()

                AssertionBdd.task(taskRepository).assertThat(task).hasFields(
                    type = params.type ?: task.type,
                    targetId = target ?: task.targetId
                )
            }
        }

        Then("The task should not be created:") { params: TaskNotExistsParam ->
            step {
                val target = params.targetOrganization?.let(context.organizationIds::safeGet)

                Assertions.assertThat(target).isNotNull

                val task = taskRepository.findByTypeAndTargetId(params.type, target!!)
                Assertions.assertThat(task).isNull()
            }
        }
    }

    private suspend fun createTask(params: TaskCreateParams) = context.taskIds.register(params.identifier) {
        command = TaskCreateCommand(
            type = params.type,
            metaTaskId = null,
            targetId = params.targetId,
            friendlyId = "",
            contact = context.organizationIds.safeGet(params.contact),
            supervisorId = null,
            properties = emptyMap()
        )
        taskAggregateService.create(command).id
    }

    private fun taskCreateParams(entry: Map<String, String>?) = TaskCreateParams(
        identifier = entry?.get("identifier").orRandom(),
        type = entry?.extractTaskType("taskType") ?: TaskType.ONBOARDING,
        targetId = entry?.get("targetId") ?: "A target Id",
        contact = entry?.get("contact") ?: context.organizationIds.lastUsedKey
    )

    private data class TaskCreateParams(
        val identifier: TestContextKey,
        val type: TaskType,
        val targetId: String,
        val contact: TestContextKey
    )

    private fun taskAssertionParams(entry: Map<String, String>) = TaskAssertionParams(
        identifier = entry["identifier"] ?: context.taskIds.lastUsedKey,
        type = entry.extractTaskType("type"),
        targetOrganization = entry["targetOrganization"],
        targetQuotation = entry["targetQuotation"],
        automatic = entry["automatic"].toBoolean()
    )

    private data class TaskAssertionParams(
        val identifier: TestContextKey,
        val type: TaskType?,
        val targetOrganization: TestContextKey?,
        val targetQuotation: TestContextKey?,
        val automatic: Boolean // if the task has been created via event handler and thus not registered in context
    )

    private fun taskNotExistsParam(entry: Map<String, String>) = TaskNotExistsParam(
        type = entry.safeExtractTaskType("type"),
        targetOrganization = entry["targetOrganization"],
        targetQuotation = entry["targetQuotation"]
    )

    private data class TaskNotExistsParam(
        val type: TaskType,
        val targetOrganization: TestContextKey?,
        val targetQuotation: TestContextKey?,
    )
}
