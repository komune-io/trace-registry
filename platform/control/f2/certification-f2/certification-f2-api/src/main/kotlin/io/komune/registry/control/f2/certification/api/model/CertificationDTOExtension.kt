package io.komune.registry.control.f2.certification.api.model

import io.komune.registry.control.core.cccev.certification.entity.Certification
import io.komune.registry.control.core.cccev.certification.entity.RequirementCertification
import io.komune.registry.control.f2.certification.domain.model.CertificationDTOBase
import io.komune.registry.control.f2.certification.domain.model.CertificationRef
import io.komune.registry.control.f2.protocol.api.model.toProtocolRef
import io.komune.registry.control.f2.protocol.api.service.CccevToProtocolConverter
import io.komune.registry.s2.commons.model.EvidenceTypeIdentifier
import io.komune.registry.s2.commons.model.InformationConceptIdentifier

fun Certification.toRef() = CertificationRef(
    id = id,
    protocol = requirementCertifications.first().requirement.toProtocolRef(),
    completionRate = 0.0 // TODO
)

fun Certification.toDTO(): CertificationDTOBase {
    val allValues = mutableMapOf<InformationConceptIdentifier, String?>()
    val allEvidences = mutableMapOf<EvidenceTypeIdentifier, String?>()

    fun RequirementCertification.extractValuesAndEvidences() {
        values.forEach { allValues[it.concept.identifier] = it.value }
        evidences.forEach { allEvidences[it.evidenceType.identifier] = it.file.toString() }
        subCertifications.forEach { it.extractValuesAndEvidences() }
    }
    requirementCertifications.forEach { it.extractValuesAndEvidences() }

    return CertificationDTOBase(
        id = id,
        protocol = CccevToProtocolConverter.convert(requirementCertifications.first().requirement),
        completionRate = 0.0, // TODO
        values = allValues,
        evidences = allEvidences,
        status = "PENDING", // TODO
        creator = null, // TODO
        validator = null, // TODO
        validatorOrganization = null, // TODO
        rejectReason = null, // TODO
        creationDate = creationDate,
        modificationDate = 0L // TODO modificationDate
    )
}
