package io.komune.registry.control.f2.protocol.domain.query

import f2.dsl.fnc.F2Function
import io.komune.registry.control.f2.protocol.domain.model.ProtocolDTO
import io.komune.registry.s2.commons.model.RequirementId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

typealias ProtocolGetFunction = F2Function<ProtocolGetQuery, ProtocolGetResult>

@JsExport
interface ProtocolGetQueryDTO {
    val id: RequirementId
}

@Serializable
data class ProtocolGetQuery(
    override val id: RequirementId
) : ProtocolGetQueryDTO

@JsExport
interface ProtocolGetResultDTO {
    val item: ProtocolDTO?
}

@Serializable
data class ProtocolGetResult(
    override val item: ProtocolDTO?
) : ProtocolGetResultDTO
