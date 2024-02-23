package cccev.projection.api.entity.requirement

import cccev.projection.api.entity.concept.InformationConceptEntity
import cccev.projection.api.entity.evidencetypelist.EvidenceTypeListEntity
import cccev.projection.api.entity.framework.FrameworkEntity
import cccev.s2.requirement.domain.RequirementId
import cccev.s2.requirement.domain.RequirementState
import cccev.s2.requirement.domain.model.RequirementKind
import org.springframework.data.annotation.CreatedDate
import org.springframework.data.annotation.LastModifiedDate
import org.springframework.data.annotation.Version
import org.springframework.data.neo4j.core.schema.Id
import org.springframework.data.neo4j.core.schema.Node
import org.springframework.data.neo4j.core.schema.Relationship
import s2.dsl.automate.model.WithS2Id
import s2.dsl.automate.model.WithS2State

@Node(RequirementEntity.LABEL)
data class RequirementEntity(
    @Id
    val id: RequirementId,
    @Version
    var version: Long = 0,
    @CreatedDate
    var creationDate: Long = 0,
    @LastModifiedDate
    var lastModificationDate: Long = 0,
    val status: RequirementState,
    val identifier: String? = null,
    val kind: RequirementKind,
    val name: String? = null,
    val description: String? = null,
    val type: String? = null,
    @Relationship(IS_DERIVED_FROM)
    val isDerivedFrom: MutableList<FrameworkEntity> = mutableListOf(),
    @Relationship
    val hasQualifiedRelation: MutableMap<String, MutableList<RequirementEntity>> = mutableMapOf(),
    @Relationship(HAS_CONCEPT)
    val hasConcept: MutableList<InformationConceptEntity> = mutableListOf(),
    @Relationship(HAS_EVIDENCE_TYPE_LIST)
    val hasEvidenceTypeList: MutableList<EvidenceTypeListEntity> = mutableListOf(),
    val enablingCondition: String? = null,
    @Relationship(CONDITION_ENABLING)
    val enablingConditionDependencies: List<InformationConceptEntity> = emptyList(),
    val required: Boolean = true,
    val validatingCondition: String? = null,
    @Relationship(CONDITION_VALIDATION)
    val validatingConditionDependencies: List<InformationConceptEntity> = emptyList(),
    val order: Int? = null,
    val properties: String? = null, // json
): WithS2Id<RequirementId>, WithS2State<RequirementState> {
    companion object {
        const val LABEL = "Requirement"
        const val IS_DERIVED_FROM = "IS_DERIVED_FROM"
        const val HAS_REQUIREMENT = "HAS_REQUIREMENT"
        const val HAS_CONCEPT = "HAS_CONCEPT"
        const val HAS_EVIDENCE_TYPE_LIST = "HAS_EVIDENCE_TYPE_LIST"
        const val CONDITION_ENABLING = "CONDITION_ENABLING"
        const val CONDITION_VALIDATION = "CONDITION_VALIDATION"
    }

    override fun s2Id() = id
    override fun s2State() = status

    fun hasRequirement() = hasQualifiedRelation[HAS_REQUIREMENT].orEmpty()
}
