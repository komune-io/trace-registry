package io.komune.registry.s2.cccev.domain

import io.komune.registry.s2.cccev.domain.command.concept.InformationConceptComputeValueCommand
import io.komune.registry.s2.cccev.domain.command.concept.InformationConceptComputedValueEvent
import io.komune.registry.s2.cccev.domain.command.concept.InformationConceptCreateCommand
import io.komune.registry.s2.cccev.domain.command.concept.InformationConceptCreatedEvent
import io.komune.registry.s2.cccev.domain.command.concept.InformationConceptDeleteCommand
import io.komune.registry.s2.cccev.domain.command.concept.InformationConceptDeletedEvent
import io.komune.registry.s2.cccev.domain.command.concept.InformationConceptUpdateCommand
import kotlinx.serialization.Serializable
import s2.dsl.automate.S2Role
import s2.dsl.automate.S2State
import s2.dsl.automate.builder.s2Sourcing

val s2InformationConcept = s2Sourcing {
    name = "InformationConcept"
    init<InformationConceptCreateCommand, InformationConceptCreatedEvent> {
        to = InformationConceptState.ACTIVE
        role = InformationConceptRole.User
    }
    selfTransaction<InformationConceptUpdateCommand, InformationConceptCreatedEvent> {
        states += InformationConceptState.ACTIVE
        role = InformationConceptRole.User
    }
    selfTransaction<InformationConceptComputeValueCommand, InformationConceptComputedValueEvent> {
        states += InformationConceptState.ACTIVE
        role = InformationConceptRole.User
    }
    transaction<InformationConceptDeleteCommand, InformationConceptDeletedEvent> {
        from = InformationConceptState.ACTIVE
        to = InformationConceptState.DELETED
        role = InformationConceptRole.User
    }
}

/**
 * @d2 automate
 * @visual automate platform/api/api-init/build/s2-documenter/InformationConcept.json
 * @order 1
 * @title InformationConcept States
 */
@Serializable
enum class InformationConceptState(override val position: Int): S2State {
    /**
     * The concept is available for use.
     */
    ACTIVE(0),

    /**
     * The concept has been deleted and is no longer available.
     */
    DELETED(1)
}

enum class InformationConceptRole(val value: String): S2Role {
    User("User");
    override fun toString() = value
}
