package city.smartb.registry.program.bdd.steps.s2.task.command

import city.smartb.registry.program.api.commons.exception.NotFoundException
import city.smartb.registry.program.bdd.CucumberStepsDefinition
import city.smartb.registry.program.bdd.assertion.AssertionBdd
import city.smartb.registry.program.bdd.assertion.task
import city.smartb.registry.program.bdd.data.TestContextKey
import city.smartb.registry.program.s2.task.api.TaskAggregateService
import city.smartb.registry.program.s2.task.api.entity.TaskRepository
import city.smartb.registry.program.s2.task.domain.command.TaskAssignCommand
import io.cucumber.datatable.DataTable
import io.cucumber.java8.En
import org.assertj.core.api.Assertions
import org.springframework.beans.factory.annotation.Autowired

class TaskAssignSteps: En, CucumberStepsDefinition() {

    @Autowired
    private lateinit var taskAggregateService: TaskAggregateService

    @Autowired
    private lateinit var taskRepository: TaskRepository

    private lateinit var command: TaskAssignCommand

    init {
        DataTableType(::taskAssignParams)

        When("I assign the task") {
            step {
                assignTask(taskAssignParams(null))
            }
        }

        When("I assign the task:") { params: TaskAssignParams ->
            step {
                assignTask(params)
            }
        }

        Given("A task is assigned") {
            step {
                assignTask(taskAssignParams(null))
            }
        }

        Given("A task is assigned:") { params: TaskAssignParams ->
            step {
                assignTask(params)
            }
        }

        Given("Some tasks are assigned:") { dataTable: DataTable ->
            step {
                dataTable.asList(TaskAssignParams::class.java)
                    .forEach { assignTask(it) }
            }
        }

        Then("The task should be assigned") {
            step {
                val taskId = context.taskIds.lastUsed
                AssertionBdd.task(taskRepository).assertThat(taskId).hasFields(
                    supervisor = command.supervisor
                )
            }
        }

        Then("The task should be assigned:") { dataTable: DataTable ->
            step {
                dataTable.asList(TaskAssignParams::class.java).map {
                    AssertionBdd.task(taskRepository).assertThat(context.taskIds.safeGet(it.identifier)).hasFields(
                        supervisor = command.supervisor
                    )
                }
            }
        }

        Then("The task should not be assigned") {
            step {
                val taskId = context.taskIds.lastUsed
                AssertionBdd.task(taskRepository).assertThat(taskId).hasFields(
                    supervisor = null
                )
                Assertions.assertThat(context.errors.lastOfType(NotFoundException::class)).isNotNull()
            }
        }
    }

    private suspend fun assignTask(params: TaskAssignParams) {
        command = TaskAssignCommand(
            id = context.taskIds.safeGet(params.identifier),
            supervisor = context.userIds[params.supervisor] ?: "ShouldNotExistId"
        )
        taskAggregateService.assign(command).id
    }

    private fun taskAssignParams(entry: Map<String, String>?) = TaskAssignParams(
        identifier = entry?.get("identifier") ?: context.taskIds.lastUsedKey,
        supervisor = entry?.get("supervisor") ?: context.userIds.lastUsedKey
    )

    private data class TaskAssignParams(
        val identifier: TestContextKey,
        val supervisor: String
    )
}
