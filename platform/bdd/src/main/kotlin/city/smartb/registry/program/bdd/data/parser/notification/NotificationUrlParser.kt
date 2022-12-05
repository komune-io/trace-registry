package city.smartb.registry.program.bdd.data.parser.notification

import city.smartb.registry.program.bdd.data.TestContext
import city.smartb.registry.program.bdd.data.parser.safeExtract
import city.smartb.registry.program.s2.notification.api.service.NotificationRouteBuilder
import org.springframework.stereotype.Service

@Service
class NotificationUrlParser(
    private val notificationRouteBuilder: NotificationRouteBuilder,
    private val context: TestContext
) {
//    fun extractNotificationUrl(entry: Map<String, String>): String {
//        val route = entry.safeExtract("url.route")
//
//        if (route == "ROOT") {
//            return notificationRouteBuilder.root()
//        }
//
//        return when (RedirectableRoute.valueOf(route)) {
//            RedirectableRoute.QUOTATION_LIST -> entry.extractQuotationList()
//            RedirectableRoute.PROJECT_LIST -> entry.extractProjectList()
//            RedirectableRoute.PROJECT_EQUIPMENT_FOLLOWUP -> entry.extractProjectEquipmentFollowup()
//        }
//    }
}
