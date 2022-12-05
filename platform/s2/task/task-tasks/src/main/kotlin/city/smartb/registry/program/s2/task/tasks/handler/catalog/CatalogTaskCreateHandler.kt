//package city.smartb.registry.program.s2.task.tasks.handler.catalog
//
//import city.smartb.registry.program.s2.task.api.TaskAggregateService
//import city.smartb.registry.program.s2.task.domain.command.TaskCreateCommand
//import city.smartb.registry.program.s2.task.domain.model.TaskProperties
//import city.smartb.registry.program.s2.task.domain.model.TaskType
//import org.springframework.context.event.EventListener
//import org.springframework.stereotype.Component
//
//@Component
//class CatalogTaskCreateHandler(
//    private val organizationFinderService: OrganizationFinderService,
//    private val taskAggregateService: TaskAggregateService
//): EventHandler() {
//
//    @EventListener
//    fun onCatalogInitialized(event: ProductInitializedCatalogEvent) = handleEvent(
//        "CatalogTaskCreateHandler - onCatalogInitialized - Provider [${event.providerId}]"
//    ) {
//        val provider = organizationFinderService.get(event.providerId)
//        TaskCreateCommand(
//            type = TaskType.CATALOG,
//            metaTaskId = null,
//            targetId = event.providerId,
//            friendlyId = provider.friendlyId,
//            contact = event.providerId,
//            supervisorId = null,
//            properties = mapOf(
//                TaskProperties.Catalog.PENDING to "0",
//                TaskProperties.Catalog.TOTAL to "0",
//            )
//        ).let { taskAggregateService.create(it) }
//    }
//}
