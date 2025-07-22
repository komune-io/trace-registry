package io.komune.registry.core.cccev.unit.entity

import io.komune.registry.infra.neo4j.returnWholeEntity
import io.komune.registry.infra.neo4j.session
import io.komune.registry.s2.commons.model.DataUnitId
import io.komune.registry.s2.commons.model.DataUnitIdentifier
import org.neo4j.ogm.session.SessionFactory
import org.springframework.stereotype.Service

@Service
class DataUnitRepository(
    private val sessionFactory: SessionFactory
) {
    suspend fun findById(id: DataUnitId): DataUnit? = sessionFactory.session { session ->
        session.query(
            "MATCH (unit:${DataUnit.LABEL} {id: \$id})"
                .returnWholeEntity("unit"),
            mapOf("id" to id)
        ).map { it["unit"] as DataUnit }
            .firstOrNull()
    }

    suspend fun findByIdentifier(identifier: DataUnitIdentifier): DataUnit? = sessionFactory.session { session ->
        session.query(
            "MATCH (unit:${DataUnit.LABEL} {identifier: \$identifier})"
                .returnWholeEntity("unit"),
            mapOf("identifier" to identifier)
        ).map { it["unit"] as DataUnit }
            .firstOrNull()
    }
}
