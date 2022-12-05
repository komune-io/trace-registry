package city.smartb.registry.program.s2.project.api.entity.project

import city.smartb.registry.program.api.commons.auth.OrganizationId
import city.smartb.registry.program.api.commons.auth.UserId
import com.redis.om.spring.annotations.Document
import com.redis.om.spring.annotations.Searchable
import city.smartb.registry.program.s2.project.domain.automate.ProjectId
import city.smartb.registry.program.s2.project.domain.automate.ProjectState
import java.util.Date
import org.springframework.data.annotation.CreatedDate
import org.springframework.data.annotation.Id
import org.springframework.data.annotation.LastModifiedDate
import org.springframework.data.annotation.Reference
import s2.dsl.automate.model.WithS2Id
import s2.dsl.automate.model.WithS2State

@Document
open class ProjectEntity: WithS2Id<ProjectId>,WithS2State<ProjectState>  {
    @Id
    open lateinit var id: ProjectId
    open lateinit var friendlyId: String
    open lateinit var beneficiaryId: OrganizationId
    open lateinit var supervisorId: UserId

    @Searchable
    open lateinit var name: String
    open lateinit var status: ProjectState

//    @Reference
//    private val roles: Set<Role>? = null

    @CreatedDate
    private val createdDate: Date? = null

    @LastModifiedDate
    private val lastModifiedDate: Date? = null
    override fun s2Id() = id
    override fun s2State() = status
}
