package io.komune.registry.control.core.cccev.certification.entity

import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.Page
import io.komune.im.commons.model.OrganizationId
import io.komune.registry.control.core.cccev.certification.CertificationState
import io.komune.registry.control.core.cccev.concept.entity.InformationConcept
import io.komune.registry.control.core.cccev.evidencetype.entity.EvidenceType
import io.komune.registry.control.core.cccev.requirement.entity.Badge
import io.komune.registry.control.core.cccev.requirement.entity.Requirement
import io.komune.registry.control.core.cccev.unit.entity.DataUnit
import io.komune.registry.infra.neo4j.findById
import io.komune.registry.infra.neo4j.returnWholeEntity
import io.komune.registry.infra.neo4j.session
import io.komune.registry.s2.commons.model.CertificationId
import io.komune.registry.s2.commons.model.EvidenceId
import io.komune.registry.s2.commons.model.EvidenceTypeId
import io.komune.registry.s2.commons.model.EvidenceTypeIdentifier
import io.komune.registry.s2.commons.model.InformationConceptIdentifier
import io.komune.registry.s2.commons.model.RequirementCertificationId
import io.komune.registry.s2.commons.model.SupportedValueId
import org.neo4j.ogm.session.SessionFactory
import org.springframework.stereotype.Service

@Service
class CertificationRepository(
    private val sessionFactory: SessionFactory
) {
    suspend fun findById(id: CertificationId): Certification? = sessionFactory.session { session ->
        session.findById<Certification>(id, Certification.LABEL)
    }

    suspend fun findByIdWithRootRequirements(
        id: CertificationId
    ): Certification? = findAllByIdWithRootRequirements(listOf(id)).items.firstOrNull()

    suspend fun findAllByIdWithRootRequirements(
        ids: Collection<CertificationId>? = null,
        requirementName: String? = null,
        statuses: Collection<CertificationState>? = null,
        creatorOrganizationId: OrganizationId? = null,
        offset: OffsetPagination? = null
    ): Page<Certification> = sessionFactory.session { session ->
        val filters = listOfNotNull(
            ids?.let { "c.id IN \$ids" },
            requirementName?.let { "lower(r.name) CONTAINS lower(\$requirementName)" },
            statuses?.let { "c.status IN \$statuses" },
            creatorOrganizationId?.let { "c.creatorOrganizationId = \$creatorOrganizationId" }
        ).ifEmpty { null }?.joinToString(" AND ", prefix = "WHERE ").orEmpty()

        val params = mutableMapOf(
            "ids" to ids,
            "requirementName" to requirementName,
            "statuses" to statuses,
            "creatorOrganizationId" to creatorOrganizationId
        )

        val queryPart = "MATCH (c:${Certification.LABEL})" +
                "-[isCertifiedBy:${Certification.IS_CERTIFIED_BY}]->(rc:${RequirementCertification.LABEL})" +
                "-[certifies:${RequirementCertification.CERTIFIES}]->(r:${Requirement.LABEL})" +
                "\n$filters"

        val items = session.query(queryPart +
                "\nRETURN distinct c, collect(isCertifiedBy), collect(distinct rc), collect(certifies), collect(distinct r)" +
                offset?.let { "\nSKIP \$skip\nLIMIT \$limit" }.orEmpty(),
            params + mapOf(
                "skip" to offset?.offset,
                "limit" to offset?.limit
            )
        ).map { it["c"] as Certification }

        if (offset == null) {
            return@session Page(
                items = items,
                total = items.size
            )
        }

        Page(
            items = items,
            total = session.queryForObject(
                java.lang.Long::class.java,
                "$queryPart\nRETURN count(distinct c) AS count",
                params
            )?.toInt() ?: 0
        )
    }

    suspend fun findRequirementCertificationById(
        id: RequirementCertificationId
    ): RequirementCertification? = sessionFactory.session { session ->
        session.findById<RequirementCertification>(id, RequirementCertification.LABEL)
    }

    suspend fun findSupportedValueById(id: SupportedValueId): SupportedValue? = sessionFactory.session { session ->
        session.findById<SupportedValue>(id, SupportedValue.LABEL)
    }

    suspend fun findEvidenceById(id: EvidenceId): Evidence? = sessionFactory.session { session ->
        session.findById<Evidence>(id, Evidence.LABEL)
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
    ): List<RequirementCertification> = findFilteredRequirementCertifications(
        certificationId,
        rootRequirementCertificationId,
        """
        WHERE (r)-->(:${InformationConcept.LABEL} {identifier: \${'$'}icId}))
        OR (r)-[:${Requirement.HAS_BADGE}]->(:${Badge.LABEL})-[:${Badge.IS_BASED_ON}]
            ->(:${InformationConcept.LABEL} {identifier: \${'$'}icId}))
        """.trimIndent(),
        mapOf("icId" to informationConceptIdentifier)
    )

    suspend fun findRequirementCertificationsLinkedToEvidenceType(
        certificationId: CertificationId,
        rootRequirementCertificationId: RequirementCertificationId?,
        evidenceTypeIdentifier: EvidenceTypeIdentifier
    ): List<RequirementCertification> = findFilteredRequirementCertifications(
        certificationId,
        rootRequirementCertificationId,
        "-->(:${EvidenceType.LABEL} {identifier: \$etIdentifier})",
        mapOf("etIdentifier" to evidenceTypeIdentifier)
    )

    suspend fun findParentsOf(
        requirementCertificationId: RequirementCertificationId
    ): List<RequirementCertification> = sessionFactory.session { session ->
        session.query(
            "MATCH (:${RequirementCertification.LABEL} {id: \$rcId})" +
                    "<-[:${RequirementCertification.IS_CERTIFIED_BY}]-(parent:${RequirementCertification.LABEL})"
                        .returnWholeEntity("parent"),
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
                    "-[has_unit:${InformationConcept.HAS_UNIT}]->(du:${DataUnit.LABEL})" +
                    "\nRETURN distinct sv, collect(provides_value_for), collect(distinct ic), collect(has_unit), collect(distinct du)",
            mapOf("cId" to certificationId, "rcId" to rootRequirementCertificationId)
        ).map { it["sv"] as SupportedValue }
    }

    suspend fun findSupportedValuesSupportedByEvidenceType(
        evidenceTypeId: EvidenceTypeId,
        requirementCertificationIds: Collection<RequirementCertificationId>
    ): List<SupportedValue> = sessionFactory.session { session ->
        session.query(
            "MATCH (:${EvidenceType.LABEL} {id: \$etId})" +
                    "-[:${EvidenceType.SUPPORTS_CONCEPT}]->(ic:${InformationConcept.LABEL})" +
                    "\nMATCH (rc:${RequirementCertification.LABEL})-[*1..]->(sv:${SupportedValue.LABEL})" +
                    "-[:${SupportedValue.PROVIDES_VALUE_FOR}]->(ic)" +
                    "\nWHERE rc.id IN \$rcIds"
                        .returnWholeEntity("sv"),
            mapOf("rcIds" to requirementCertificationIds, "etId" to evidenceTypeId)
        ).map { it["sv"] as SupportedValue }
    }

    /**
     * Find the closest parent certification that has a supporting evidence for the given supported value, and return this evidence.
     */
    suspend fun findSupportingEvidenceFor(supportedValueId: SupportedValueId): Evidence? = sessionFactory.session { session ->
        session.query(
            "MATCH (sv:${SupportedValue.LABEL} {id: \$svId})" +
                    "-[:${SupportedValue.PROVIDES_VALUE_FOR}]->(ic:${InformationConcept.LABEL})" +
                    "\nMATCH p=(sv)" +
                    "<-[:${RequirementCertification.USES_VALUE}]-(:${RequirementCertification.LABEL})" +
                    "<-[:${RequirementCertification.IS_CERTIFIED_BY}*0..]-(:${RequirementCertification.LABEL})" +
                    "-[:${RequirementCertification.HAS_EVIDENCE}]->(e:${Evidence.LABEL})" +
                    "-[:${Evidence.IS_CONFORMANT_TO}]->(:${EvidenceType.LABEL})" +
                    "-[:${EvidenceType.SUPPORTS_CONCEPT}]->(ic)" +
                    "\nWITH e" +
                    "\nORDER BY length(p)" +
                    "\nLIMIT 1"
                        .returnWholeEntity("e"),
            mapOf("svId" to supportedValueId)
        ).map { it["e"] as Evidence }
            .firstOrNull()
    }

    suspend fun save(entity: Certification, depth: Int = -1) = sessionFactory.session { session ->
        session.save(entity, depth)
    }

    suspend fun save(entity: RequirementCertification, depth: Int = -1) = sessionFactory.session { session ->
        session.save(entity, depth)
    }

    private suspend fun findFilteredRequirementCertifications(
        certificationId: CertificationId,
        rootRequirementCertificationId: RequirementCertificationId?,
        filterQueryPart: String,
        params: Map<String, Any?>
    ): List<RequirementCertification> = sessionFactory.session { session ->
        session.query(
            "MATCH (:${Certification.LABEL} {id: \$cId})" +
                    (if (rootRequirementCertificationId != null) {
                        "-[:${RequirementCertification.IS_CERTIFIED_BY}*1..]->(:${RequirementCertification.LABEL} {id: \$rcId})"
                    } else { "" }) +
                    "-[:${RequirementCertification.IS_CERTIFIED_BY}*0..]->(rc:${RequirementCertification.LABEL})" +
                    "-[:${RequirementCertification.CERTIFIES}]->(:${Requirement.LABEL})" +
                    filterQueryPart
                        .returnWholeEntity("rc"),
            params + mapOf("cId" to certificationId, "rcId" to rootRequirementCertificationId)
        ).map { it["rc"] as RequirementCertification }
    }
}
