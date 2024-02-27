package cccev.core.certification.entity

import cccev.infra.neo4j.EntityBase
import org.neo4j.ogm.annotation.Id
import org.neo4j.ogm.annotation.NodeEntity
import org.neo4j.ogm.annotation.Relationship

@NodeEntity(Certification.LABEL)
class Certification: EntityBase() {
    companion object {
        const val LABEL = "Certification"
        const val IS_CERTIFIED_BY = "IS_CERTIFIED_BY"
    }

    @Id
    lateinit var id: String

    @Relationship(IS_CERTIFIED_BY)
    var requirementCertifications: MutableList<RequirementCertification> = mutableListOf()
}
