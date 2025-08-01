package io.komune.registry.s2.cccev.domain

import io.komune.registry.s2.cccev.domain.command.unit.DataUnitCreateCommand
import io.komune.registry.s2.cccev.domain.command.unit.DataUnitCreatedEvent
import kotlinx.serialization.Serializable
import s2.dsl.automate.S2Role
import s2.dsl.automate.S2State
import s2.dsl.automate.builder.s2Sourcing

val s2DataUnit = s2Sourcing {
    name = "DataUnit"
    init<DataUnitCreateCommand, DataUnitCreatedEvent> {
        to = DataUnitState.CREATED
        role = DataUnitRole.User
    }
}

/**
 * @d2 automate
 * @visual automate platform/api/api-init/build/s2-documenter/DataUnit.json
 * @order 1
 * @title DataUnit States
 */
@Serializable
enum class DataUnitState(override val position: Int): S2State {
    CREATED(0),
    DELETED(1)
}

enum class DataUnitRole(val value: String): S2Role {
    User("User");
    override fun toString() = value
}
