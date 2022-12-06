package city.smartb.registry.program.s2.protocol.domain.command

import city.smartb.registry.program.s2.protocol.domain.automate.ProtocolEvent
import city.smartb.registry.program.s2.protocol.domain.model.ProtocolId
import kotlin.js.JsExport
import kotlin.js.JsName


/**
 * @d2 event
 * @parent [city.smartb.registry.program.s2.protocol.domain.D2ApiSectionModel]
 */
@JsExport
@JsName("ProtocolUpdatedDetailsEventDTO")
interface ProtocolUpdatedDetailsEventDTO: ProtocolEvent {
    override val id: ProtocolId
}

/**
 * @d2 inherit
 */
data class ProtocolUpdatedEvent(
    override val id: ProtocolId,
): ProtocolUpdatedDetailsEventDTO
