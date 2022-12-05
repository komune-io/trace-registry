package city.smartb.registry.program.bdd.data.parser.notification

import city.smartb.registry.program.bdd.data.parser.safeExtract
import city.smartb.registry.program.s2.notification.domain.model.NotificationContact
import city.smartb.registry.program.s2.notification.domain.model.NotificationType
import org.springframework.stereotype.Service

@Service
class NotificationPayloadParser(
    private val notificationUrlParser: NotificationUrlParser
) {

    @Suppress("ComplexMethod")
    fun extractNotificationPayload(entry: Map<String, String>, type: NotificationType): Any = when (type) {
        else -> {}
    }

    private fun Map<String, String>.extractNotificationContact(prefix: String) = NotificationContact(
        firstname = safeExtract("$prefix.firstname"),
        lastname = safeExtract("$prefix.lastname")
    )
}
