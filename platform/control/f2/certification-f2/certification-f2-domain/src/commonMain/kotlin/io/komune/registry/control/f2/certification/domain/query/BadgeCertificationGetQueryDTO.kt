package io.komune.registry.control.f2.certification.domain.query

import f2.dsl.fnc.F2Function
import io.komune.registry.control.f2.certification.domain.model.BadgeCertificationDTO
import io.komune.registry.control.f2.certification.domain.model.BadgeCertificationDTOBase
import io.komune.registry.s2.commons.model.BadgeCertificationId
import io.komune.registry.s2.commons.model.CatalogueId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

typealias BadgeCertificationGetFunction = F2Function<BadgeCertificationGetQuery, BadgeCertificationGetResult>

@JsExport
interface BadgeCertificationGetQueryDTO {
    val id: BadgeCertificationId
}

@Serializable
data class BadgeCertificationGetQuery(
    override val id: BadgeCertificationId
) : BadgeCertificationGetQueryDTO

@JsExport
interface BadgeCertificationGetResultDTO {
    val item: BadgeCertificationDTO?
    val catalogueId: CatalogueId?
}

@Serializable
data class BadgeCertificationGetResult(
    override val item: BadgeCertificationDTOBase?,
    override val catalogueId: CatalogueId?
) : BadgeCertificationGetResultDTO
