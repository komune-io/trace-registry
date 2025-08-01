package io.komune.registry.s2.cccev.api.entity.value

import com.redis.om.spring.annotations.Document
import com.redis.om.spring.annotations.Indexed
import com.redis.om.spring.annotations.Searchable
import com.redis.om.spring.annotations.TagIndexed
import io.komune.registry.s2.cccev.domain.SupportedValueState
import io.komune.registry.s2.cccev.domain.model.CompositeDataUnitModel
import io.komune.registry.s2.commons.model.InformationConceptId
import io.komune.registry.s2.commons.model.RedisTable
import io.komune.registry.s2.commons.model.SupportedValueId
import org.springframework.data.annotation.Id
import s2.dsl.automate.model.WithS2Id
import s2.dsl.automate.model.WithS2State

@Document(RedisTable.CCCEV_SUPPORTED_VALUE)
open class SupportedValueEntity: WithS2Id<SupportedValueId>, WithS2State<SupportedValueState>  {

    @Id
    open lateinit var id: SupportedValueId

    @Searchable(nostem=true)
    open lateinit var status: SupportedValueState

    @TagIndexed
    lateinit var conceptId: InformationConceptId

    lateinit var unit: CompositeDataUnitModel

    @Indexed
    var isRange: Boolean = false

    lateinit var value: String

    var query: String? = null

    var description: String? = null

    var issued: Long? = null
    var modified: Long? = null

    override fun s2Id() = id
    override fun s2State() = status

    // Gnegnegne SupportedValueEntity is not a proper JavaBean because isRange has no standard getter.
    fun getIsRange() = isRange
}
