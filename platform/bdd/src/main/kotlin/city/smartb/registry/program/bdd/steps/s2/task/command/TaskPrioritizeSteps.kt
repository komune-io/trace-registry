package city.smartb.registry.program.bdd.steps.s2.task.command

import city.smartb.registry.program.bdd.CucumberStepsDefinition
import city.smartb.registry.program.bdd.data.TestContextKey
import city.smartb.registry.program.s2.task.api.TaskAggregateService
import city.smartb.registry.program.s2.task.api.entity.TaskRepository
import city.smartb.registry.program.s2.task.domain.command.TaskPrioritizeCommand
import io.cucumber.datatable.DataTable
import io.cucumber.java8.En
import org.assertj.core.api.Assertions
import org.springframework.beans.factory.annotation.Autowired

class TaskPrioritizeSteps: En, CucumberStepsDefinition() {

    @Autowired
    private lateinit var taskAggregateService: TaskAggregateService

    @Autowired
    private lateinit var taskRepository: TaskRepository

    private lateinit var command: TaskPrioritizeCommand

    init {
        DataTableType(::taskPrioritizeParams)

        When("I prioritize the task") {
            step {
                prioritizeTask(taskPrioritizeParams(null))
            }
        }

        When("I prioritize the task:") { params: TaskPrioritizeParams ->
            step {
                prioritizeTask(params)
            }
        }

        Given("A task is prioritized") {
            step {
                prioritizeTask(taskPrioritizeParams(null))
            }
        }

        Given("A task is prioritized:") { params: TaskPrioritizeParams ->
            step {
                prioritizeTask(params)
            }
        }

        Given("Some tasks are prioritized:") { dataTable: DataTable ->
            step {
                dataTable.asList(TaskPrioritizeParams::class.java)
                    .forEach { prioritizeTask(it) }
            }
        }

        Then("The task should be prioritized") {
            step {
                val taskId = context.taskIds.lastUsed
                val task = taskRepository.findById(taskId).get()
                Assertions.assertThat(task.priority).isNotEqualTo(0)
            }
        }
    }

    private suspend fun prioritizeTask(params: TaskPrioritizeParams) {
        command = TaskPrioritizeCommand(
            id = context.taskIds.safeGet(params.identifier)
        )
        taskAggregateService.prioritize(command).id
    }

    private fun taskPrioritizeParams(entry: Map<String, String>?) = TaskPrioritizeParams(
        identifier = entry?.get("identifier") ?: context.taskIds.lastUsedKey
    )

    private data class TaskPrioritizeParams(
        val identifier: TestContextKey
    )
}
