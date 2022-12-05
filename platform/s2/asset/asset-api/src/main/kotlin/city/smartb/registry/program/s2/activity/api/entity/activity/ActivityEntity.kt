package city.smartb.registry.program.s2.activity.api.entity.activity

import city.smartb.registry.program.api.commons.auth.OrganizationId
import city.smartb.registry.program.api.commons.auth.UserId
import com.redis.om.spring.annotations.Document
import com.redis.om.spring.annotations.Searchable
import city.smartb.registry.program.s2.activity.domain.automate.ActivityId
import city.smartb.registry.program.s2.activity.domain.automate.ActivityState
import java.util.Date
import org.springframework.data.annotation.CreatedDate
import org.springframework.data.annotation.Id
import org.springframework.data.annotation.LastModifiedDate
import org.springframework.data.annotation.Reference
import s2.dsl.automate.model.WithS2Id
import s2.dsl.automate.model.WithS2State

@Document
open class ActivityEntity: WithS2Id<ActivityId>, WithS2State<ActivityState>  {
    @Id
    open lateinit var id: ActivityId
    open lateinit var friendlyId: String
    open lateinit var beneficiaryId: OrganizationId
    open lateinit var supervisorId: UserId

    @Searchable
    open lateinit var name: String
    open lateinit var status: ActivityState

//    @Reference
//    private val roles: Set<Role>? = null

    @CreatedDate
    private val createdDate: Date? = null

    @LastModifiedDate
    private val lastModifiedDate: Date? = null
    override fun s2Id() = id
    override fun s2State() = status
}
