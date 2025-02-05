package io.komune.registry.s2.concept.domain

import io.komune.registry.s2.concept.domain.command.ConceptCreateCommand
import io.komune.registry.s2.concept.domain.command.ConceptCreatedEvent
import io.komune.registry.s2.concept.domain.command.ConceptUpdateCommand
import io.komune.registry.s2.concept.domain.command.ConceptUpdatedEvent
import kotlinx.serialization.Serializable
import s2.dsl.automate.S2Role
import s2.dsl.automate.S2State
import s2.dsl.automate.builder.s2Sourcing

val s2Concept = s2Sourcing {
    name = "Concept"
    init<ConceptCreateCommand, ConceptCreatedEvent> {
        to = ConceptState.ACTIVE
        role = ConceptRole.User
    }
    selfTransaction<ConceptUpdateCommand, ConceptUpdatedEvent> {
        states += ConceptState.ACTIVE
        role = ConceptRole.User
    }
}

/**
 * @d2 hidden
 * @visual json "91090e38-ec82-4d0b-9aad-93ca82096ee3"
 */
typealias ConceptId = String

/**
 * @d2 hidden
 * @visual json "0af11d18-8fc8-418f-877f-154cc41b39db"
 */
typealias ConceptIdentifier = String

/**
 * @d2 automate
 * @visual automate platform/api/api-init/build/s2-documenter/Concept.json
 * @order 1
 * @title Concept States
 */
@Serializable
enum class ConceptState(override val position: Int): S2State {
    /**
     * The concept is available for use.
     */
    ACTIVE(0),

    /**
     * The concept has been deleted and is no longer available.
     */
    DELETED(1)
}

enum class ConceptRole(val value: String): S2Role {
    User("User");
    override fun toString() = value
}
