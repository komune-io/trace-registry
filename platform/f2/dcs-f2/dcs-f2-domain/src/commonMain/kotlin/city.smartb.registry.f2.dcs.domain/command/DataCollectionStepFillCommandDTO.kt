package city.smartb.registry.f2.dcs.domain.command

import cccev.core.certification.model.CertificationId
import cccev.s2.concept.domain.InformationConceptIdentifier
import cccev.s2.requirement.domain.RequirementIdentifier
import f2.dsl.fnc.F2Function
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

typealias DataCollectionStepFillFunction = F2Function<DataCollectionStepFillCommand, DataCollectionStepFilledEvent>

@JsExport
interface DataCollectionStepFillCommandDTO {
    val identifier: RequirementIdentifier
    val certificationId: CertificationId
    val values: Map<InformationConceptIdentifier, String?>
}

@Serializable
data class DataCollectionStepFillCommand(
    override val identifier: RequirementIdentifier,
    override val certificationId: CertificationId,
    override val values: Map<InformationConceptIdentifier, String?>
): DataCollectionStepFillCommandDTO

@JsExport
interface DataCollectionStepFilledEventDTO {
    val identifier: RequirementIdentifier
    val certificationId: CertificationId
}

data class DataCollectionStepFilledEvent(
    override val identifier: RequirementIdentifier,
    override val certificationId: CertificationId
): DataCollectionStepFilledEventDTO
