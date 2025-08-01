package io.komune.registry.control.core.cccev.requirement.entity

import io.komune.registry.api.commons.utils.parseJsonTo
import io.komune.registry.api.commons.utils.toJson
import io.komune.registry.control.core.cccev.concept.entity.InformationConcept
import io.komune.registry.control.core.cccev.evidencetype.entity.EvidenceType
import io.komune.registry.control.core.cccev.requirement.model.RequirementKind
import io.komune.registry.s2.commons.model.RequirementId
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
        const val HAS_EVIDENCE_TYPE = "HAS_EVIDENCE_TYPE"
        const val ENABLING_DEPENDS_ON = "ENABLING_DEPENDS_ON"
        const val VALIDATION_DEPENDS_ON = "VALIDATION_DEPENDS_ON"
    }

    @Id
    lateinit var id: RequirementId

    lateinit var identifier: String

    lateinit var kind: RequirementKind

    var name: String? = null

    var description: String? = null

    var type: String? = null

    @Relationship(HAS_REQUIREMENT)
    var subRequirements: MutableList<Requirement> = mutableListOf()

    @Relationship(HAS_CONCEPT)
    var concepts: MutableList<InformationConcept> = mutableListOf()

    @Relationship(HAS_EVIDENCE_TYPE)
    var evidenceTypes: MutableList<EvidenceType> = mutableListOf()

    var enablingCondition: String? = null

    @Relationship(ENABLING_DEPENDS_ON)
    var enablingConditionDependencies: MutableList<InformationConcept> = mutableListOf()

    var required: Boolean = true

    var validatingCondition: String? = null

    @Relationship(VALIDATION_DEPENDS_ON)
    var validatingConditionDependencies: MutableList<InformationConcept> = mutableListOf()

    var evidenceValidatingCondition: String? = null

    var order: Int? = null

    private var propertiesJson: String? = null
    var properties: Map<String, String?>?
        get() = propertiesJson?.parseJsonTo<Map<String, String?>>()
        set(value) { propertiesJson = value?.toJson() }

    @Version
    var version: Long? = null

    var creationDate: Long = System.currentTimeMillis()
}
