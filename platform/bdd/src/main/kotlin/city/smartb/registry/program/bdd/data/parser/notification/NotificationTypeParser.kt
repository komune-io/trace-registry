package city.smartb.registry.program.bdd.data.parser.notification

import city.smartb.registry.program.bdd.data.parser.EntryParser
import city.smartb.registry.program.s2.notification.domain.model.NotificationType
import kotlin.reflect.jvm.jvmName

private val notificationTypeParser = EntryParser(
    parseErrorMessage = "Notification Type must be in ${NotificationType::class.jvmName} values",
    parser = String::toNotificationType
)

fun Map<String, String>.extractNotificationType(key: String) = notificationTypeParser.single(this, key)
fun Map<String, String>.safeExtractNotificationType(key: String) = notificationTypeParser.safeSingle(this, key)
fun Map<String, String>.extractNotificationTypeList(key: String) = notificationTypeParser.list(this, key)

fun String.toNotificationType() = NotificationType.valueOf(this)
