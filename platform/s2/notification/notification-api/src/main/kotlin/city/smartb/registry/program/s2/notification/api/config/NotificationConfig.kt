package city.smartb.registry.program.s2.notification.api.config

import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Configuration

@Configuration
class NotificationConfig {

    @Value("\${platform.web.baseUrl}")
    lateinit var webBaseUrl: String

    @Value("\${platform.web.routerPath}")
    lateinit var webRouterPath: String
}
