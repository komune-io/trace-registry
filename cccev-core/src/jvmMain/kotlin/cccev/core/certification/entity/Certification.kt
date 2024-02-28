package cccev.core.certification.entity

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
    lateinit var id: String

    @Relationship(IS_CERTIFIED_BY)
    var requirementCertifications: MutableList<RequirementCertification> = mutableListOf()

    @Version
    var version: Long? = null

    var creationDate: Long = System.currentTimeMillis()
}
