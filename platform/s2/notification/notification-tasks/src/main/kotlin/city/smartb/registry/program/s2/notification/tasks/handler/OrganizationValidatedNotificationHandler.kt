//package city.smartb.registry.program.s2.notification.tasks.handler
//
//import city.smartb.registry.program.api.commons.EventHandler
//import city.smartb.registry.program.s2.notification.api.NotificationAggregateService
//import city.smartb.registry.program.s2.notification.api.service.NotificationRouteBuilder
//import city.smartb.registry.program.s2.notification.api.utils.toNotificationContact
//import city.smartb.registry.program.s2.notification.domain.command.NotificationSendCommand
//import city.smartb.registry.program.s2.notification.domain.model.NotificationType
//import org.springframework.context.event.EventListener
//import org.springframework.stereotype.Component
//
//@Component
//class OrganizationValidatedNotificationHandler(
//    private val notificationAggregateService: NotificationAggregateService,
//    private val notificationRouteBuilder: NotificationRouteBuilder,
//    private val organizationFinderService: OrganizationFinderService,
//    private val userFinderService: UserFinderService
//): EventHandler() {
//
//    @EventListener
//    fun onOnboardingCompleted(event: OrganizationOnboardingCompletedEvent) = handleEvent(
//        "OrganizationValidatedNotificationHandler - onOnboardingCompleted - Organization [${event.id}]"
//    ) {
//        val organization = organizationFinderService.get(event.id)
//        if (organization.supervisorId == null) {
//            logger.info("No supervisor, not sending notification.")
//            return@handleEvent
//        }
//
//        val supervisor = userFinderService.get(organization.supervisorId!!)
//        if (!supervisor.emailVerified) {
//            logger.info("Supervisor's email not verified, not sending notification.")
//            return@handleEvent
//        }
//
//        when {
//            organization.type.isBeneficiary() -> notifyBeneficiary(supervisor)
//            organization.type.isProviderEquipment() -> notifyProviderEquipment(supervisor)
//            else -> logger.info("No notification to send for type [${organization.type}].")
//        }
//    }
//
//    private suspend fun notifyBeneficiary(supervisor: User) {
//        NotificationSendCommand(
//            type = NotificationType.BENEFICIARY__VALIDATED,
//            receivers = listOf(supervisor.id),
//            payload = BeneficiaryValidatedPayload(
//                contact = supervisor.toNotificationContact(),
//                url = notificationRouteBuilder.root()
//            )
//        ).let { notificationAggregateService.send(it) }
//    }
//
//    private suspend fun notifyProviderEquipment(supervisor: User) {
//        NotificationSendCommand(
//            type = NotificationType.PEQUIPMENT__VALIDATED,
//            receivers = listOf(supervisor.id),
//            payload = PEquipmentValidatedPayload(
//                contact = supervisor.toNotificationContact(),
//                url = notificationRouteBuilder.root()
//            )
//        ).let { notificationAggregateService.send(it) }
//    }
//}
