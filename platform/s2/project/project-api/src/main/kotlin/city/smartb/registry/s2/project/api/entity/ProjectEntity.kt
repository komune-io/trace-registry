package city.smartb.registry.s2.project.api.entity

import cccev.s2.concept.domain.InformationConceptIdentifier
import city.smartb.registry.s2.asset.domain.automate.AssetPoolId
import city.smartb.registry.s2.project.domain.automate.ProjectState
import city.smartb.registry.s2.project.domain.model.ActivityIdentifier
import city.smartb.registry.s2.project.domain.model.CertificationRef
import city.smartb.registry.s2.project.domain.model.DateTime
import city.smartb.registry.s2.project.domain.model.OrganizationRefDTO
import city.smartb.registry.s2.project.domain.model.ProjectId
import city.smartb.registry.s2.project.domain.model.ProjectIdentifier
import city.smartb.registry.s2.project.domain.model.SdgNumber
import com.redis.om.spring.annotations.Document
import com.redis.om.spring.annotations.Indexed
import com.redis.om.spring.annotations.Searchable
import com.redis.om.spring.annotations.TagIndexed
import org.springframework.data.annotation.Id
import org.springframework.data.redis.domain.geo.GeoLocation
import s2.dsl.automate.model.WithS2Id
import s2.dsl.automate.model.WithS2State

@Document
open class ProjectEntity: WithS2Id<ProjectId>,WithS2State<ProjectState>  {

    @Id
    open lateinit var id: ProjectId

    @Searchable(nostem=true)
    open lateinit var status: ProjectState


    @Searchable(nostem=true)
    var identifier: ProjectIdentifier? = null

    @Searchable(nostem=true)
    var name: String? = null

    @Searchable(nostem=true)
    var country: String? = null

    @TagIndexed
    var indicator: InformationConceptIdentifier = ""

    @Searchable(nostem=true)
    var subContinent: String? = null

    var creditingPeriodStartDate: DateTime? = null

    var creditingPeriodEndDate: DateTime? = null

    @Searchable(nostem=true)
    var description: String? = null

    @Indexed
    var dueDate: DateTime? = null

    @Searchable(nostem=true)
    var estimatedReduction: String? = null

    @Searchable(nostem=true)
    var localization: String? = null

    @Indexed
    var proponent: OrganizationRefEntity? = null

    @Indexed
    var type: Int? = null

    @Searchable(nostem=true)
    var referenceYear: String? = null

    var registrationDate: DateTime? = null

    @Searchable(nostem=true)
    var slug: String? = null

    @Indexed
    var vvb: OrganizationRefEntity? = null

    @Indexed
    var assessor: OrganizationRefEntity? = null

    var location: GeoLocation<String>? = null
    var activities: List<ActivityIdentifier>? = null
    var request: CertificationRef? = null
    var sdgs: List<SdgNumber>? = null

    @Indexed
    var assetPools: MutableSet<AssetPoolId> = mutableSetOf()

    @Indexed
    var privacy: Boolean = true

//    @CreatedDate
//    val createdDate: Date? = null
//
//    @LastModifiedDate
//    val lastModifiedDate: Date? = null
    override fun s2Id() = id
    override fun s2State() = status
}


data class OrganizationRefEntity(
    @Indexed
    override val id: String,
    @Searchable(nostem=true)
    override val name: String
): OrganizationRefDTO
