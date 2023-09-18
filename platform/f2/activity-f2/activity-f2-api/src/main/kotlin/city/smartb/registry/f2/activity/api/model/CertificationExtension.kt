package city.smartb.registry.f2.activity.api.model

import cccev.s2.certification.domain.model.Certification
import cccev.s2.certification.domain.model.EvidenceId
import city.smartb.registry.api.commons.exception.NotFoundException
import city.smartb.registry.s2.project.domain.model.CertificationRef

fun Certification.toRef() = CertificationRef(
    id = id,
    identifier = identifier
)

fun Certification.getEvidence(id: EvidenceId) = getEvidenceOrNull(id) ?: throw NotFoundException("Evidence", id)

fun Certification.getEvidenceOrNull(id: EvidenceId) = evidences
    .values
    .flatten()
    .firstOrNull { it.id == id }
