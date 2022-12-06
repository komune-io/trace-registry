package city.smartb.registry.program.s2.protocol.domain.command

import city.smartb.im.commons.model.Address
import city.smartb.registry.program.s2.protocol.domain.automate.ProtocolCommand
import city.smartb.registry.program.s2.protocol.domain.automate.ProtocolEvent
import city.smartb.registry.program.s2.protocol.domain.automate.ProtocolId
import i2.keycloak.f2.user.domain.model.UserId
import kotlin.js.JsExport
import kotlin.js.JsName

data class ProtocolUpdateDetailsCommand(
    override val id: ProtocolId,
    val name: String,
    val targetRnc: String?,
    val address: Address,
    val supervisorId: UserId
): ProtocolCommand

/**
 * @d2 event
 * @parent [ProtocolUpdateDetailsFunction]
 */
@JsExport
@JsName("ProtocolUpdatedDetailsEventDTO")
interface ProtocolUpdatedDetailsEventDTO: ProtocolEvent {
    /**
     * Identifier of the updated protocol.
     */
    override val id: ProtocolId
}

data class ProtocolUpdatedDetailsEvent(
    override val id: ProtocolId,
): ProtocolUpdatedDetailsEventDTO
