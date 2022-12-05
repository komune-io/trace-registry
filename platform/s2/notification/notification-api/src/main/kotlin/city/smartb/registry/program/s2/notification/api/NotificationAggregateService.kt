package city.smartb.registry.program.s2.notification.api

import city.smartb.registry.program.s2.notification.api.entity.EmailConfigRepository
import city.smartb.registry.program.s2.notification.domain.NotificationAggregate
import city.smartb.registry.program.s2.notification.domain.command.NotificationSendCommand
import city.smartb.registry.program.s2.notification.domain.command.NotificationSentEvent
import org.springframework.context.ApplicationEventPublisher
import org.springframework.stereotype.Service
import s2.spring.utils.logger.Logger

@Service
class NotificationAggregateService(
    private val applicationEventPublisher: ApplicationEventPublisher,
//    private val emailConfigRepository: EmailConfigRepository,
): NotificationAggregate {

    private val logger by Logger()

    override suspend fun send(command: NotificationSendCommand): NotificationSentEvent {
        logger.info("Sending notification of type ${command.type}")
        println(command)

//        val emailConfig = emailConfigRepository.findById(command.type)
//            .orElse(null)
//            ?: throw NotFoundException("Email configuration", command.type.name)

//        val receivers = command.receivers
//            .map { userId ->
//                userFinderService.get(userId).let { EmailContact(
//                    name = "${it.givenName} ${it.familyName}",
//                    email = it.email
//                )}
//            }

//        sendinblueClient.sendEmail(
//            templateId = emailConfig.template,
//            receivers = receivers,
//            payload = command.payload,
//            attachments = command.attachment?.let(::listOf)
//        )

        return NotificationSentEvent(
            type = command.type,
            receivers = command.receivers,
            payload = command.payload
        ).also(applicationEventPublisher::publishEvent)
    }
}
