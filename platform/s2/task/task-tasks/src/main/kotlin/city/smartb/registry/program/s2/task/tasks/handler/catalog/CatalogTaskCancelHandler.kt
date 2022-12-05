package city.smartb.registry.program.s2.task.tasks.handler.catalog

import city.smartb.im.organization.domain.features.command.OrganizationDisabledEvent
import city.smartb.registry.program.api.commons.EventHandler
import city.smartb.registry.program.s2.task.api.TaskAggregateService
import city.smartb.registry.program.s2.task.api.TaskFinderService
import org.springframework.context.event.EventListener
import org.springframework.stereotype.Component

@Component
class CatalogTaskCancelHandler(
    private val taskAggregateService: TaskAggregateService,
    private val taskFinderService: TaskFinderService
): EventHandler() {

    @EventListener
    fun onOrganizationDisabled(event: OrganizationDisabledEvent) = handleEvent(
        "CatalogTaskCancelHandler - onOrganizationDisabled - Provider [${event.id}]"
    ) {
//        taskFinderService.page().items
//            .forEach { task ->
//                TaskUpdateStatusCommand(
//                    id = task.id,
//                    status = TaskState.CANCELED
//                ).let { taskAggregateService.updateStatus(it) }
//            }
    }
}
