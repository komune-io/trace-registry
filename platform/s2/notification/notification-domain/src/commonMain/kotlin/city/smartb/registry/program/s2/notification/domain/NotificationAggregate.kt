package city.smartb.registry.program.s2.notification.domain

import city.smartb.registry.program.s2.notification.domain.command.NotificationSendCommand
import city.smartb.registry.program.s2.notification.domain.command.NotificationSentEvent

interface NotificationAggregate {
    suspend fun send(command: NotificationSendCommand): NotificationSentEvent
}
