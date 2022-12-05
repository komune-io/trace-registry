package city.smartb.registry.program.s2.notification.domain.command

import f2.dsl.cqrs.Command
import f2.dsl.cqrs.Event
import city.smartb.registry.program.api.commons.auth.UserId
import city.smartb.registry.program.s2.notification.domain.NotificationAttachment
import city.smartb.registry.program.s2.notification.domain.model.NotificationType

data class NotificationSendCommand(
    val type: NotificationType,
    val receivers: Collection<UserId>,
    val payload: Any? = null,
    val attachment: NotificationAttachment? = null
): Command

data class NotificationSentEvent(
    val type: NotificationType,
    val receivers: Collection<UserId>,
    val payload: Any? = null,
): Event
