package city.smartb.registry.program.s2.project.api.entity

import city.smartb.registry.program.s2.project.domain.automate.ProjectState
import city.smartb.registry.program.s2.project.domain.model.DateTime
import city.smartb.registry.program.s2.project.domain.model.OrganizationRef
import city.smartb.registry.program.s2.project.domain.model.ProjectId
import com.redis.om.spring.annotations.Document
import com.redis.om.spring.annotations.Indexed
import com.redis.om.spring.annotations.Searchable
import org.springframework.data.annotation.Id
import s2.dsl.automate.model.WithS2Id
import s2.dsl.automate.model.WithS2State

@Document
open class ProjectEntity: WithS2Id<ProjectId>,WithS2State<ProjectState>  {
    @Id
    open lateinit var id: ProjectId
    open lateinit var status: ProjectState

    @Indexed
    var name: String? = null

    @Indexed
    var country: String? = null

    var creditingPeriodStartDate: DateTime? = null
    var creditingPeriodEndDate: DateTime? = null

    @Searchable
    var description: String? = null

    var dueDate: DateTime? = null
    var estimatedReduction: String? = null
    var localization: String? = null
    var proponentAccount: OrganizationRef? = null
    var proponent: String? = null
    var type: String? = null
    var referenceYear: String? = null
    var registrationDate: DateTime? = null
    var vintage: Double? = null
    var slug: Double? = null

//    @CreatedDate
//    val createdDate: Date? = null
//
//    @LastModifiedDate
//    val lastModifiedDate: Date? = null
    override fun s2Id() = id
    override fun s2State() = status
}
