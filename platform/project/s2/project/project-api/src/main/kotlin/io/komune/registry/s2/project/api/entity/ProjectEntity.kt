package io.komune.registry.s2.project.api.entity

import cccev.dsl.model.CertificationId
import com.redis.om.spring.annotations.Document
import com.redis.om.spring.annotations.Indexed
import com.redis.om.spring.annotations.Searchable
import com.redis.om.spring.annotations.TagIndexed
import io.komune.registry.s2.asset.domain.automate.AssetPoolId
import io.komune.registry.s2.asset.domain.command.pool.InformationConceptIdentifier
import io.komune.registry.s2.project.domain.automate.ProjectState
import io.komune.registry.s2.project.domain.model.ActivityIdentifier
import io.komune.registry.s2.project.domain.model.DateTime
import io.komune.registry.s2.project.domain.model.OrganizationRefDTO
import io.komune.registry.s2.project.domain.model.ProjectId
import io.komune.registry.s2.project.domain.model.ProjectIdentifier
import io.komune.registry.s2.project.domain.model.SdgNumber
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
    var certificationId: CertificationId? = null
    var sdgs: List<SdgNumber>? = null

    @Indexed
    var assetPools: MutableSet<AssetPoolId> = mutableSetOf()

    @Indexed
    var privacy: Boolean = true

//    @CreatedDate
    var createdDate: Long = 0

    //
//    @LastModifiedDate
    var lastModifiedDate: Long = 0
    override fun s2Id() = id
    override fun s2State() = status
}


data class OrganizationRefEntity(
    @Indexed
    override val id: String,
    @Searchable(nostem=true)
    override val name: String
): OrganizationRefDTO
