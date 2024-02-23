package cccev.projection.api.entity.evidencetypelist

import cccev.projection.api.entity.evidencetype.EvidenceTypeEntity
import cccev.s2.evidence.type.domain.EvidenceTypeListId
import cccev.s2.evidence.type.domain.EvidenceTypeListState
import org.springframework.data.annotation.CreatedDate
import org.springframework.data.annotation.LastModifiedDate
import org.springframework.data.annotation.Version
import org.springframework.data.neo4j.core.schema.Id
import org.springframework.data.neo4j.core.schema.Node
import org.springframework.data.neo4j.core.schema.Relationship
import s2.dsl.automate.model.WithS2Id
import s2.dsl.automate.model.WithS2State

@Node(EvidenceTypeListEntity.LABEL)
data class EvidenceTypeListEntity(
    @Id
    val id: EvidenceTypeListId,
    @Version
    var version: Long = 0,
    @CreatedDate
    var creationDate: Long = 0,
    @LastModifiedDate
    var lastModificationDate: Long = 0,
    val status: EvidenceTypeListState,
    val identifier: String? = null,
    val name: String,
    val description: String,
    @Relationship(SPECIFIES_EVIDENCE_TYPE)
    val specifiesEvidenceType: List<EvidenceTypeEntity>
): WithS2Id<EvidenceTypeListId>, WithS2State<EvidenceTypeListState> {
    companion object {
        const val LABEL = "EvidenceTypeList"
        const val SPECIFIES_EVIDENCE_TYPE = "SPECIFIES_EVIDENCE_TYPE"
    }

    override fun s2Id() = id
    override fun s2State() = status
}
