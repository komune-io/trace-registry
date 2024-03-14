package cccev.core.concept.entity

import cccev.core.concept.model.InformationConceptId
import cccev.core.concept.model.InformationConceptIdentifier
import cccev.projection.api.entity.unit.DataUnitEntity
import org.neo4j.ogm.annotation.Id
import org.neo4j.ogm.annotation.NodeEntity
import org.neo4j.ogm.annotation.Relationship
import org.neo4j.ogm.annotation.Version

@NodeEntity(InformationConcept.LABEL)
class InformationConcept {
    companion object {
        const val LABEL = "InformationConcept"
        const val DEPENDS_ON = "DEPENDS_ON"
        const val HAS_UNIT = "HAS_UNIT"
    }

    @Id
    lateinit var id: InformationConceptId

    var identifier: InformationConceptIdentifier = id

    lateinit var name: String

    var description: String? = null

    @Relationship(HAS_UNIT)
    lateinit var unit: DataUnitEntity

    var expressionOfExpectedValue: String? = null

    @Relationship(DEPENDS_ON)
    var dependencies: MutableList<InformationConcept> = mutableListOf()

    @Version
    var version: Long = 0

    var creationDate: Long = System.currentTimeMillis()
}
