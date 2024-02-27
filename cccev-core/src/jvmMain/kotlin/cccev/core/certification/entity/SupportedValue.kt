package cccev.core.certification.entity

import cccev.core.certification.model.SupportedValueId
import cccev.infra.neo4j.EntityBase
import cccev.projection.api.entity.concept.InformationConceptEntity
import org.neo4j.ogm.annotation.Id
import org.neo4j.ogm.annotation.NodeEntity
import org.neo4j.ogm.annotation.Relationship

@NodeEntity(SupportedValue.LABEL)
class SupportedValue: EntityBase() {
    companion object {
        const val LABEL = "SupportedValue"
        const val PROVIDES_VALUE_FOR = "PROVIDES_VALUE_FOR"
    }
    @Id
    lateinit var id: SupportedValueId

    var value: String? = null

    @Relationship(PROVIDES_VALUE_FOR)
    lateinit var concept: InformationConceptEntity
}
