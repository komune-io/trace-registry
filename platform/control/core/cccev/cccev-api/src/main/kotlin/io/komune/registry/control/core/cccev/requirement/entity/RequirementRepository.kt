package io.komune.registry.control.core.cccev.requirement.entity

import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.Page
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
        rootRequirementId: RequirementId,
        withBadges: Boolean = false
    ): Requirement? = sessionFactory.session { session ->
        val query = """
            MATCH (root:${Requirement.LABEL} {id: ${'$'}id})
            -[has_requirement:${Requirement.HAS_REQUIREMENT}*0..]->(children:${Requirement.LABEL})
            ${if (withBadges) """
                OPTIONAL MATCH (root)-[root_has_badge:${Requirement.HAS_BADGE}]->(rootBadge:${Badge.LABEL})
                OPTIONAL MATCH (children)-[has_badge:${Requirement.HAS_BADGE}]->(childrenBadge:${Badge.LABEL})
            """ else ""}
            RETURN root, collect(distinct has_requirement), collect(distinct children)
            ${if (withBadges) """,
                collect(distinct root_has_badge), collect(distinct rootBadge), 
                collect(distinct has_badge), collect(distinct childrenBadge)
            """ 
            else ""}
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

    suspend fun pageShallow(
        type: String,
        offset: OffsetPagination? = null
    ): Page<Requirement> = sessionFactory.session { session ->
        val query = """
            MATCH (requirement:${Requirement.LABEL} {${Requirement::type.name}: ${'$'}type})
            RETURN requirement, COUNT(requirement) AS totalCount
            ORDER BY requirement.${Requirement::name.name} ASC
            ${offset?.let { "SKIP ${it.offset} LIMIT ${it.limit}" } ?: ""}
        """.trimIndent()

        session.query(query, mapOf("type" to type)).let { result ->
            val requirements = result.map { it["requirement"] as Requirement }
            val totalCount = result.firstOrNull()?.get("totalCount") as? Long ?: 0
            Page(items = requirements, total = totalCount.toInt())
        }
    }
}
