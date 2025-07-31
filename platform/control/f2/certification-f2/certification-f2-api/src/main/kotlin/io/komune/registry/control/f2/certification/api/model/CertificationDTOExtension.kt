package io.komune.registry.control.f2.certification.api.model

import io.komune.registry.control.core.cccev.certification.entity.Certification
import io.komune.registry.control.f2.certification.domain.model.CertificationRef
import io.komune.registry.control.f2.protocol.domain.model.ProtocolRef
import io.komune.registry.s2.commons.model.RequirementId

suspend fun Certification.toRef(
    getProtocol: suspend (RequirementId) -> ProtocolRef
) = CertificationRef(
    id = id,
    protocol = getProtocol(requirementCertifications.first().requirement.id),
    completionRate = 0.0 // TODO
)
