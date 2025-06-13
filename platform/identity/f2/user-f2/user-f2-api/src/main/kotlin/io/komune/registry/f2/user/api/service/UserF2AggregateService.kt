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
import io.komune.registry.infra.slack.SlackService
import io.komune.registry.s2.commons.model.OrganizationId
import io.komune.registry.s2.commons.model.UserId
import org.springframework.stereotype.Service
import s2.spring.utils.logger.Logger

@Service
class UserF2AggregateService(
    private val brevoClient: BrevoClient,
    private val imClient: ImClient,
    private val onboardingConfig: OnboardingConfig,
    private val slackService: SlackService
) {
    private val logger by Logger()

    suspend fun onboardUser(command: UserOnboardCommandDTOBase, sessionId: String) = onboard(sessionId) { context ->
        context.command = command
        if (!command.acceptTermsOfUse || command.acceptChart100M == false) {
            throw UserUnacceptedTermsException()
        }

        val existingUser = UserGetByEmailQuery(command.email)
            .invokeWith(imClient.user.userGetByEmail())
            .item
        if (existingUser != null) {
            throw UserEmailAlreadyExistsException(command.email)
        }

        val trimmedOrganizationName = command.organizationName.trim()
        checkOrganizationName(trimmedOrganizationName)

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
            attributes = listOfNotNull(
                command.joinReason?.let { command::joinReason.name to it },
                command::acceptTermsOfUse.name to command.acceptTermsOfUse.toString(),
                command.acceptChart100M?.let { command::acceptChart100M.name to it.toString() },
                command::acceptNewsletter.name to command.acceptNewsletter.toString()
            ).toMap(),
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

    private suspend fun <R> onboard(sessionId: String, block: suspend (OnboardingContext) -> R): R {
        val context = OnboardingContext()
        try {
            return block(context)
        } catch (e: Exception) {
            logger.info("[$sessionId] Error while onboarding, rolling back...")
            context.userId?.let {
                UserDeleteCommand(it).invokeWith(imClient.user.userDelete())
            }
            context.organizationId?.let {
                OrganizationDeleteCommand(it).invokeWith(imClient.organization.organizationDelete())
            }
            @Suppress("InstanceOfCheckForException")
            if (e !is OrganizationNameAlreadyExistsException && e !is UserEmailAlreadyExistsException) {
                slackService.sendMessages(
                    true,
                    "⚠ *Onboarding error*: `$sessionId`",
                    "```${context.command.copy(password = "********")}```",
                    "```${e.message}\n${e.stackTraceToString()}```"
                )
            }
            throw e
        }
    }

    private suspend fun checkOrganizationName(name: String) {
        if (name.isEmpty()) {
            throw OrganizationNameIsEmptyException()
        }

        val organizationNameAlreadyExists = OrganizationPageQuery(
            name = name,
            offset = null,
            limit = null
        ).invokeWith(imClient.organization.organizationPage())
            .items.any { it.name.length == name.length }

        if (organizationNameAlreadyExists) {
            throw OrganizationNameAlreadyExistsException(name)
        }
    }

    private class OnboardingContext {
        lateinit var command: UserOnboardCommandDTOBase
        var organizationId: OrganizationId? = null
        var userId: UserId? = null
    }
}
