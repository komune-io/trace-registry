package io.komune.registry.control.f2.protocol.domain.query

import f2.dsl.cqrs.page.PageDTO
import f2.dsl.fnc.F2Function
import io.komune.registry.control.f2.protocol.domain.model.ProtocolRef
import io.komune.registry.control.f2.protocol.domain.model.ProtocolRefDTO
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

typealias ProtocolPageFunction = F2Function<ProtocolPageQuery, ProtocolPageResult>

@JsExport
interface ProtocolPageQueryDTO {
    val type: String
    val offset: Int?
    val limit: Int?
}

@Serializable
data class ProtocolPageQuery(
    override val type: String,
    override val offset: Int?,
    override val limit: Int?
) : ProtocolPageQueryDTO

@JsExport
interface ProtocolPageResultDTO: PageDTO<ProtocolRefDTO>

@Serializable
data class ProtocolPageResult(
    override val items: List<ProtocolRef>,
    override val total: Int
) : ProtocolPageResultDTO
