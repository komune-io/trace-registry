package city.smartb.registry.program.s2.protocol.domain.command

import city.smartb.im.commons.model.Address
import city.smartb.im.organization.domain.model.OrganizationId
import city.smartb.registry.program.s2.protocol.domain.automate.ProtocolEvent
import city.smartb.registry.program.s2.protocol.domain.automate.ProtocolId
import city.smartb.registry.program.s2.protocol.domain.automate.ProtocolInitCommand
import i2.keycloak.f2.user.domain.model.UserId
import kotlin.js.JsExport
import kotlin.js.JsName
import kotlinx.serialization.Serializable

data class ProtocolCreateCommand(
    val name: String,
    val beneficiaryId: OrganizationId,
    val address: Address,
    val supervisorId: UserId,
    val targetRnc: String?,
    val createdBy: UserId
): ProtocolInitCommand

@JsExport
@JsName("ProtocolCreatedEventDTO")
interface ProtocolCreatedEventDTO: ProtocolEvent {
    override val id: ProtocolId
    val createdBy: UserId
}

@Serializable
data class ProtocolCreatedEvent(
    override val id: ProtocolId,
    override val createdBy: UserId
): ProtocolCreatedEventDTO
