package city.smartb.registry.program.f2.protocol.domain.query

import city.smartb.registry.program.s2.protocol.domain.model.ProtocolDTO
import f2.dsl.cqrs.page.PageDTO
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Get page of protocol
 *
 * @d2 function
 * @parent [city.smartb.registry.program.s2.protocol.domain.D2ProtocolSectionApi]
 * @child [ProtocolPageQueryDTO]
 * @child [ProtocolPageResultDTO]
 */
typealias ProtocolPageFunction = F2Function<ProtocolPageQuery, ProtocolPageResult>

/**
 * @d2 query
 */
@JsExport
@JsName("ProtocolPageQueryDTO")
interface ProtocolPageQueryDTO {
    val name: String?
    val offset: Int?
    val limit: Int?
}

/**
 * @d2 inherit
 */
data class ProtocolPageQuery(
    override val name: String?,
    override val offset: Int?,
    override val limit: Int?,
): ProtocolPageQueryDTO

/**
 * Result of the query to get a page of protocols.
 * @d2 event
 */
@JsExport
@JsName("ProtocolPageResultDTO")
interface ProtocolPageResultDTO: PageDTO<ProtocolDTO>

/**
 * @d2 inherit
 */
data class ProtocolPageResult(
    override val items: List<ProtocolDTO>,
    override val total: Int
): ProtocolPageResultDTO
