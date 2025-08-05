package io.komune.registry.control.f2.certification.domain.query

import f2.dsl.fnc.F2Function
import io.komune.registry.control.f2.certification.domain.model.CertificationDTO
import io.komune.registry.s2.commons.model.CertificationId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

typealias CertificationGetFunction = F2Function<CertificationGetQuery, CertificationGetResult>

@JsExport
interface CertificationGetQueryDTO {
    val id: CertificationId
}

@Serializable
data class CertificationGetQuery(
    override val id: CertificationId
) : CertificationGetQueryDTO

@JsExport
interface CertificationGetResultDTO {
    val item: CertificationDTO?
}

@Serializable
data class CertificationGetResult(
    override val item: CertificationDTO?
) : CertificationGetResultDTO
