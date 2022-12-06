package city.smartb.registry.program.s2.asset.api.entity.asset

import  city.smartb.registry.program.s2.asset.domain.model.AssetId
import city.smartb.registry.program.s2.asset.domain.automate.AssetState
import city.smartb.registry.program.s2.asset.domain.model.ActivityRef
import city.smartb.registry.program.s2.asset.domain.model.ProjectRef
import city.smartb.registry.program.s2.asset.domain.model.ProtocolRef
import city.smartb.registry.program.s2.asset.domain.model.UserRef
import com.redis.om.spring.annotations.Document
import com.redis.om.spring.annotations.Searchable
import java.util.Date
import org.springframework.data.annotation.CreatedDate
import org.springframework.data.annotation.Id
import org.springframework.data.annotation.LastModifiedDate
import s2.dsl.automate.model.WithS2Id
import s2.dsl.automate.model.WithS2State

@Document
open class AssetEntity: WithS2Id<AssetId>, WithS2State<AssetState>  {
    @Id
    open lateinit var id: AssetId
    open lateinit var status: AssetState


    var activity: ActivityRef? = null
    var protocol: ProtocolRef? = null
    var project: ProjectRef? = null
    var issuanceDate: Long? = null
    var vintageStart: Long? = null
    var vintageEnd: Long? = null
    var totalVintageQuantity: Double? = null
    @Searchable
    var creditStatus: String? = null
    var creditsIssuedToBufferPool: Double? = null
    var quantityIssued: Double? = null
    var serialNumber: String? = null
    var verifiedRemoval: String? = null
    var retirementDate: Long? = null
    var retirementBeneficiary: UserRef? = null
    var retirementDetails: String? = null
    var retirementReason: String? = null
    var exPostUnitPrice: Double? = null
    var exAnteUnitPrice: Double? = null
    var slug: String? = null
    var additionalCertifications: String? = null
    var arbEligible: Boolean? = null
    var eligibleForCORSIA: Boolean? = null
    var retiredForCORSIA: Boolean? = null
    var aeroplaneOperatorName: String? = null


    @CreatedDate
    private val createdDate: Date? = null

    @LastModifiedDate
    private val lastModifiedDate: Date? = null
    override fun s2Id() = id
    override fun s2State() = status
}
