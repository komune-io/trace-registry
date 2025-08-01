package io.komune.registry.control.core.cccev.concept.entity

import io.komune.registry.control.core.cccev.unit.entity.DataUnit
import io.komune.registry.infra.neo4j.returnWholeEntity
import io.komune.registry.infra.neo4j.session
import io.komune.registry.s2.commons.model.InformationConceptId
import io.komune.registry.s2.commons.model.InformationConceptIdentifier
import org.neo4j.ogm.session.SessionFactory
import org.springframework.stereotype.Service

@Service
class InformationConceptRepository(
    private val sessionFactory: SessionFactory
) {
    suspend fun findById(id: InformationConceptId): InformationConcept? = sessionFactory.session { session ->
        session.query(
            "MATCH (ic:${InformationConcept.LABEL} {id: \$id})"
                .returnWholeEntity("ic"),
            mapOf("id" to id)
        ).map { it["ic"] as InformationConcept }
            .firstOrNull()
    }

    suspend fun findShallowById(id: InformationConceptId): InformationConcept? = sessionFactory.session { session ->
        session.queryForObject(
            InformationConcept::class.java,
            "MATCH (ic:${InformationConcept.LABEL} {id: \$id})" +
                    "\nRETURN ic",
            mapOf("id" to id)
        )
    }

    suspend fun findByIdentifier(identifier: InformationConceptIdentifier): InformationConcept? = sessionFactory.session { session ->
        session.query(
            "MATCH (ic:${InformationConcept.LABEL} {identifier: \$identifier})"
                .returnWholeEntity("ic"),
            mapOf("identifier" to identifier)
        ).map { it["ic"] as InformationConcept }
            .firstOrNull()
    }

    suspend fun findShallowByIdentifier(identifier: InformationConceptIdentifier): InformationConcept? = sessionFactory.session { session ->
        session.queryForObject(
            InformationConcept::class.java,
            "MATCH (ic:${InformationConcept.LABEL} {identifier: \$identifier})" +
                    "\nRETURN ic",
            mapOf("identifier" to identifier)
        )
    }

    suspend fun findDependingOn(
        identifier: InformationConceptIdentifier
    ): List<InformationConcept> = sessionFactory.session { session ->
        session.query(
            "MATCH (ic:${InformationConcept.LABEL})" +
                    "-[:${InformationConcept.DEPENDS_ON}]->(:${InformationConcept.LABEL} {identifier: \$identifier})" +
                    "\nMATCH (ic:${InformationConcept.LABEL})" +
                    "-[depends_on:${InformationConcept.DEPENDS_ON}]->(dep:${InformationConcept.LABEL})" +
                    "MATCH (ic)-[has_unit:${InformationConcept.HAS_UNIT}]->(du:${DataUnit.LABEL})\n" +
                    "\nRETURN ic, collect(depends_on), collect(dep), collect(has_unit), collect(du)",
            mapOf("identifier" to identifier)
        ).map { it["ic"] as InformationConcept }
    }
}
