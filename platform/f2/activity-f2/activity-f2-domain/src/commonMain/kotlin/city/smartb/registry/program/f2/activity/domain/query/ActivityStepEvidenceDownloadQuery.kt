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
	val identifier: ActivityStepIdentifier
//	val activityIdentifier: ActivityIdentifier
	val certificationIdentifier: CertificationIdentifier
	val evidenceId: EvidenceId
	val fileName: String
}

data class ActivityStepEvidenceDownloadQuery(
//	override val activityIdentifier: ActivityIdentifier,
	override val identifier: ActivityStepIdentifier,
	override val certificationIdentifier: CertificationIdentifier,
	override val evidenceId: EvidenceId,
	override val fileName: String,
): ActivityStepEvidenceDownloadQueryDTO

typealias ActivityStepEvidenceDownloadResult = ByteArray
