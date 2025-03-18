package io.komune.registry.s2.cccev.api.entity.unit

import com.redis.om.spring.annotations.Document
import com.redis.om.spring.annotations.Indexed
import com.redis.om.spring.annotations.Searchable
import io.komune.registry.s2.cccev.domain.DataUnitState
import io.komune.registry.s2.cccev.domain.model.DataUnitType
import io.komune.registry.s2.commons.model.DataUnitId
import io.komune.registry.s2.commons.model.DataUnitIdentifier
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.commons.model.RedisTable
import org.springframework.data.annotation.Id
import s2.dsl.automate.model.WithS2Id
import s2.dsl.automate.model.WithS2State

@Document(RedisTable.CCCEV_DATA_UNIT)
open class DataUnitEntity: WithS2Id<DataUnitId>, WithS2State<DataUnitState>  {

    @Id
    open lateinit var id: DataUnitId

    @Searchable(nostem=true)
    open lateinit var status: DataUnitState

    @Indexed
    lateinit var identifier: DataUnitIdentifier

    lateinit var type: DataUnitType

    var name: Map<Language, String> = emptyMap()

    var abbreviation: Map<Language, String> = emptyMap()

    var issued: Long? = null
    var modified: Long? = null

    override fun s2Id() = id
    override fun s2State() = status
}
