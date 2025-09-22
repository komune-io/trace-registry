package io.komune.registry.control.f2.protocol.domain.query

import f2.dsl.cqrs.page.PageDTO
import f2.dsl.fnc.F2Function
import io.komune.registry.control.f2.protocol.domain.model.BadgeDTO
import io.komune.registry.control.f2.protocol.domain.model.BadgeDTOBase
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

typealias BadgePageFunction = F2Function<BadgePageQuery, BadgePageResult>

@JsExport
interface BadgePageQueryDTO {
    val protocolType: String
    val offset: Int?
    val limit: Int?
}

@Serializable
data class BadgePageQuery(
    override val protocolType: String,
    override val offset: Int?,
    override val limit: Int?
) : BadgePageQueryDTO

@JsExport
interface BadgePageResultDTO: PageDTO<BadgeDTO>

@Serializable
data class BadgePageResult(
    override val items: List<BadgeDTOBase>,
    override val total: Int
) : BadgePageResultDTO
