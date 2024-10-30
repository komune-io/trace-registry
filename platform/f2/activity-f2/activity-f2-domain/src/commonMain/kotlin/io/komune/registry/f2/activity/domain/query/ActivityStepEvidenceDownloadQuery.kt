package io.komune.registry.f2.activity.domain.query

import cccev.dsl.model.CertificationId
import cccev.dsl.model.EvidenceId
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport
import kotlin.js.JsName

typealias ActivityStepEvidenceDownloadFunction =
		F2Function<ActivityStepEvidenceDownloadQuery, ActivityStepEvidenceDownloadResult>

@JsExport
@JsName("ActivityStepEvidenceDownloadQueryDTO")
interface ActivityStepEvidenceDownloadQueryDTO {
	val certificationId: CertificationId
	val evidenceId: EvidenceId
}

data class ActivityStepEvidenceDownloadQuery(
	override val evidenceId: EvidenceId,
	override val certificationId: CertificationId,
): ActivityStepEvidenceDownloadQueryDTO

typealias ActivityStepEvidenceDownloadResult = ByteArray
