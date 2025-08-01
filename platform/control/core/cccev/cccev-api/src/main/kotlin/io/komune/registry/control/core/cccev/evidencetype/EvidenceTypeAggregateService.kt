package io.komune.registry.control.core.cccev.evidencetype

import f2.spring.exception.NotFoundException
import io.komune.registry.control.core.cccev.concept.entity.InformationConceptRepository
import io.komune.registry.control.core.cccev.evidencetype.command.EvidenceTypeCreateCommand
import io.komune.registry.control.core.cccev.evidencetype.command.EvidenceTypeCreatedEvent
import io.komune.registry.control.core.cccev.evidencetype.entity.EvidenceType
import io.komune.registry.infra.neo4j.checkNotExists
import io.komune.registry.infra.neo4j.session
import org.neo4j.ogm.session.SessionFactory
import org.springframework.stereotype.Service
import java.util.UUID

@Service
class EvidenceTypeAggregateService(
    private val informationConceptRepository: InformationConceptRepository,
    private val sessionFactory: SessionFactory
) {
    suspend fun create(command: EvidenceTypeCreateCommand): EvidenceTypeCreatedEvent = sessionFactory.session { session ->
        command.identifier?.let { identifier ->
            session.checkNotExists<EvidenceType>(identifier, "EvidenceType")
        }

        val shallowConcepts = command.conceptIds.map { identifier ->
            informationConceptRepository.findShallowById(identifier)
                ?: throw NotFoundException("InformationConcept", identifier)
        }

        val evidenceType = EvidenceType().apply {
            id = UUID.randomUUID().toString()
            identifier = command.identifier ?: id
            name = command.name
            concepts = shallowConcepts.toMutableList()
        }
        session.save(evidenceType)

        EvidenceTypeCreatedEvent(evidenceType.id, evidenceType.identifier)
    }
}
