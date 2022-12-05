package city.smartb.registry.program.s2.notification.api.entity

import city.smartb.registry.program.s2.notification.domain.model.NotificationType

open class EmailConfigEntity {
    open lateinit var type: NotificationType
    open var template: Long = 0
}
