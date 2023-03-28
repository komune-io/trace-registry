package city.smartb.registry.program.s2.project.api.entity

import city.smartb.registry.program.s2.project.domain.automate.ProjectState
import city.smartb.registry.program.s2.project.domain.model.ActivityId
import city.smartb.registry.program.s2.project.domain.model.DateTime
import city.smartb.registry.program.s2.project.domain.model.OrganizationRef
import city.smartb.registry.program.s2.project.domain.model.ProjectId
import city.smartb.registry.program.s2.project.domain.model.ProjectIdentifier
import com.redis.om.spring.annotations.Document
import com.redis.om.spring.annotations.Indexed
import com.redis.om.spring.annotations.Searchable
import org.springframework.data.annotation.Id
import org.springframework.data.redis.domain.geo.GeoLocation
import s2.dsl.automate.model.WithS2Id
import s2.dsl.automate.model.WithS2State

@Document
open class ProjectEntity: WithS2Id<ProjectId>,WithS2State<ProjectState>  {

    @Id
    open lateinit var id: ProjectId

    @Indexed
    open lateinit var status: ProjectState

    @Searchable(nostem=true)
    var identifier: ProjectIdentifier? = null

    @Searchable(nostem=true)
    var name: String? = null

    @Searchable(nostem=true)
    var country: String? = null

    var creditingPeriodStartDate: DateTime? = null

    var creditingPeriodEndDate: DateTime? = null

    @Searchable(nostem=true)
    var description: String? = null

    var dueDate: DateTime? = null

    @Searchable(nostem=true)
    var estimatedReduction: String? = null

    @Searchable(nostem=true)
    var localization: String? = null

    var proponent: OrganizationRef? = null

    @Searchable(nostem=true)
    var type: String? = null

    @Searchable(nostem=true)
    var referenceYear: String? = null

    var registrationDate: DateTime? = null

    var vintage: Double? = null

    @Searchable(nostem=true)
    var slug: String? = null

    var vvb: OrganizationRef? = null

    var assessor: OrganizationRef? = null

    var location: GeoLocation<String>? = null
    var activities: List<ActivityId>? = null

//    @CreatedDate
//    val createdDate: Date? = null
//
//    @LastModifiedDate
//    val lastModifiedDate: Date? = null
    override fun s2Id() = id
    override fun s2State() = status
}
