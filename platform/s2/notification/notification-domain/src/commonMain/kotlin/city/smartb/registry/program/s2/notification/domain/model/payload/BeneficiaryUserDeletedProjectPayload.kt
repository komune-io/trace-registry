package city.smartb.registry.program.s2.notification.domain.model.payload

import city.smartb.registry.program.s2.notification.domain.model.NotificationContact

data class BeneficiaryUserDeletedProjectPayload(
    val contact: NotificationContact,
    val user: NotificationContact,
    val projectName: String,
    val url: String
)
