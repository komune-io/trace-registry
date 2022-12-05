package city.smartb.registry.program.bdd.steps.s2.task.command

import city.smartb.registry.program.bdd.CucumberStepsDefinition
import city.smartb.registry.program.bdd.assertion.AssertionBdd
import city.smartb.registry.program.bdd.assertion.task
import city.smartb.registry.program.bdd.data.TestContextKey
import city.smartb.registry.program.s2.task.api.TaskAggregateService
import city.smartb.registry.program.s2.task.api.entity.TaskRepository
import city.smartb.registry.program.s2.task.domain.command.TaskUpdatePropertiesCommand
import io.cucumber.java8.En
import org.springframework.beans.factory.annotation.Autowired

class TaskUpdatePropertiesSteps: En, CucumberStepsDefinition() {

    @Autowired
    private lateinit var taskAggregateService: TaskAggregateService

    @Autowired
    private lateinit var taskRepository: TaskRepository

    private lateinit var command: TaskUpdatePropertiesCommand

    init {
        DataTableType(::taskUpdatePropertiesParams)

        When("I update the properties of the task:") { params: TaskUpdatePropertiesParams ->
            step {
                updateTaskProperties(params)
            }
        }

        Given("The properties of the task are updated:") { params: TaskUpdatePropertiesParams ->
            step {
                updateTaskProperties(params)
            }
        }

        Then("The properties of the task should be updated") {
            step {
                val taskId = context.taskIds.lastUsed
                AssertionBdd.task(taskRepository).assertThat(taskId).hasFields(
                    properties = command.properties
                )
            }
        }

        Then("The properties of the task should be updated:") { params: TaskUpdatePropertiesParams ->
            step {
                val taskId = context.taskIds.safeGet(params.identifier)
                AssertionBdd.task(taskRepository).assertThat(taskId).hasFields(
                    properties = params.properties
                )
            }
        }
    }

    private suspend fun updateTaskProperties(params: TaskUpdatePropertiesParams) {
        command = TaskUpdatePropertiesCommand(
            id = context.taskIds.safeGet(params.identifier),
            properties = params.properties
        )
        taskAggregateService.updateProperties(command)
    }

    private fun taskUpdatePropertiesParams(entry: Map<String, String>) = TaskUpdatePropertiesParams(
        identifier = entry["identifier"] ?: context.taskIds.lastUsedKey,
        properties = entry - "identifier"
    )

    private data class TaskUpdatePropertiesParams(
        val identifier: TestContextKey,
        val properties: Map<String, String>
    )
}
