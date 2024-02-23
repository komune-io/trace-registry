package cccev.projection.api.entity.certification

import cccev.projection.api.entity.requirement.RequirementEntity
import cccev.s2.certification.domain.CertificationState
import cccev.s2.certification.domain.model.CertificationId
import cccev.s2.certification.domain.model.CertificationIdentifier
import org.springframework.data.annotation.CreatedDate
import org.springframework.data.annotation.Id
import org.springframework.data.annotation.LastModifiedDate
import org.springframework.data.annotation.Version
import org.springframework.data.neo4j.core.schema.Node
import org.springframework.data.neo4j.core.schema.Relationship
import s2.dsl.automate.model.WithS2Id
import s2.dsl.automate.model.WithS2State

@Node(CertificationEntity.LABEL)
data class CertificationEntity(
    @Id
    val id: CertificationId,
    val status: CertificationState,
    @Version
    val version: Long = 0,
    @CreatedDate
    val creationDate: Long = 0,
    @LastModifiedDate
    val lastModificationDate: Long = 0,
    val identifier: CertificationIdentifier = id,
    val name: String,
    val description: String? = null,
    val startDate: Long? = null,
    val endDate: Long? = null,
    val estimatedEndDate: Long? = null,
    val creator: String? = null,
    val executor: String? = null,
    val validator: String? = null,
    val isPublic: Boolean = false,
    val issuable: Boolean = false,
    val verifiable: Boolean = false,
    val verifier: String? = null,
    val verificationDate: Long? = null,
    @Relationship(FULFILLS)
    val requirements: MutableList<RequirementEntity> = mutableListOf(),
    @Relationship(PROVIDES_EVIDENCE)
    val evidences: MutableList<EvidenceEntity> = mutableListOf(),
    @Relationship(PROVIDES_VALUE)
    val supportedValues: MutableList<SupportedValueEntity> = mutableListOf(),
):  WithS2Id<CertificationId>, WithS2State<CertificationState> {
    companion object {
        const val LABEL = "Certification"
        const val FULFILLS = "FULFILLS"
        const val PROVIDES_EVIDENCE = "PROVIDES_EVIDENCE"
        const val PROVIDES_VALUE = "PROVIDES_VALUE"
    }

    override fun s2Id() = id
    override fun s2State() = status
}
