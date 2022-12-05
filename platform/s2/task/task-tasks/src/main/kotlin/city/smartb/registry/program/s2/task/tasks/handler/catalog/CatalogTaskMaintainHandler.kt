//package city.smartb.registry.program.s2.task.tasks.handler.catalog
//
//import city.smartb.registry.api.commons.EventHandler
//import city.smartb.registry.program.api.commons.auth.OrganizationId
//import city.smartb.registry.api.commons.model.ExactMatch
//import city.smartb.registry.program.s2.organization.api.OrganizationFinderService
//import city.smartb.registry.program.s2.product.api.ProductFinderService
//import city.smartb.registry.program.s2.product.domain.automate.ProductId
//import city.smartb.registry.program.s2.product.domain.automate.ProductState
//import city.smartb.registry.program.s2.product.domain.command.ProductCreatedEvent
//import city.smartb.registry.program.s2.product.domain.command.ProductDeletedEvent
//import city.smartb.registry.program.s2.product.domain.command.ProductUpdatedEvent
//import city.smartb.registry.program.s2.product.domain.command.ProductUpdatedStatusEvent
//import city.smartb.registry.program.s2.task.api.TaskAggregateService
//import city.smartb.registry.program.s2.task.api.TaskFinderService
//import city.smartb.registry.program.s2.task.domain.automate.TaskState
//import city.smartb.registry.program.s2.task.domain.command.TaskCreateCommand
//import city.smartb.registry.program.s2.task.domain.command.TaskCreatedEvent
//import city.smartb.registry.program.s2.task.domain.command.TaskUpdatePropertiesCommand
//import city.smartb.registry.program.s2.task.domain.model.Task
//import city.smartb.registry.program.s2.task.domain.model.TaskProperties
//import city.smartb.registry.program.s2.task.domain.model.TaskType
//import org.springframework.context.event.EventListener
//import org.springframework.stereotype.Component
//
//@Component
//class CatalogTaskMaintainHandler(
//    private val organizationFinderService: OrganizationFinderService,
//    private val productFinderService: ProductFinderService,
//    private val taskAggregateService: TaskAggregateService,
//    private val taskFinderService: TaskFinderService
//): EventHandler() {
//
//    @EventListener
//    fun onProductCreated(event: ProductCreatedEvent) = handleEvent(
//        "CatalogTaskMaintainHandler - onProductCreated - Product [${event.id}]"
//    ) {
//        updateTask(productId = event.id, pendingVariation = 1, totalVariation = 1)
//    }
//
//    @EventListener
//    fun onProductStatusUpdated(event: ProductUpdatedStatusEvent) = handleEvent(
//        "CatalogTaskMaintainHandler - onProductStatusUpdated - Product [${event.id}]"
//    ) {
//        updateIfPendingVariation(event.id, event.from, event.to)
//    }
//
//    @EventListener
//    fun onProductUpdated(event: ProductUpdatedEvent) = handleEvent(
//        "CatalogTaskMaintainHandler - onProductUpdated - Product [${event.id}]"
//    ) {
//        updateIfPendingVariation(event.id, event.fromStatus, event.toStatus)
//    }
//
//    @EventListener
//    fun onProductDeleted(event: ProductDeletedEvent) = handleEvent(
//        "CatalogTaskMaintainHandler - onProductDeleted - Product [${event.id}]"
//    ) {
//        updateTask(
//            productId = event.id,
//            pendingVariation = pendingVariation(event.from, ProductState.DELETED),
//            totalVariation = -1
//        )
//    }
//
//    private suspend fun updateIfPendingVariation(productId: ProductId, from: ProductState, to: ProductState) {
//        val variation = pendingVariation(from, to)
//        if (variation != 0) {
//            updateTask(productId = productId, pendingVariation = variation)
//        }
//    }
//
//    private fun pendingVariation(from: ProductState, to: ProductState) = when {
//        from.isPending() == to.isPending() -> 0
//        from.isPending() -> -1
//        else -> 1
//    }
//
//    private fun ProductState.isPending() = this in listOf(ProductState.DRAFT)
//
//    private suspend fun updateTask(productId: ProductId, pendingVariation: Int = 0, totalVariation: Int = 0) {
//        val product = productFinderService.get(productId)
//        val task = taskFinderService.page(
//            type = ExactMatch(TaskType.CATALOG),
//            targetId = ExactMatch(product.providerId),
//            status = ExactMatch(TaskState.PENDING)
//        ).items.firstOrNull()
//            ?: createTask(product.providerId).let { taskFinderService.get(it.id) }
//
//        TaskUpdatePropertiesCommand(
//            id = task.id,
//            properties = task.updateProperties(pendingVariation, totalVariation)
//        ).let { taskAggregateService.updateProperties(it) }
//    }
//
//    private suspend fun createTask(providerId: OrganizationId): TaskCreatedEvent {
//        val provider = organizationFinderService.get(providerId)
//        return TaskCreateCommand(
//            type = TaskType.CATALOG,
//            metaTaskId = null,
//            targetId = providerId,
//            friendlyId = provider.friendlyId,
//            contact = providerId,
//            supervisorId = null,
//            properties = mapOf(
//                TaskProperties.Catalog.PENDING to "0",
//                TaskProperties.Catalog.TOTAL to "0",
//            )
//        ).let { taskAggregateService.create(it) }
//    }
//
//    private fun Task.updateProperties(pendingVariation: Int, totalVariation: Int): Map<String, String> = mapOf(
//        TaskProperties.Catalog.PENDING.let { it to ((properties[it]?.toIntOrNull() ?: 0) + pendingVariation).toString() },
//        TaskProperties.Catalog.TOTAL.let { it to ((properties[it]?.toIntOrNull() ?: 0) + totalVariation).toString() },
//    )
//}
