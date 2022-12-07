package city.smartb.registry.program.f2.protocol.domain.query

import city.smartb.registry.program.s2.protocol.domain.model.Protocol
import city.smartb.registry.program.s2.protocol.domain.model.ProtocolDTO
import f2.dsl.fnc.F2Function
import city.smartb.registry.program.s2.protocol.domain.model.ProtocolId
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Get Protocol By id
 * @d2 function
 * @parent [city.smartb.registry.program.s2.protocol.domain.D2ProtocolSectionApi]
 * @child [ProtocolGetQuery]
 * @child [ProtocolGetResult]
 */
typealias ProtocolGetFunction = F2Function<ProtocolGetQuery, ProtocolGetResult>

/**
 * @d2 query
 * @parent [ProtocolGetFunction]
 */
@JsExport
@JsName("ProtocolGetQueryDTO")
interface ProtocolGetQueryDTO {
    val id: ProtocolId
}

/**
 * @d2 event
 * @parent [ProtocolGetFunction]
 */
@JsExport
@JsName("ProtocolGetResultDTO")
interface ProtocolGetResultDTO {
    val item: ProtocolDTO?
}

/**
 * @d2 inherit
 */
data class ProtocolGetQuery(
    override val id: ProtocolId
): ProtocolGetQueryDTO

/**
 * @d2 inherit
 */
data class ProtocolGetResult(
    override val item: Protocol?
): ProtocolGetResultDTO
