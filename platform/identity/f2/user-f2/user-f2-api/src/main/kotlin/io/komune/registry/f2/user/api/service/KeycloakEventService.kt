package io.komune.registry.f2.user.api.service

import io.komune.im.f2.user.domain.model.User
import io.komune.registry.f2.user.api.model.KeycloakHttpEvent
import io.komune.registry.infra.brevo.config.BrevoClient
import io.komune.registry.infra.brevo.config.BrevoConfig
import io.komune.registry.infra.brevo.model.EmailContact
import org.springframework.stereotype.Service

@Service
class KeycloakEventService(
    private val brevoClient: BrevoClient,
    private val brevoConfig: BrevoConfig,
    private val userF2FinderService: UserF2FinderService
) {
    suspend fun handle(event: KeycloakHttpEvent) {
        when {
            event.isVerifyEmail() -> handleVerifyEmail(event)
        }
    }

    private suspend fun handleVerifyEmail(event: KeycloakHttpEvent) {
        val user = userF2FinderService.get(event.userId!!)

        brevoClient.sendEmail(
            templateId = brevoConfig.template.charter,
            receivers = listOf(user.toEmailContact()),
            payload = null,
            attachments = null
        )
    }

    private fun User.toEmailContact() = EmailContact("$givenName $familyName", email)
}
