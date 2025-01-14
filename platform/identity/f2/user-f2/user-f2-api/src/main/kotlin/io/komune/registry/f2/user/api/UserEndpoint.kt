package io.komune.registry.f2.user.api

import f2.dsl.fnc.f2Function
import io.komune.registry.f2.user.api.service.UserF2AggregateService
import io.komune.registry.f2.user.domain.command.UserOnboardFunction
import jakarta.annotation.security.PermitAll
import org.springframework.context.annotation.Bean
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import s2.spring.utils.logger.Logger


/**
 * @d2 api
 * @parent [io.komune.registry.f2.user.domain.D2UserPage]
 */
@RestController
@RequestMapping
class UserEndpoint(
    private val userF2AggregateService: UserF2AggregateService
) {
    private val logger by Logger()

    /** Sign up a user and initialize their organization. */
    @PermitAll
    @Bean
    fun userOnboard(): UserOnboardFunction = f2Function { command ->
        logger.info("userOnboard: ${command.copy(password = "*****")}")
        userF2AggregateService.onboardUser(command)
    }
}
