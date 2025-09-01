package io.komune.registry.control.f2.certification.domain.query

import f2.dsl.cqrs.page.PageDTO
import f2.dsl.fnc.F2Function
import io.komune.im.commons.model.OrganizationId
import io.komune.registry.control.core.cccev.certification.CertificationState
import io.komune.registry.control.f2.certification.domain.model.CertificationRef
import io.komune.registry.control.f2.certification.domain.model.CertificationRefDTO
import io.komune.registry.s2.commons.model.Language
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

typealias CertificationPageFunction = F2Function<CertificationPageQuery, CertificationPageResult>

@JsExport
interface CertificationPageQueryDTO {
    val language: Language
    val status: List<CertificationState>?
    val protocolName: String?
    val creatorOrganizationId: OrganizationId?
    val offset: Int?
    val limit: Int?
}

@Serializable
data class CertificationPageQuery(
    override val language: Language,
    override val status: List<CertificationState>?,
    override val protocolName: String?,
    override val creatorOrganizationId: OrganizationId?,
    override val offset: Int?,
    override val limit: Int?
) : CertificationPageQueryDTO

@JsExport
interface CertificationPageResultDTO : PageDTO<CertificationRefDTO>

@Serializable
data class CertificationPageResult(
    override val items: List<CertificationRef>,
    override val total: Int,
) : CertificationPageResultDTO
