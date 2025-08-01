package io.komune.registry.control.core.cccev.evidencetype.entity

import io.komune.registry.infra.neo4j.returnWholeEntity
import io.komune.registry.infra.neo4j.session
import io.komune.registry.s2.commons.model.EvidenceTypeId
import io.komune.registry.s2.commons.model.EvidenceTypeIdentifier
import org.neo4j.ogm.session.SessionFactory
import org.springframework.stereotype.Service

@Service
class EvidenceTypeRepository(
    private val sessionFactory: SessionFactory
) {
    suspend fun findById(id: EvidenceTypeId): EvidenceType? = sessionFactory.session { session ->
        session.query(
            "MATCH (et:${EvidenceType.LABEL} {id: \$id})"
                .returnWholeEntity("et"),
            mapOf("id" to id)
        ).map { it["et"] as EvidenceType }
            .firstOrNull()
    }

    suspend fun findByIdentifier(identifier: EvidenceTypeIdentifier): EvidenceType? = sessionFactory.session { session ->
        session.query(
            "MATCH (et:${EvidenceType.LABEL} {identifier: \$identifier})"
                .returnWholeEntity("et"),
            mapOf("identifier" to identifier)
        ).map { it["et"] as EvidenceType }
            .firstOrNull()
    }
}
