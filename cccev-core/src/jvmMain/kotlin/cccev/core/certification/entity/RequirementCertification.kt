package cccev.core.certification.entity

import cccev.infra.neo4j.EntityBase
import cccev.projection.api.entity.requirement.RequirementEntity
import cccev.s2.certification.domain.model.RequirementCertificationId
import org.neo4j.ogm.annotation.Id
import org.neo4j.ogm.annotation.NodeEntity
import org.neo4j.ogm.annotation.Relationship

@NodeEntity(RequirementCertification.LABEL)
class RequirementCertification: EntityBase() {
    companion object {
        const val LABEL = "RequirementCertification"

        const val CERTIFIES = "CERTIFIES"
        const val IS_CERTIFIED_BY = "IS_CERTIFIED_BY"
        const val USES_VALUE = "USES_VALUE"
    }

    @Id
    lateinit var id: RequirementCertificationId

    @Relationship(CERTIFIES)
    lateinit var requirement: RequirementEntity

    @Relationship(IS_CERTIFIED_BY)
    var subCertifications: MutableList<RequirementCertification> = mutableListOf()

    @Relationship(USES_VALUE)
    var values: MutableList<SupportedValue> = mutableListOf()

    /**
     * Result of the requirement's enablingCondition, or true if the requirement has no enablingCondition.
     */
    var isEnabled: Boolean = false

    /**
     * Result of the requirement's validatingCondition, or true if the requirement has no validatingCondition.
     */
    var isValidated: Boolean = false

    /**
     * True if the requirement has values for every information concepts.
     */
    var hasAllValues: Boolean = false

    /**
     * True if the requirement is enabled, validated, has values for all its information concepts,
     * and all its sub-requirements are fulfilled or disabled.
     */
    var isFulfilled: Boolean = false
}
