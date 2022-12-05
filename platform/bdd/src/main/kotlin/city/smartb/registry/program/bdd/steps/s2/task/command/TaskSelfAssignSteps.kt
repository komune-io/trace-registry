package city.smartb.registry.program.bdd.steps.s2.task.command

import city.smartb.registry.program.bdd.CucumberStepsDefinition
import city.smartb.registry.program.bdd.data.TestContextKey
import city.smartb.registry.program.bdd.data.parser.task.extractTaskTypeList
import city.smartb.registry.program.s2.task.api.TaskAggregateService
import city.smartb.registry.program.s2.task.api.entity.TaskRepository
import city.smartb.registry.program.s2.task.domain.command.TaskSelfAssignCommand
import city.smartb.registry.program.s2.task.domain.model.TaskType
import io.cucumber.datatable.DataTable
import io.cucumber.java8.En
import org.assertj.core.api.Assertions
import org.springframework.beans.factory.annotation.Autowired

class TaskSelfAssignSteps: En, CucumberStepsDefinition() {

    @Autowired
    private lateinit var taskAggregateService: TaskAggregateService

    @Autowired
    private lateinit var taskRepository: TaskRepository

    init {
        DataTableType(::taskSelfAssignParams)

        When("I self assign a task") {
            step {
                selfAssignTask(taskSelfAssignParams(null))
            }
        }

        When("I self assign a task:") { params: TaskSelfAssignParams ->
            step {
                selfAssignTask(params)
            }
        }

        Given("A task is self assigned") {
            step {
                selfAssignTask(taskSelfAssignParams(null))
            }
        }

        Given("A task is self assigned:") { params: TaskSelfAssignParams ->
            step {
                selfAssignTask(params)
            }
        }

        Given("Some tasks are self assigned:") { dataTable: DataTable ->
            step {
                dataTable.asList(TaskSelfAssignParams::class.java)
                    .forEach { selfAssignTask(it) }
            }
        }

        Then("The task should be self assigned") {
            step {
                val taskId = context.taskIds.lastUsed
                val task = taskRepository.findById(taskId).get()
                Assertions.assertThat(task.supervisor).isNotNull
            }
        }

        Then("The tasks should be self assigned:") { dataTable: DataTable ->
            step {
                dataTable.asList(TaskSelfAssignParams::class.java).map {
                    val task = taskRepository.findById(context.taskIds.safeGet(it.identifier)).get()
                    Assertions.assertThat(task.supervisor).isNotNull
                }
            }
        }

        Then("The tasks should not be self assigned:") { dataTable: DataTable ->
            step {
                dataTable.asList(TaskSelfAssignParams::class.java).map {
                    val task = taskRepository.findById(context.taskIds.safeGet(it.identifier)).get()
                    Assertions.assertThat(task.supervisor).isNotEqualTo(context.userIds.safeGet(it.supervisor))
                }
            }
        }
    }

    private suspend fun selfAssignTask(params: TaskSelfAssignParams) {
        TaskSelfAssignCommand(
            supervisorId = context.userIds.safeGet(params.supervisor),
            types = params.types
        ).let { taskAggregateService.selfAssign(it) }
    }

    private fun taskSelfAssignParams(entry: Map<String, String>?) = TaskSelfAssignParams(
        identifier = entry?.get("identifier") ?: context.taskIds.lastUsedKey,
        supervisor = entry?.get("supervisor") ?: context.userIds.lastUsedKey,
        types = entry?.extractTaskTypeList("types")
    )

    private data class TaskSelfAssignParams(
        val identifier: TestContextKey,
        val supervisor: TestContextKey,
        val types: List<TaskType>?
    )
}
