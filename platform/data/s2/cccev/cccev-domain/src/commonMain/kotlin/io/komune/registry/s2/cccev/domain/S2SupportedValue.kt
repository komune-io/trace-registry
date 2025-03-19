package io.komune.registry.s2.cccev.domain

import io.komune.registry.s2.cccev.domain.command.value.SupportedValueCreateCommand
import io.komune.registry.s2.cccev.domain.command.value.SupportedValueCreatedEvent
import io.komune.registry.s2.cccev.domain.command.value.SupportedValueDeprecateCommand
import io.komune.registry.s2.cccev.domain.command.value.SupportedValueDeprecatedEvent
import io.komune.registry.s2.cccev.domain.command.value.SupportedValueValidateCommand
import io.komune.registry.s2.cccev.domain.command.value.SupportedValueValidatedEvent
import kotlinx.serialization.Serializable
import s2.dsl.automate.S2Role
import s2.dsl.automate.S2State
import s2.dsl.automate.builder.s2Sourcing

val s2SupportedValue = s2Sourcing {
    name = "SupportedValue"
    init<SupportedValueCreateCommand, SupportedValueCreatedEvent> {
        to = SupportedValueState.COMPUTED
        role = SupportedValueRole.User
    }
    transaction<SupportedValueValidateCommand, SupportedValueValidatedEvent> {
        from = SupportedValueState.COMPUTED
        to = SupportedValueState.VALIDATED
        role = SupportedValueRole.User
    }
    transaction<SupportedValueDeprecateCommand, SupportedValueDeprecatedEvent> {
        froms += SupportedValueState.COMPUTED
        froms += SupportedValueState.VALIDATED
        to = SupportedValueState.DEPRECATED
        role = SupportedValueRole.User
    }
}

/**
 * @d2 automate
 * @visual automate platform/api/api-init/build/s2-documenter/SupportedValue.json
 * @order 1
 * @title SupportedValue States
 */
@Serializable
enum class SupportedValueState(override val position: Int): S2State {
    COMPUTED(0),
    VALIDATED(1),
    DEPRECATED(2)
}

enum class SupportedValueRole(val value: String): S2Role {
    User("User");
    override fun toString() = value
}
