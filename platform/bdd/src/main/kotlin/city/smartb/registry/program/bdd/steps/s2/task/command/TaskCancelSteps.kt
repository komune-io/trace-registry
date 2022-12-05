package city.smartb.registry.program.bdd.steps.s2.task.command

import city.smartb.registry.program.bdd.CucumberStepsDefinition
import city.smartb.registry.program.bdd.assertion.AssertionBdd
import city.smartb.registry.program.bdd.assertion.task
import city.smartb.registry.program.bdd.data.TestContextKey
import city.smartb.registry.program.s2.task.api.TaskAggregateService
import city.smartb.registry.program.s2.task.api.entity.TaskRepository
import city.smartb.registry.program.s2.task.domain.automate.TaskState
import city.smartb.registry.program.s2.task.domain.command.TaskUpdateStatusCommand
import io.cucumber.datatable.DataTable
import io.cucumber.java8.En
import org.springframework.beans.factory.annotation.Autowired

class TaskCancelSteps: En, CucumberStepsDefinition() {

    @Autowired
    private lateinit var taskAggregateService: TaskAggregateService

    @Autowired
    private lateinit var taskRepository: TaskRepository

    private lateinit var command: TaskUpdateStatusCommand

    init {
        DataTableType(::taskCancelParams)

        When("I cancel the task") {
            step {
                cancelTask(taskCancelParams(null))
            }
        }

        When("I cancel the task:") { params: TaskCancelParams ->
            step {
                cancelTask(params)
            }
        }

        Given("The task is canceled") {
            step {
                cancelTask(taskCancelParams(null))
            }
        }

        Given("The task is canceled:") { params: TaskCancelParams ->
            step {
                cancelTask(params)
            }
        }

        Given("The tasks are canceled:") { dataTable: DataTable ->
            step {
                dataTable.asList(TaskCancelParams::class.java)
                    .forEach { cancelTask(it) }
            }
        }

        Then("The task should be canceled") {
            step {
                val taskId = context.taskIds.lastUsed
                AssertionBdd.task(taskRepository).assertThat(taskId).hasFields(
                    status = TaskState.CANCELED
                )
            }
        }

        Then("The task should not be canceled") {
            step {
                val taskId = context.taskIds.lastUsed
                AssertionBdd.task(taskRepository).assertThat(taskId)
                    .hasNotStatus(status = TaskState.CANCELED)
            }
        }
    }

    private suspend fun cancelTask(params: TaskCancelParams) {
        command = TaskUpdateStatusCommand(
            id = context.taskIds[params.identifier] ?: params.identifier,
            status = TaskState.CANCELED
        )
        taskAggregateService.updateStatus(command)
    }

    private fun taskCancelParams(entry: Map<String, String>?) = TaskCancelParams(
        identifier = entry?.get("identifier") ?: context.taskIds.lastUsedKey,
    )

    private data class TaskCancelParams(
        val identifier: TestContextKey
    )
}
