package io.komune.registry.core.cccev.evidencetype.entity

import io.komune.registry.infra.neo4j.returnWholeEntity
import io.komune.registry.infra.neo4j.session
import io.komune.registry.s2.commons.model.EvidenceTypeId
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
}
