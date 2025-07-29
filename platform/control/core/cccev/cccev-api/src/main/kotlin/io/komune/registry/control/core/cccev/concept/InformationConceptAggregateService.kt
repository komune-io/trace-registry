package io.komune.registry.control.core.cccev.concept

import f2.spring.exception.NotFoundException
import io.komune.registry.control.core.cccev.concept.command.InformationConceptCreateCommand
import io.komune.registry.control.core.cccev.concept.command.InformationConceptCreatedEvent
import io.komune.registry.control.core.cccev.concept.command.InformationConceptUpdateCommand
import io.komune.registry.control.core.cccev.concept.command.InformationConceptUpdatedEvent
import io.komune.registry.control.core.cccev.concept.entity.InformationConcept
import io.komune.registry.control.core.cccev.unit.entity.DataUnit
import io.komune.registry.infra.neo4j.findSafeShallowAllById
import io.komune.registry.infra.neo4j.findSafeShallowById
import io.komune.registry.infra.neo4j.removeSeveredRelations
import io.komune.registry.infra.neo4j.transaction
import org.neo4j.ogm.session.SessionFactory
import org.springframework.context.ApplicationEventPublisher
import org.springframework.stereotype.Service
import java.util.UUID

@Service
class InformationConceptAggregateService(
    private val applicationEventPublisher: ApplicationEventPublisher,
    private val sessionFactory: SessionFactory
) {
    suspend fun create(command: InformationConceptCreateCommand) = sessionFactory.transaction { session, _ ->
        val dependencies = session.findSafeShallowAllById<InformationConcept>(command.dependsOn, InformationConcept.LABEL)
        val unit = session.findSafeShallowById<DataUnit>(command.hasUnit, DataUnit.LABEL)

        val concept = InformationConcept().apply {
            id = UUID.randomUUID().toString()
            identifier = (command.identifier ?: id).replace(Regex("[^a-zA-Z0-9]"), "_")
            name = command.name
            this.unit = unit
            description = command.description
            expressionOfExpectedValue = command.expressionOfExpectedValue
            this.dependencies = dependencies.toMutableList()
        }.also(session::save)

        InformationConceptCreatedEvent(concept.id)
            .also(applicationEventPublisher::publishEvent)
    }

    suspend fun update(command: InformationConceptUpdateCommand) = sessionFactory.transaction { session, _ ->
        val concept = session.load(InformationConcept::class.java, command.id as String, 1)
            ?: throw NotFoundException("InformationConcept", command.id)

        val dependencies = session.findSafeShallowAllById<InformationConcept>(command.dependsOn, InformationConcept.LABEL)

        session.removeSeveredRelations(
            InformationConcept.LABEL, command.id, InformationConcept.DEPENDS_ON, InformationConcept.LABEL,
            concept.dependencies.map { it.id }, command.dependsOn.toSet()
        )

        concept.apply {
            name = command.name
            description = command.description
            expressionOfExpectedValue = command.expressionOfExpectedValue
            this.dependencies = dependencies.toMutableList()
        }.also(session::save)

        InformationConceptUpdatedEvent(concept.id)
            .also(applicationEventPublisher::publishEvent)
    }
}
