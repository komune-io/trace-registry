package io.komune.registry.s2.concept.api.entity

import com.redis.om.spring.annotations.Document
import com.redis.om.spring.annotations.Indexed
import com.redis.om.spring.annotations.Searchable
import com.redis.om.spring.annotations.TagIndexed
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.concept.domain.ConceptId
import io.komune.registry.s2.concept.domain.ConceptIdentifier
import io.komune.registry.s2.concept.domain.ConceptState
import org.springframework.data.annotation.Id
import s2.dsl.automate.model.WithS2Id
import s2.dsl.automate.model.WithS2State

@Document("Concept")
open class ConceptEntity: WithS2Id<ConceptId>, WithS2State<ConceptState>  {

    @Id
    open lateinit var id: ConceptId

    @Searchable(nostem=true)
    open lateinit var status: ConceptState

    @Indexed
    lateinit var identifier: ConceptIdentifier

    var prefLabels: Map<Language, String> = emptyMap()

    var definitions: Map<Language, String> = emptyMap()

    @TagIndexed
    var schemes: Set<String> = emptySet()

    var issued: Long? = null
    var modified: Long? = null

    override fun s2Id() = id
    override fun s2State() = status
}
