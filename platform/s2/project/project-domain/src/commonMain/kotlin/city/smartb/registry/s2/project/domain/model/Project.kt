package city.smartb.registry.s2.project.domain.model

import cccev.s2.concept.domain.InformationConceptIdentifier
import city.smartb.registry.s2.asset.domain.automate.AssetPoolId
import city.smartb.registry.s2.commons.model.GeoLocation
import city.smartb.registry.s2.project.domain.automate.ProjectState
import kotlin.js.JsExport
import kotlinx.serialization.Serializable

typealias ProjectId = String
typealias ProjectIdentifier = String
typealias ActivityIdentifier = String
typealias SdgNumber = Int
typealias DateTime = Long

@JsExport
interface OrganizationRefDTO {
    val id: String
    val name: String
}

@Serializable
data class OrganizationRef(
    override val id: String,
    override val name: String
): OrganizationRefDTO

data class Project(
    val id: ProjectId,
    val identifier: ProjectIdentifier?,
    val country: String?,
    val indicator: InformationConceptIdentifier,
    val creditingPeriodStartDate: DateTime?,
    val creditingPeriodEndDate: DateTime?,
    val description: String?,
    val dueDate: DateTime?,
    val estimatedReductions: String?,
    val localization: String?,
    val name: String?,
    val proponent: OrganizationRef?,
    val type: Int?,
    val referenceYear: String?,
    val registrationDate: DateTime?,
    val slug: String?,
    val vvb: OrganizationRef?,
    val assessor: OrganizationRef?,
    val location: GeoLocation?,
    val creationDate: DateTime?,
    val lastModificationDate: DateTime?,
    val status: ProjectState,
    val activities: List<ActivityIdentifier>?,
    var sdgs: List<SdgNumber>?,
    val certification: CertificationRef?,
    val assetPools: List<AssetPoolId>,
    val isPrivate: Boolean
)
