package city.smartb.registry.program.s2.protocol.api.entity

import city.smartb.registry.program.api.commons.auth.OrganizationId
import city.smartb.registry.program.api.commons.auth.UserId
import com.redis.om.spring.annotations.Document
import com.redis.om.spring.annotations.Searchable
import city.smartb.registry.program.s2.protocol.domain.model.ProtocolId
import city.smartb.registry.program.s2.protocol.domain.automate.ProtocolState
import city.smartb.registry.program.s2.protocol.domain.model.DateTime
import city.smartb.registry.program.s2.protocol.domain.model.ProjectRef
import city.smartb.registry.program.s2.protocol.domain.model.ProtocolDTO
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

    @Searchable
    var name: String? = null

     var baseScenario: String? = null
     var context: String? = null
     var expectedValue: Double? = null
     var expectedValueUnit: String? = null
     var methodology: String? = null
     var monitoringPeriodStart: DateTime? = null
     var monitoringPeriodEnd: DateTime? = null
     var poaId: String? = null
     var productType: String? = null
     var programOfActivities: String? = null
     var project: ProjectRef? = null
     var projectVVB: String? = null
     var protocolType: String? = null
     var sdg: List<String>? = null
     var slug: String? = null

    open lateinit var status: ProtocolState

    @CreatedDate
    val creationDate: Date? = null

    @LastModifiedDate
    val lastModificationDate: Date? = null
    override fun s2Id() = id
    override fun s2State() = status
}
