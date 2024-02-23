package cccev.s2.concept.domain

import cccev.s2.concept.domain.command.InformationConceptCreateCommand
import cccev.s2.concept.domain.command.InformationConceptCreatedEvent
import cccev.s2.concept.domain.command.InformationConceptUpdateCommand
import cccev.s2.concept.domain.command.InformationConceptUpdatedEvent

interface InformationConceptAggregate {
    suspend fun create(command: InformationConceptCreateCommand): InformationConceptCreatedEvent
    suspend fun update(command: InformationConceptUpdateCommand): InformationConceptUpdatedEvent
}
