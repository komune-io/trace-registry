package io.komune.registry.control.core.cccev.certification.entity

import io.komune.registry.control.core.cccev.certification.CertificationState
import io.komune.registry.s2.commons.model.CertificationId
import io.komune.registry.s2.commons.model.OrganizationId
import io.komune.registry.s2.commons.model.UserId
import org.neo4j.ogm.annotation.Id
import org.neo4j.ogm.annotation.NodeEntity
import org.neo4j.ogm.annotation.Relationship
import org.neo4j.ogm.annotation.Version

@NodeEntity(Certification.LABEL)
class Certification {
    companion object {
        const val LABEL = "Certification"
        const val IS_CERTIFIED_BY = "IS_CERTIFIED_BY"
    }

    @Id
    lateinit var id: CertificationId

    @Relationship(IS_CERTIFIED_BY)
    var requirementCertifications: MutableList<RequirementCertification> = mutableListOf()

    var status: CertificationState = CertificationState.PENDING

    var comment: String? = null

    @Version
    var version: Long? = null

    var creatorUserId: UserId? = null

    var creatorOrganizationId: OrganizationId? = null

    var auditorUserId: UserId? = null

    var auditorOrganizationId: OrganizationId? = null

    var auditDate: Long? = null

    var creationDate: Long = System.currentTimeMillis()

    var lastModificationDate: Long = System.currentTimeMillis()
}
