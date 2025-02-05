package io.komune.registry.s2.license.api.entity

import com.redis.om.spring.annotations.Document
import com.redis.om.spring.annotations.Indexed
import com.redis.om.spring.annotations.Searchable
import io.komune.registry.s2.license.domain.LicenseId
import io.komune.registry.s2.license.domain.LicenseIdentifier
import io.komune.registry.s2.license.domain.LicenseState
import org.springframework.data.annotation.Id
import s2.dsl.automate.model.WithS2Id
import s2.dsl.automate.model.WithS2State

@Document("License")
open class LicenseEntity: WithS2Id<LicenseId>, WithS2State<LicenseState>  {

    @Id
    open lateinit var id: LicenseId

    @Searchable(nostem=true)
    open lateinit var status: LicenseState

    @Indexed
    lateinit var identifier: LicenseIdentifier

    @Searchable(nostem=true)
    lateinit var name: String

    var url: String? = null

    var issued: Long? = null
    var modified: Long? = null

    override fun s2Id() = id
    override fun s2State() = status
}
