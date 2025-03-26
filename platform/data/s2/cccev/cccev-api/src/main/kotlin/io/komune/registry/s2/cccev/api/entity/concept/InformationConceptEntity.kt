package io.komune.registry.s2.cccev.api.entity.concept

import com.redis.om.spring.annotations.Document
import com.redis.om.spring.annotations.Indexed
import com.redis.om.spring.annotations.Searchable
import com.redis.om.spring.annotations.TagIndexed
import io.komune.registry.s2.cccev.domain.InformationConceptState
import io.komune.registry.s2.cccev.domain.model.AggregatorType
import io.komune.registry.s2.commons.model.DataUnitId
import io.komune.registry.s2.commons.model.InformationConceptId
import io.komune.registry.s2.commons.model.InformationConceptIdentifier
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.commons.model.RedisTable
import io.komune.registry.s2.concept.domain.ConceptId
import org.springframework.data.annotation.Id
import s2.dsl.automate.model.WithS2Id
import s2.dsl.automate.model.WithS2State

@Document(RedisTable.CCCEV_INFORMATION_CONCEPT)
open class InformationConceptEntity: WithS2Id<InformationConceptId>, WithS2State<InformationConceptState>  {

    @Id
    open lateinit var id: InformationConceptId

    @Searchable(nostem=true)
    open lateinit var status: InformationConceptState

    @Indexed
    lateinit var identifier: InformationConceptIdentifier

    var name: Map<Language, String> = emptyMap()

    lateinit var unitId: DataUnitId

    var aggregator: AggregatorType? = null

    @TagIndexed
    var themeIds: MutableSet<ConceptId> = mutableSetOf()

    var issued: Long? = null
    var modified: Long? = null

    override fun s2Id() = id
    override fun s2State() = status
}
