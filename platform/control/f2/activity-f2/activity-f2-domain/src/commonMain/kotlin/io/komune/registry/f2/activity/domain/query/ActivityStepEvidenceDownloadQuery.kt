package io.komune.registry.f2.activity.domain.query

import cccev.dsl.model.CertificationId
import cccev.dsl.model.EvidenceId
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Download evidence of an activity step.
 * @d2 function
 * @parent [io.komune.registry.f2.activity.domain.D2ActivityF2Page]
 * @order 100
 */
typealias ActivityStepEvidenceDownloadFunction =
		F2Function<ActivityStepEvidenceDownloadQuery, ActivityStepEvidenceDownloadResult>

/**
 * Download evidence of an activity step.
 * @d2 query
 * @parent [ActivityStepEvidenceDownloadFunction]
 */
@JsExport
@JsName("ActivityStepEvidenceDownloadQueryDTO")
interface ActivityStepEvidenceDownloadQueryDTO {
	val certificationId: CertificationId
	val evidenceId: EvidenceId
}

/**
 * @d2 inherit
 */
data class ActivityStepEvidenceDownloadQuery(
	override val evidenceId: EvidenceId,
	override val certificationId: CertificationId,
): ActivityStepEvidenceDownloadQueryDTO

/**
 * @d2 event
 * @parent [ActivityStepEvidenceDownloadFunction]
 */
typealias ActivityStepEvidenceDownloadResult = ByteArray
