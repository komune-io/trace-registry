package city.smartb.registry.program.s2.activity.api.entity

import city.smartb.im.organization.domain.model.OrganizationRef
import city.smartb.registry.program.s2.activity.domain.automate.ActivityState
import city.smartb.registry.program.s2.activity.domain.model.ActivityId
import city.smartb.registry.program.s2.activity.domain.model.DateTime
import city.smartb.registry.program.s2.activity.domain.model.ProjectRef
import com.redis.om.spring.annotations.Document
import com.redis.om.spring.annotations.Searchable
import org.springframework.data.annotation.Id
import s2.dsl.automate.model.WithS2Id
import s2.dsl.automate.model.WithS2State

@Document
open class ActivityEntity: WithS2Id<ActivityId>, WithS2State<ActivityState>  {
    @Id
    open lateinit var id: ActivityId

    @Searchable
    lateinit var name: String

    @Searchable
    var description: String? = null

    var creationDate: DateTime = System.currentTimeMillis()
    var lastModificationDate: DateTime = System.currentTimeMillis()

    lateinit var status: ActivityState

    // standard JavaBean getters for redis-om metamodel generation
    override fun s2Id() = id
    override fun s2State() = status
}
