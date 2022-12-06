package city.smartb.registry.program.s2.project.api.entity.project

import com.redis.om.spring.annotations.Document
import city.smartb.registry.program.s2.project.domain.model.ProjectId
import city.smartb.registry.program.s2.project.domain.automate.ProjectState
import city.smartb.registry.program.s2.project.domain.model.DateTime
import city.smartb.registry.program.s2.project.domain.model.OrganizationRef
import java.util.Date
import org.springframework.data.annotation.CreatedDate
import org.springframework.data.annotation.Id
import org.springframework.data.annotation.LastModifiedDate
import s2.dsl.automate.model.WithS2Id
import s2.dsl.automate.model.WithS2State

@Document
open class ProjectEntity: WithS2Id<ProjectId>,WithS2State<ProjectState>  {
    @Id
    open lateinit var id: ProjectId
    open lateinit var status: ProjectState

    var name: String? = null
    var country: String? = null
    var creditingPeriodStartDate: DateTime? = null
    var creditingPeriodEndDate: DateTime? = null
    var description: String? = null
    var dueDate: DateTime? = null
    var estimatedReduction: String? = null
    var localization: String? = null
    var proponentAccount: OrganizationRef? = null
    var proponent: String? = null
    var projectType: String? = null
    var publicId: String? = null
    var referenceYear: String? = null
    var registrationDate: DateTime? = null
    var vintage: Double? = null
    var slug: Double? = null

    @CreatedDate
    val createdDate: Date? = null

    @LastModifiedDate
    val lastModifiedDate: Date? = null
    override fun s2Id() = id
    override fun s2State() = status
}
