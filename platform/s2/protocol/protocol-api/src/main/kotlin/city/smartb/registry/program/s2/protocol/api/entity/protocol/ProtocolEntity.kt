package city.smartb.registry.program.s2.protocol.api.entity.protocol

import city.smartb.registry.program.api.commons.auth.OrganizationId
import city.smartb.registry.program.api.commons.auth.UserId
import com.redis.om.spring.annotations.Document
import com.redis.om.spring.annotations.Searchable
import city.smartb.registry.program.s2.protocol.domain.automate.ProtocolId
import city.smartb.registry.program.s2.protocol.domain.automate.ProtocolState
import java.util.Date
import org.springframework.data.annotation.CreatedDate
import org.springframework.data.annotation.Id
import org.springframework.data.annotation.LastModifiedDate
import s2.dsl.automate.model.WithS2Id
import s2.dsl.automate.model.WithS2State

@Document
open class ProtocolEntity: WithS2Id<ProtocolId>, WithS2State<ProtocolState>  {
    @Id
    open lateinit var id: ProtocolId
    open lateinit var friendlyId: String
    open lateinit var beneficiaryId: OrganizationId
    open lateinit var supervisorId: UserId

    @Searchable
    open lateinit var name: String
    open lateinit var status: ProtocolState

//    @Reference
//    private val roles: Set<Role>? = null

    @CreatedDate
    private val createdDate: Date? = null

    @LastModifiedDate
    private val lastModifiedDate: Date? = null
    override fun s2Id() = id
    override fun s2State() = status
}
