package city.smartb.registry.program.bdd.steps.s2.task.command

import city.smartb.registry.program.bdd.CucumberStepsDefinition
import city.smartb.registry.program.bdd.assertion.AssertionBdd
import city.smartb.registry.program.bdd.assertion.task
import city.smartb.registry.program.bdd.data.TestContextKey
import city.smartb.registry.program.bdd.data.parser.task.safeExtractTaskState
import city.smartb.registry.program.s2.task.api.TaskAggregateService
import city.smartb.registry.program.s2.task.api.entity.TaskRepository
import city.smartb.registry.program.s2.task.domain.automate.TaskState
import city.smartb.registry.program.s2.task.domain.command.TaskUpdateStatusCommand
import io.cucumber.datatable.DataTable
import io.cucumber.java8.En
import org.springframework.beans.factory.annotation.Autowired

class TaskUpdateStatusSteps: En, CucumberStepsDefinition() {

    @Autowired
    private lateinit var taskAggregateService: TaskAggregateService

    @Autowired
    private lateinit var taskRepository: TaskRepository

    private lateinit var command: TaskUpdateStatusCommand

    init {
        DataTableType(::taskUpdateStatusParams)
        DataTableType(::taskStatusAssertParams)

        When("I update the status of the task:") { params: TaskUpdateStatusParams ->
            step {
                validateTask(params)
            }
        }

        Given("The status of the task is updated:") { params: TaskUpdateStatusParams ->
            step {
                validateTask(params)
            }
        }

        Given("The statuses of the tasks are updated:") { dataTable: DataTable ->
            step {
                dataTable.asList(TaskUpdateStatusParams::class.java)
                    .forEach { validateTask(it) }
            }
        }

        Then("The status of the task should be updated") {
            step {
                assertTaskStatus(context.taskIds.lastUsedKey, command.status)
            }
        }

        Then("The status of the task should be updated:") { params: TaskStatusAssertParams ->
            step {
                assertTaskStatus(params.identifier, params.status)
            }
        }

        Then("The statuses of the tasks should be updated:") { dataTable: DataTable ->
            step {
                dataTable.asList(TaskStatusAssertParams::class.java)
                    .forEach { assertTaskStatus(it.identifier, it.status) }
            }
        }
    }

    private suspend fun validateTask(params: TaskUpdateStatusParams) {
        command = TaskUpdateStatusCommand(
            id = context.taskIds[params.identifier] ?: params.identifier,
            status = params.status
        )
        taskAggregateService.updateStatus(command)
    }

    private fun assertTaskStatus(identifier: TestContextKey, status: TaskState) {
        val taskId = context.taskIds.safeGet(identifier)
        AssertionBdd.task(taskRepository).assertThat(taskId).hasFields(
            status = status
        )
    }

    private fun taskUpdateStatusParams(entry: Map<String, String>) = TaskUpdateStatusParams(
        identifier = entry["identifier"] ?: context.taskIds.lastUsedKey,
        status = entry.safeExtractTaskState("status")
    )

    private fun taskStatusAssertParams(entry: Map<String, String>) = TaskStatusAssertParams(
        identifier = entry["identifier"] ?: context.taskIds.lastUsedKey,
        status = entry.safeExtractTaskState("status")
    )

    private data class TaskUpdateStatusParams(
        val identifier: TestContextKey,
        val status: TaskState
    )

    private data class TaskStatusAssertParams(
        val identifier: TestContextKey,
        val status: TaskState
    )
}
