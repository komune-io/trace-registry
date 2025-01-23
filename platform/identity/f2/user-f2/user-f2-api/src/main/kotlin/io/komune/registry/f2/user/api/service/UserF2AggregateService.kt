package io.komune.registry.f2.user.api.service

import f2.dsl.cqrs.exception.F2Exception
import f2.dsl.fnc.invokeWith
import io.komune.im.f2.organization.domain.command.OrganizationCreateCommand
import io.komune.im.f2.organization.domain.command.OrganizationDeleteCommand
import io.komune.im.f2.user.domain.command.UserCreateCommand
import io.komune.im.f2.user.domain.command.UserDeleteCommand
import io.komune.im.f2.user.domain.query.UserGetByEmailQuery
import io.komune.registry.api.commons.exception.OrganizationNameAlreadyExistsException
import io.komune.registry.api.commons.exception.UserEmailAlreadyExistsException
import io.komune.registry.api.commons.exception.UserUnacceptedTermsException
import io.komune.registry.f2.user.domain.command.UserOnboardCommandDTOBase
import io.komune.registry.f2.user.domain.command.UserOnboardedEventDTOBase
import io.komune.registry.infra.brevo.config.BrevoClient
import io.komune.registry.infra.brevo.config.BrevoContact
import io.komune.registry.infra.im.ImClient
import io.komune.registry.s2.commons.auth.Roles
import io.komune.registry.s2.commons.model.OrganizationId
import io.komune.registry.s2.commons.model.UserId
import org.springframework.stereotype.Service
import s2.spring.utils.logger.Logger

@Service
class UserF2AggregateService(
    private val brevoClient: BrevoClient,
    private val imClient: ImClient
) {
    private val logger by Logger()

    suspend fun onboardUser(command: UserOnboardCommandDTOBase) = onboard { context ->
        if (!command.acceptTermsOfUse || !command.acceptChart100M) {
            throw UserUnacceptedTermsException()
        }

        val existingUser = UserGetByEmailQuery(command.email)
            .invokeWith(imClient.user.userGetByEmail())
            .item
        if (existingUser != null) {
            throw UserEmailAlreadyExistsException(command.email)
        }

        try {
            context.organizationId = OrganizationCreateCommand(
                name = command.organizationName,
                roles = listOf(Roles.STAKEHOLDER)
            ).invokeWith(imClient.organization.organizationCreate()).id
        } catch (e: F2Exception) {
            if (e.error.code == 409 && e.message.orEmpty().startsWith("Organization")) {
                throw OrganizationNameAlreadyExistsException(command.organizationName)
            }
        }

        context.userId = UserCreateCommand(
            email = command.email,
            password = command.password,
            memberOf = context.organizationId,
            roles = listOf(Roles.STAKEHOLDER_USER),
            givenName = command.givenName,
            familyName = command.familyName,
            attributes = mapOf(
                command::joinReason.name to command.joinReason,
                command::acceptTermsOfUse.name to command.acceptTermsOfUse.toString(),
                command::acceptChart100M.name to command.acceptChart100M.toString(),
                command::acceptNewsletter.name to command.acceptNewsletter.toString()
            ),
            sendVerifyEmail = true,
            isEmailVerified = false
        ).invokeWith(imClient.user.userCreate()).id

        if (command.acceptNewsletter) {
            val contact = BrevoContact(
                email = command.email,
                firstname = command.givenName,
                lastname = command.familyName,
                organization = command.organizationName
            )
            brevoClient.registerContact(command.email, contact)
        }

        UserOnboardedEventDTOBase(
            id = context.userId!!,
            organizationId = context.organizationId!!
        )
    }

    private suspend fun <R> onboard(block: suspend (OnboardingContext) -> R): R {
        val context = OnboardingContext()
        try {
            return block(context)
        } catch (e: Exception) {
            logger.info("Error while onboarding, rolling back...")
            context.organizationId?.let {
                OrganizationDeleteCommand(context.organizationId!!).invokeWith(imClient.organization.organizationDelete())
            }
            context.userId?.let {
                UserDeleteCommand(context.userId!!).invokeWith(imClient.user.userDelete())
            }
            throw e
        }
    }

    private class OnboardingContext {
        var organizationId: OrganizationId? = null
        var userId: UserId? = null
    }
}
