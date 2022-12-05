package city.smartb.registry.program.s2.task.domain.model

import city.smartb.registry.program.api.commons.model.Sort

typealias TaskSort = Sort<TaskSortable>

enum class TaskSortable {
    CREATION_DATE,
    CATALOG_PENDING
}

fun Collection<TaskSort>?.orDefault() = this ?: listOf(
    TaskSort(
        property = TaskSortable.CREATION_DATE,
        ascending = false,
        nullsFirst = false
    )
)
