package city.smartb.registry.program.f2.task.domain.model

import city.smartb.registry.program.s2.task.domain.model.TaskType
import kotlin.js.JsExport
import kotlin.js.JsName


@JsExport
@JsName("TaskTypeDTO")
interface TaskTypeDTO {
    /**
     * Name of the status.
     * @example "Pending"
     */
    val value: String
}

data class TaskTypeDTOBase(
    override val value: String
): TaskTypeDTO

@JsExport
@JsName("TaskTypeValues")
object TaskTypeValues {
    fun onboarding() = TaskType.ONBOARDING.name
    fun quotation() = TaskType.QUOTATION.name
    fun catalog() = TaskType.CATALOG.name
}
