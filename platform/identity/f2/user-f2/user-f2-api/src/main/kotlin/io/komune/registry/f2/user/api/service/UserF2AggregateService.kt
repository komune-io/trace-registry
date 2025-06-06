package io.komune.registry.f2.user.api.service

import f2.dsl.fnc.invokeWith
import io.komune.im.f2.organization.domain.command.OrganizationCreateCommand
import io.komune.im.f2.organization.domain.command.OrganizationDeleteCommand
import io.komune.im.f2.organization.domain.query.OrganizationPageQuery
import io.komune.im.f2.user.domain.command.UserCreateCommand
import io.komune.im.f2.user.domain.command.UserDeleteCommand
import io.komune.im.f2.user.domain.query.UserGetByEmailQuery
import io.komune.registry.api.commons.exception.OrganizationNameAlreadyExistsException
import io.komune.registry.api.commons.exception.OrganizationNameIsEmptyException
import io.komune.registry.api.commons.exception.UserEmailAlreadyExistsException
import io.komune.registry.api.commons.exception.UserUnacceptedTermsException
import io.komune.registry.f2.user.api.config.OnboardingConfig
import io.komune.registry.f2.user.domain.command.UserOnboardCommandDTOBase
import io.komune.registry.f2.user.domain.command.UserOnboardedEventDTOBase
import io.komune.registry.infra.brevo.config.BrevoClient
import io.komune.registry.infra.brevo.config.BrevoContact
import io.komune.registry.infra.im.ImClient
import io.komune.registry.s2.commons.model.OrganizationId
import io.komune.registry.s2.commons.model.UserId
import org.springframework.stereotype.Service
import s2.spring.utils.logger.Logger

@Service
class UserF2AggregateService(
    private val brevoClient: BrevoClient,
    private val imClient: ImClient,
    private val onboardingConfig: OnboardingConfig
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

        val trimmedOrganizationName = command.organizationName.trim()
        if (trimmedOrganizationName.isEmpty()) {
            throw OrganizationNameIsEmptyException()
        }

        val organizationNameAlreadyExists = OrganizationPageQuery(
            name = trimmedOrganizationName,
            offset = null,
            limit = null
        ).invokeWith(imClient.organization.organizationPage())
            .items.any { it.name.length == trimmedOrganizationName.length }

        if (organizationNameAlreadyExists) {
            throw OrganizationNameAlreadyExistsException(trimmedOrganizationName)
        }

        context.organizationId = OrganizationCreateCommand(
            name = trimmedOrganizationName,
            roles = onboardingConfig.defaultOrganizationRoles
        ).invokeWith(imClient.organization.organizationCreate()).id

        context.userId = UserCreateCommand(
            email = command.email,
            password = command.password,
            memberOf = context.organizationId,
            roles = onboardingConfig.defaultUserRoles,
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
                organization = trimmedOrganizationName
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
            context.userId?.let {
                UserDeleteCommand(it).invokeWith(imClient.user.userDelete())
            }
            context.organizationId?.let {
                OrganizationDeleteCommand(it).invokeWith(imClient.organization.organizationDelete())
            }
            throw e
        }
    }

    private class OnboardingContext {
        var organizationId: OrganizationId? = null
        var userId: UserId? = null
    }
}
