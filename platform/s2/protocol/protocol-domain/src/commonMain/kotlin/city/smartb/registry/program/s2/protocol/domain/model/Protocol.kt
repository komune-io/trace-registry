package city.smartb.registry.program.s2.protocol.domain.model

import city.smartb.im.organization.domain.model.OrganizationId
import city.smartb.registry.program.s2.protocol.domain.automate.ProtocolId
import city.smartb.registry.program.s2.protocol.domain.automate.ProtocolState
import i2.keycloak.f2.user.domain.model.UserId

data class Protocol(
    val id: ProtocolId,
    val friendlyId: String,
    val beneficiaryId: OrganizationId,
    val supervisorId: UserId,
    val name: String,
    val status: ProtocolState,
)
