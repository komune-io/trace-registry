package io.komune.registry.control.core.cccev.requirement.entity

import io.komune.registry.control.core.cccev.concept.entity.InformationConcept
import io.komune.registry.infra.neo4j.returnWholeEntity
import io.komune.registry.infra.neo4j.session
import io.komune.registry.s2.commons.model.RequirementId
import io.komune.registry.s2.commons.model.RequirementIdentifier
import org.neo4j.ogm.session.SessionFactory
import org.springframework.stereotype.Service

@Service
class RequirementRepository(
    private val sessionFactory: SessionFactory
) {
    suspend fun findById(id: RequirementId): Requirement? = sessionFactory.session { session ->
        session.query(
            "MATCH (requirement:${Requirement.LABEL} {id: \$id})"
                .returnWholeEntity("requirement"),
            mapOf("id" to id)
        ).map { it["requirement"] as Requirement }
            .firstOrNull()
    }

    suspend fun findShallowById(id: RequirementId): Requirement? = sessionFactory.session { session ->
        session.queryForObject(
            Requirement::class.java,
            "MATCH (requirement:${Requirement.LABEL} {id: \$id})" +
                    "\nRETURN requirement",
            mapOf("id" to id)
        )
    }

    suspend fun findByIdentifier(identifier: RequirementIdentifier): Requirement? = sessionFactory.session { session ->
        session.query(
            "MATCH (requirement:${Requirement.LABEL} {identifier: \$identifier})"
                .returnWholeEntity("requirement"),
            mapOf("identifier" to identifier)
        ).map { it["requirement"] as Requirement }
            .firstOrNull()
    }

    suspend fun loadRequirementOnlyGraph(
        rootRequirementId: RequirementId
    ): Requirement? = sessionFactory.session { session ->
        val query = """
            MATCH (root:${Requirement.LABEL})
            -[has_requirement:${Requirement.HAS_REQUIREMENT}*0..]->(children:${Requirement.LABEL})
            WHERE root.${Requirement::id.name} = ${'$'}id
            RETURN root, collect(has_requirement), collect(children)
        """.trimIndent()

        session.query(query, mapOf("id" to rootRequirementId))
            .map { it["root"] as Requirement }
            .firstOrNull()
    }

    suspend fun hasAnyConcept(requirementIdentifier: RequirementIdentifier): Boolean = sessionFactory.session { session ->
        session.queryForObject(
            java.lang.Boolean::class.java,
            "RETURN EXISTS( " +
                    "(:${Requirement.LABEL} {identifier: \$identifier})" +
                    "-[:${Requirement.HAS_CONCEPT}]->(:${InformationConcept.LABEL})" +
                    ")",
            mapOf("identifier" to requirementIdentifier)
        ).booleanValue()
    }
}
