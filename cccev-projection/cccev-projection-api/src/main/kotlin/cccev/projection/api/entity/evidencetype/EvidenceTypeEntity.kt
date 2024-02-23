package cccev.projection.api.entity.evidencetype

import cccev.s2.evidence.type.domain.EvidenceTypeId
import cccev.s2.evidence.type.domain.EvidenceTypeState
import org.springframework.data.annotation.CreatedDate
import org.springframework.data.annotation.Id
import org.springframework.data.annotation.LastModifiedDate
import org.springframework.data.annotation.Version
import org.springframework.data.neo4j.core.schema.Node
import s2.dsl.automate.model.WithS2Id
import s2.dsl.automate.model.WithS2State

@Node(EvidenceTypeEntity.LABEL)
data class EvidenceTypeEntity(
    @Id
    var id: EvidenceTypeId,
    var status: EvidenceTypeState,
    @Version
    var version: Long = 0,
    @CreatedDate
    var creationDate: Long = 0,
    @LastModifiedDate
    var lastModificationDate: Long = 0,
    var identifier: String,
    var name: String,
    var description: String,
    var validityPeriodConstraint: Long? = null
):  WithS2Id<EvidenceTypeId>, WithS2State<EvidenceTypeState> {
    companion object {
        const val LABEL = "EvidenceType"
    }

    override fun s2Id() = id
    override fun s2State() = status
}
