package city.smartb.registry.program.s2.protocol.domain.command

import city.smartb.registry.program.s2.protocol.domain.automate.ProtocolCommand
import city.smartb.registry.program.s2.protocol.domain.automate.ProtocolEvent
import city.smartb.registry.program.s2.protocol.domain.automate.ProtocolId
import i2.keycloak.f2.user.domain.model.UserId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport
import kotlin.js.JsName

data class ProtocolDeleteCommand(
    override val id: ProtocolId,
    val deletedBy: UserId
): ProtocolCommand

/**
 * @d2 event
 * @parent [ProtocolDeleteFunction]
 */
@JsExport
@JsName("ProtocolDeletedEventDTO")
interface ProtocolDeletedEventDTO: ProtocolEvent {
    /**
     * Identifier of the deleted protocol.
     */
    override val id: ProtocolId

    /**
     * Identifier of the user that deleted the protocol.
     */
    val deletedBy: UserId
}

@Serializable
data class ProtocolDeletedEvent(
    override val id: ProtocolId,
    override val deletedBy: UserId
): ProtocolDeletedEventDTO
