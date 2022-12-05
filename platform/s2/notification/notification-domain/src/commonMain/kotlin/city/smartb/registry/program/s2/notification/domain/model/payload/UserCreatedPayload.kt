package city.smartb.registry.program.s2.notification.domain.model.payload

import city.smartb.registry.program.s2.notification.domain.model.NotificationContact

data class UserCreatedPayload(
    val contact: NotificationContact,
    val url: String
)
