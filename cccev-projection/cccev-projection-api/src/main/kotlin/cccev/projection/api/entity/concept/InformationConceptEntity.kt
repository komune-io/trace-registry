package cccev.projection.api.entity.concept

import cccev.projection.api.entity.unit.DataUnitEntity
import cccev.s2.concept.domain.InformationConceptId
import cccev.s2.concept.domain.InformationConceptIdentifier
import cccev.s2.concept.domain.InformationConceptState
import org.springframework.data.annotation.CreatedDate
import org.springframework.data.annotation.LastModifiedDate
import org.springframework.data.annotation.Version
import org.springframework.data.neo4j.core.schema.Id
import org.springframework.data.neo4j.core.schema.Node
import org.springframework.data.neo4j.core.schema.Relationship
import s2.dsl.automate.model.WithS2Id
import s2.dsl.automate.model.WithS2State

@Node(InformationConceptEntity.LABEL)
@org.neo4j.ogm.annotation.NodeEntity(InformationConceptEntity.LABEL)
data class InformationConceptEntity(
    @Id
    @org.neo4j.ogm.annotation.Id
    var id: InformationConceptId = "",
    var status: InformationConceptState = InformationConceptState.EXISTS,
    @Version
    @org.neo4j.ogm.annotation.Version
    var version: Long = 0,
    @CreatedDate
    var creationDate: Long = 0,
    @LastModifiedDate
    var lastModificationDate: Long = 0,
    var identifier: InformationConceptIdentifier = "",
    var name: String = "",
    @Relationship(HAS_UNIT)
    @org.neo4j.ogm.annotation.Relationship(HAS_UNIT)
    var hasUnit: DataUnitEntity? = null,
    var description: String? = null,
    var expressionOfExpectedValue: String? = null,
    @Relationship(DEPENDS_ON)
    @org.neo4j.ogm.annotation.Relationship(DEPENDS_ON)
    var dependsOn: List<InformationConceptEntity>? = null,
): WithS2Id<InformationConceptId>, WithS2State<InformationConceptState> {

    companion object {
        const val LABEL = "InformationConcept"
        const val DEPENDS_ON = "DEPENDS_ON"
        const val HAS_UNIT = "HAS_UNIT"
    }

    override fun s2Id() = id
    override fun s2State() = status
}
