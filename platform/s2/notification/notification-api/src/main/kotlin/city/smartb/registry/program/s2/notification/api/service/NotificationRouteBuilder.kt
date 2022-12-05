package city.smartb.registry.program.s2.notification.api.service

import city.smartb.registry.program.api.commons.model.RedirectableRoute
import city.smartb.registry.program.s2.notification.api.config.NotificationConfig
import i2.keycloak.f2.user.domain.model.UserId
import org.springframework.stereotype.Service

@Service
class NotificationRouteBuilder(
//    private val imProperties: ImProperties,
//    private val keycloakActionTokenService: KeycloakActionTokenService,
    private val notificationConfig: NotificationConfig
) {
//    fun root() = notificationConfig.webBaseUrl.removeSuffix("/")
//    fun quotationList() = buildUrl(RedirectableRoute.QUOTATION_LIST)
//    fun projectList() = buildUrl(RedirectableRoute.PROJECT_LIST)
//
//    suspend fun keycloakAction(userId: UserId, action: String): String {
//        val issuer = imProperties.issuers.first()
//        val token = keycloakActionTokenService.generate(userId, action)
//        return "${issuer.authUrl.removeSuffix("/")}/realms/${issuer.realm}/login-actions/action-token?key=$token"
//    }
//
//    private fun buildUrl(route: RedirectableRoute, vararg params: String): String {
//        return buildUrl("${route.id}/${params.joinToString("/")}")
//    }
//
//    private fun buildUrl(path: String): String {
//        return "${root()}/${notificationConfig.webRouterPath.removeSuffix("/")}/$path"
//    }
}
