package cccev.core.requirement.entity

import cccev.commons.utils.parseJsonTo
import cccev.commons.utils.toJson
import cccev.core.concept.entity.InformationConcept
import cccev.core.requirement.model.RequirementId
import cccev.core.requirement.model.RequirementKind
import cccev.projection.api.entity.evidencetypelist.EvidenceTypeListEntity
import org.neo4j.ogm.annotation.Id
import org.neo4j.ogm.annotation.NodeEntity
import org.neo4j.ogm.annotation.Relationship
import org.neo4j.ogm.annotation.Version

@NodeEntity(Requirement.LABEL)
class Requirement {
    companion object {
        const val LABEL = "Requirement"
        const val HAS_REQUIREMENT = "HAS_REQUIREMENT"
        const val HAS_CONCEPT = "HAS_CONCEPT"
        const val HAS_EVIDENCE_TYPES = "HAS_EVIDENCE_TYPES"
        const val ENABLING_DEPENDS_ON = "ENABLING_DEPENDS_ON"
        const val VALIDATION_DEPENDS_ON = "VALIDATION_DEPENDS_ON"
    }

    @Id
    lateinit var id: RequirementId

    var identifier: String = id

    lateinit var kind: RequirementKind

    var name: String? = null

    var description: String? = null

    var type: String? = null

    @Relationship(HAS_REQUIREMENT)
    var hasRequirement: MutableList<Requirement> = mutableListOf()

    @Relationship(HAS_CONCEPT)
    var hasConcept: MutableList<InformationConcept> = mutableListOf()

    @Relationship(HAS_EVIDENCE_TYPES)
    var hasEvidenceTypeList: MutableList<EvidenceTypeListEntity> = mutableListOf()

    var enablingCondition: String? = null

    @Relationship(ENABLING_DEPENDS_ON)
    var enablingConditionDependencies: MutableList<InformationConcept> = mutableListOf()

    var required: Boolean = true

    var validatingCondition: String? = null

    @Relationship(VALIDATION_DEPENDS_ON)
    var validatingConditionDependencies: MutableList<InformationConcept> = mutableListOf()

    var order: Int? = null

    private var propertiesJson: String? = null
    var properties: Map<String, String>?
        get() = propertiesJson?.parseJsonTo<Map<String, String>>()
        set(value) { propertiesJson = value?.toJson() }

    @Version
    var version: Long = 0

    var creationDate: Long = System.currentTimeMillis()
}
