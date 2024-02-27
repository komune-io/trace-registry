package cccev.core.concept

import cccev.infra.neo4j.session
import cccev.projection.api.entity.concept.InformationConceptEntity
import cccev.projection.api.entity.unit.DataUnitEntity
import cccev.projection.api.entity.unit.DataUnitOptionEntity
import cccev.s2.concept.domain.InformationConceptIdentifier
import org.neo4j.ogm.session.SessionFactory
import org.springframework.stereotype.Service

@Service
class InformationConceptRepository2(
    private val sessionFactory: SessionFactory
) {
    suspend fun findById(id: String, depth: Int = -1): InformationConceptEntity? = sessionFactory.session { session ->
        session.load(InformationConceptEntity::class.java, id, depth)
    }

    suspend fun findByIdentifier(identifier: InformationConceptIdentifier): InformationConceptEntity? = sessionFactory.session { session ->
        session.queryForObject(
            InformationConceptEntity::class.java,
            "MATCH (ic:${InformationConceptEntity.LABEL} {identifier: \$identifier})" +
                    "\nOPTIONAL MATCH (ic)-[depends_on:${InformationConceptEntity.DEPENDS_ON}*0..]->(dep:${InformationConceptEntity.LABEL})\n" +
                    "\nOPTIONAL MATCH (ic)-[has_unit:${InformationConceptEntity.HAS_UNIT}]->(du:${DataUnitEntity.LABEL})\n" +
                    "\nOPTIONAL MATCH (du)-[has_option:${DataUnitEntity.HAS_OPTION}]->(duo:${DataUnitOptionEntity.LABEL})\n" +
                    "\nOPTIONAL MATCH (dep)-[has_unit_dep:${InformationConceptEntity.HAS_UNIT}]->(du_dep:${DataUnitEntity.LABEL})\n" +
                    "\nOPTIONAL MATCH (du_dep)-[has_option_dep:${DataUnitEntity.HAS_OPTION}]->(duo_dep:${DataUnitOptionEntity.LABEL})\n" +
                    "\nRETURN ic, collect(depends_on), collect(dep), collect(has_unit), collect(du), collect(has_option), collect(duo), " +
                    "collect(has_unit_dep), collect(du_dep), collect(has_option_dep), collect(duo_dep)",
            mapOf("identifier" to identifier)
        )
    }

    suspend fun findDependingOn(identifier: InformationConceptIdentifier): List<InformationConceptEntity> = sessionFactory.session { session ->
        session.query(
            "MATCH (ic:${InformationConceptEntity.LABEL})" +
                    "-[:${InformationConceptEntity.DEPENDS_ON}]->(:${InformationConceptEntity.LABEL} {identifier: \$identifier})" +
                    "\nMATCH (ic:${InformationConceptEntity.LABEL})" +
                    "-[depends_on:${InformationConceptEntity.DEPENDS_ON}]->(dep:${InformationConceptEntity.LABEL})" +
                    "MATCH (ic)-[has_unit:${InformationConceptEntity.HAS_UNIT}]->(du:${DataUnitEntity.LABEL})\n" +
                    "\nRETURN ic, collect(depends_on), collect(dep), collect(has_unit), collect(du)",
            mapOf("identifier" to identifier)
        ).map { it["ic"] as InformationConceptEntity }
    }

    suspend fun save(entity: InformationConceptEntity, depth: Int = -1) = sessionFactory.session { session ->
        session.save(entity, depth)
    }
}
