package cccev.core.certification.entity

import cccev.core.certification.model.CertificationId
import cccev.core.certification.model.RequirementCertificationId
import cccev.core.concept.entity.InformationConcept
import cccev.core.concept.model.InformationConceptIdentifier
import cccev.core.requirement.entity.Requirement
import cccev.infra.neo4j.session
import cccev.projection.api.entity.unit.DataUnitEntity
import org.neo4j.ogm.session.SessionFactory
import org.springframework.stereotype.Service

@Service
class CertificationRepository(
    private val sessionFactory: SessionFactory
) {
    suspend fun findById(id: CertificationId): Certification? = sessionFactory.session { session ->
        session.queryForObject(
            Certification::class.java,
            "MATCH (c:${Certification.LABEL} {id: \$id})" +
                    "\nCALL apoc.path.subgraphAll(c, {})" +
                    "\nYIELD nodes, relationships" +
                    "\nRETURN nodes, relationships",
            mapOf("id" to id)
        )
    }

    suspend fun hasRequirementCertification(
        certificationId: String, requirementCertificationId: String
    ): Boolean = sessionFactory.session { session ->
        session.queryForObject(
            java.lang.Boolean::class.java,
            "RETURN EXISTS(" +
                    "(c:${Certification.LABEL} {id: \$cId})" +
                    "-[:${RequirementCertification.IS_CERTIFIED_BY}*1..]->(rc:${RequirementCertification.LABEL} {id: \$rcId})" +
                    ")",
            mapOf("cId" to certificationId, "rcId" to requirementCertificationId)
        ).booleanValue()
    }

    suspend fun findRequirementCertificationsLinkedToInformationConcept(
        certificationId: CertificationId,
        rootRequirementCertificationId: RequirementCertificationId?,
        informationConceptIdentifier: InformationConceptIdentifier
    ): List<RequirementCertification> = sessionFactory.session { session ->
        session.query(
            "MATCH (c:${Certification.LABEL} {id: \$cId})" +
                    (if (rootRequirementCertificationId != null) {
                        "-[:${RequirementCertification.IS_CERTIFIED_BY}*1..]->(:${RequirementCertification.LABEL} {id: \$rcId})"
                    } else { "" }) +
                    "-[:${RequirementCertification.IS_CERTIFIED_BY}*0..]->(rc:${RequirementCertification.LABEL})" +
                    "-[certifies:${RequirementCertification.CERTIFIES}]->(r:${Requirement.LABEL})" +
                    "-->(:${InformationConcept.LABEL} {identifier: \$icId})" +
                    "\nOPTIONAL MATCH (rc)" +
                    "-[uses_value:${RequirementCertification.USES_VALUE}]->(sv:${SupportedValue.LABEL})" +
                    "-[provides_value_for:${SupportedValue.PROVIDES_VALUE_FOR}]->(ic:${InformationConcept.LABEL})" +
                    "\nOPTIONAL MATCH (rc)" +
                    "-[is_certified_by:${RequirementCertification.IS_CERTIFIED_BY}*0..]->(dependency:${RequirementCertification.LABEL})" +
                    "-[dependency_certifies:${RequirementCertification.CERTIFIES}]->(dependency_requirement:${Requirement.LABEL})" +
                    "\nOPTIONAL MATCH (r)-[r_uses_concept]->(r_ic:${InformationConcept.LABEL})" +
                    "\nRETURN rc, collect(certifies), collect(r), collect(is_certified_by), collect(dependency), collect(uses_value), " +
                    "collect(sv), collect(provides_value_for), collect(ic), collect(r_uses_concept), collect(r_ic), " +
                    "collect(dependency_certifies), collect(dependency_requirement)",
            mapOf("cId" to certificationId, "rcId" to rootRequirementCertificationId, "icId" to informationConceptIdentifier),
        ).map { it["rc"] as RequirementCertification }
    }

    suspend fun findParentsOf(
        requirementCertificationId: RequirementCertificationId
    ): List<RequirementCertification> = sessionFactory.session { session ->
        session.query(
            "MATCH (rc:${RequirementCertification.LABEL} {id: \$rcId})" +
                    "<-[:${RequirementCertification.IS_CERTIFIED_BY}]-(parent:${RequirementCertification.LABEL})" +
                    "\nMATCH (parent)" +
                    "-[is_certified_by:${RequirementCertification.IS_CERTIFIED_BY}]->(child:${RequirementCertification.LABEL})" +
                    "\nMATCH (parent)-[certifies:${RequirementCertification.CERTIFIES}]->(r:${Requirement.LABEL})" +
                    "\nOPTIONAL MATCH (r)-[r_has_concept:${Requirement.HAS_CONCEPT}]->(r_ic:${InformationConcept.LABEL})" +
                    "\nMATCH (child)-[child_certifies:${RequirementCertification.CERTIFIES}]->(child_r:${Requirement.LABEL})" +
                    "\nOPTIONAL MATCH (rc)" +
                    "-[uses_value:${RequirementCertification.USES_VALUE}]->(sv:${SupportedValue.LABEL})" +
                    "-[provides_value_for:${SupportedValue.PROVIDES_VALUE_FOR}]->(ic:${InformationConcept.LABEL})" +
                    "\nRETURN parent, collect(certifies), collect(r), collect(is_certified_by), collect(child), collect(uses_value), " +
                    "collect(sv), collect(provides_value_for), collect(ic), collect(child_certifies), collect(child_r), " +
                    "collect(r_has_concept), collect(r_ic)",
            mapOf("rcId" to requirementCertificationId)
        ).map { it["parent"] as RequirementCertification }
    }

    suspend fun findAllSupportedValues(
        certificationId: CertificationId,
        rootRequirementCertificationId: RequirementCertificationId?
    ): List<SupportedValue> = sessionFactory.session { session ->
        session.query(
            "MATCH (c:${Certification.LABEL} {id: \$cId})" +
                    (if (rootRequirementCertificationId != null) {
                        "-[:${RequirementCertification.IS_CERTIFIED_BY}*1..]->(:${RequirementCertification.LABEL} {id: \$rcId})"
                    } else { "" }) +
                    "-[:${RequirementCertification.IS_CERTIFIED_BY}*0..]->(rc:${RequirementCertification.LABEL})" +
                    "-[uses_value:${RequirementCertification.USES_VALUE}]->(sv:${SupportedValue.LABEL})" +
                    "-[provides_value_for:${SupportedValue.PROVIDES_VALUE_FOR}]->(ic:${InformationConcept.LABEL})" +
                    "-[has_unit:${InformationConcept.HAS_UNIT}]->(du:${DataUnitEntity.LABEL})" +
                    "\nRETURN sv, collect(provides_value_for), collect(ic), collect(has_unit), collect(du)",
            mapOf("cId" to certificationId, "rcId" to rootRequirementCertificationId)
        ).map { it["sv"] as SupportedValue }
    }

    suspend fun save(entity: Certification, depth: Int = -1) = sessionFactory.session { session ->
        session.save(entity, depth)
    }

    suspend fun save(entity: RequirementCertification, depth: Int = -1) = sessionFactory.session { session ->
        session.save(entity)
    }
}
