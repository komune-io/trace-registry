package cccev.core.requirement

import cccev.infra.neo4j.session
import cccev.projection.api.entity.concept.InformationConceptEntity
import cccev.projection.api.entity.requirement.RequirementEntity
import cccev.s2.requirement.domain.model.RequirementIdentifier
import org.neo4j.ogm.session.SessionFactory
import org.springframework.stereotype.Service

@Service
class RequirementRepository2(
    private val sessionFactory: SessionFactory
) {

    suspend fun loadRequirementOnlyGraph(
        rootRequirementIdentifier: RequirementIdentifier
    ): RequirementEntity? = sessionFactory.session { session ->
        val query = """
            MATCH (root:${RequirementEntity.LABEL})
            -[has_requirement:${RequirementEntity.HAS_REQUIREMENT}*0..]->(children:${RequirementEntity.LABEL})
            WHERE root.${RequirementEntity::identifier.name} = ${'$'}identifier
            RETURN root, collect(has_requirement), collect(children)
        """.trimIndent()

        session.query(query, mapOf("identifier" to rootRequirementIdentifier))
            .map { it["root"] as RequirementEntity }
            .firstOrNull()
    }

    suspend fun hasAnyConcept(requirementIdentifier: RequirementIdentifier): Boolean = sessionFactory.session { session ->
        session.queryForObject(
            java.lang.Boolean::class.java,
            "RETURN EXISTS( " +
                    "(:${RequirementEntity.LABEL} {identifier: \$identifier})" +
                    "-[:${RequirementEntity.HAS_CONCEPT}]->(:${InformationConceptEntity.LABEL})" +
                    ")",
            mapOf("identifier" to requirementIdentifier)
        ).booleanValue()
    }
}
