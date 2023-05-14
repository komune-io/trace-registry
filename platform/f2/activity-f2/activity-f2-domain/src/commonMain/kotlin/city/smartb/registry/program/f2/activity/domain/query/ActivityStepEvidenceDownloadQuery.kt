package city.smartb.registry.program.f2.activity.domain.query

import cccev.dsl.model.EvidenceId
import cccev.s2.certification.domain.model.CertificationIdentifier
import city.smartb.registry.program.f2.activity.domain.model.ActivityIdentifier
import city.smartb.registry.program.f2.activity.domain.model.ActivityStepIdentifier
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport
import kotlin.js.JsName

typealias ActivityStepEvidenceDownloadFunction = F2Function<ActivityStepEvidenceDownloadQuery, ActivityStepEvidenceDownloadResult>

@JsExport
@JsName("ActivityStepEvidenceDownloadQueryDTO")
interface ActivityStepEvidenceDownloadQueryDTO {
	val certificationIdentifier: CertificationIdentifier
	val evidenceId: EvidenceId
}

data class ActivityStepEvidenceDownloadQuery(
	override val evidenceId: EvidenceId,
	override val certificationIdentifier: CertificationIdentifier,
): ActivityStepEvidenceDownloadQueryDTO

typealias ActivityStepEvidenceDownloadResult = ByteArray
