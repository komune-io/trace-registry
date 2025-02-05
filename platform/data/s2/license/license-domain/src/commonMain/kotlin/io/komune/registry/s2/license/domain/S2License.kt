package io.komune.registry.s2.license.domain

import io.komune.registry.s2.license.domain.command.LicenseCreateCommand
import io.komune.registry.s2.license.domain.command.LicenseCreatedEvent
import io.komune.registry.s2.license.domain.command.LicenseUpdateCommand
import io.komune.registry.s2.license.domain.command.LicenseUpdatedEvent
import kotlinx.serialization.Serializable
import s2.dsl.automate.S2Role
import s2.dsl.automate.S2State
import s2.dsl.automate.builder.s2Sourcing

val s2License = s2Sourcing {
    name = "License"
    init<LicenseCreateCommand, LicenseCreatedEvent> {
        to = LicenseState.ACTIVE
        role = LicenseRole.User
    }
    selfTransaction<LicenseUpdateCommand, LicenseUpdatedEvent> {
        states += LicenseState.ACTIVE
        role = LicenseRole.User
    }
}

/**
 * @d2 hidden
 * @visual json "bcb704e1-d7ce-42b6-b9db-5e407562583e"
 */
typealias LicenseId = String

/**
 * @d2 hidden
 * @visual json "mit"
 */
typealias LicenseIdentifier = String

/**
 * @d2 automate
 * @visual automate platform/api/api-init/build/s2-documenter/License.json
 * @order 1
 * @title License States
 */
@Serializable
enum class LicenseState(override val position: Int): S2State {
    /**
     * The license is available for use.
     */
    ACTIVE(0),

    /**
     * The license has been deleted and is no longer available.
     */
    DELETED(1)
}

enum class LicenseRole(val value: String): S2Role {
    User("User");
    override fun toString() = value
}
