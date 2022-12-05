package city.smartb.registry.program.s2.protocol.api.entity.protocol

import city.smartb.registry.program.s2.protocol.domain.model.Protocol

fun ProtocolEntity.toProtocol() = Protocol(
    id = id,
    friendlyId = friendlyId,
    beneficiaryId = beneficiaryId,
    supervisorId = supervisorId,
    name = name,
    status = status,
)
