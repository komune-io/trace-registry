package io.komune.registry.control.f2.protocol.domain.command

import f2.dsl.fnc.F2Function
import io.komune.registry.control.f2.protocol.domain.model.ProtocolDTO
import io.komune.registry.s2.commons.model.RequirementId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

typealias ProtocolDefineFunction = F2Function<ProtocolDefineCommandDTOBase, ProtocolDefinedEventDTOBase>

@JsExport
interface ProtocolDefineCommandDTO {
    val protocol: ProtocolDTO
}

@Serializable
data class ProtocolDefineCommandDTOBase(
    override val protocol: ProtocolDTO
) : ProtocolDefineCommandDTO

@JsExport
interface ProtocolDefinedEventDTO {
    val id: RequirementId
}

@Serializable
data class ProtocolDefinedEventDTOBase(
    override val id: RequirementId
) : ProtocolDefinedEventDTO
