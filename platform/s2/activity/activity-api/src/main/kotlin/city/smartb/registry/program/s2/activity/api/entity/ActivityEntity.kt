package city.smartb.registry.program.s2.activity.api.entity

import city.smartb.im.organization.domain.model.OrganizationRef
import com.redis.om.spring.annotations.Document
import com.redis.om.spring.annotations.Searchable
import city.smartb.registry.program.s2.activity.domain.automate.ActivityState
import city.smartb.registry.program.s2.activity.domain.model.Activity
import city.smartb.registry.program.s2.activity.domain.model.ActivityId
import city.smartb.registry.program.s2.activity.domain.model.ActivityRef
import city.smartb.registry.program.s2.activity.domain.model.DateTime
import city.smartb.registry.program.s2.activity.domain.model.ProjectRef
import city.smartb.registry.program.s2.activity.domain.model.ProtocolRef
import city.smartb.registry.program.s2.activity.domain.model.UserRef
import java.util.Date
import org.springframework.data.annotation.CreatedDate
import org.springframework.data.annotation.Id
import org.springframework.data.annotation.LastModifiedDate
import s2.dsl.automate.model.WithS2Id
import s2.dsl.automate.model.WithS2State

@Document
open class ActivityEntity: WithS2Id<ActivityId>, WithS2State<ActivityState>  {
    @Id
    open lateinit var id: ActivityId

    @Searchable
    lateinit var name: String

    var description: String? = null
    var startDate: DateTime? = null
    var endDate: DateTime? = null
    var estimatedEndDate: DateTime? = null
    var executor: OrganizationRef? = null
    var expectedValue: Double? = null
    var expectedValueUnit: Double? = null
    var fee: Double? = null
    var isPublic: Boolean? = null
    var issuable: Boolean? = null
    var project: ProjectRef? = null
    var protocol: ProtocolRef? = null
    var slug: String? = null
    var subActivityOf: ActivityRef? = null
    var validator: OrganizationRef? = null
    var validationDate: DateTime? = null
    var verifiable: Boolean? = null
    var verifier: OrganizationRef? = null
    var verificationDate: DateTime? = null
    var creator: UserRef? = null
    var creationDate: DateTime = System.currentTimeMillis()
    var lastModificationDate: DateTime = System.currentTimeMillis()

    lateinit var status: ActivityState

    override fun s2Id() = id
    override fun s2State() = status
}
