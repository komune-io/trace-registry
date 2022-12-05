package city.smartb.registry.program.s2.notification.api.utils

import city.smartb.im.user.domain.model.User
import city.smartb.registry.program.s2.notification.domain.model.NotificationContact

fun User.toNotificationContact() = NotificationContact(
    firstname = givenName,
    lastname = familyName.uppercase()
)
