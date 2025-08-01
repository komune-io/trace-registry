package io.komune.registry.control.core.cccev.concept.entity

import io.komune.registry.control.core.cccev.unit.entity.DataUnit
import io.komune.registry.s2.commons.model.InformationConceptId
import io.komune.registry.s2.commons.model.InformationConceptIdentifier
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

    lateinit var identifier: InformationConceptIdentifier

    lateinit var name: String

    var description: String? = null

    @Relationship(HAS_UNIT)
    lateinit var unit: DataUnit

    var expressionOfExpectedValue: String? = null

    @Relationship(DEPENDS_ON)
    var dependencies: MutableList<InformationConcept> = mutableListOf()

    @Version
    var version: Long? = null

    var creationDate: Long = System.currentTimeMillis()
}
