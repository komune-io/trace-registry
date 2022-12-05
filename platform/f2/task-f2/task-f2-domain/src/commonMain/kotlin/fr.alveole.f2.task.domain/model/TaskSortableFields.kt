package city.smartb.registry.program.f2.task.domain.model

import city.smartb.registry.program.s2.task.domain.model.TaskSortable
import kotlin.js.JsExport
import kotlin.js.JsName

@JsExport
@JsName("TaskSortableFields")
object TaskSortableFields {
    fun creationDate() = TaskSortable.CREATION_DATE.name
    fun catalogPending() = TaskSortable.CATALOG_PENDING.name
}
