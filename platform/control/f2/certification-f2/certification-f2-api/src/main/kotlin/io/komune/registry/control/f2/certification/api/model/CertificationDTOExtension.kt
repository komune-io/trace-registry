package io.komune.registry.control.f2.certification.api.model

import io.komune.registry.control.core.cccev.certification.entity.Certification
import io.komune.registry.control.core.cccev.certification.entity.RequirementCertification
import io.komune.registry.control.f2.certification.api.CertificationEndpoint
import io.komune.registry.control.f2.certification.domain.model.BadgeCertificationDTOBase
import io.komune.registry.control.f2.certification.domain.model.CertificationCatalogueRef
import io.komune.registry.control.f2.certification.domain.model.CertificationDTOBase
import io.komune.registry.control.f2.certification.domain.model.CertificationRef
import io.komune.registry.control.f2.protocol.api.model.toProtocolRef
import io.komune.registry.control.f2.protocol.api.service.CccevToProtocolConverter
import io.komune.registry.f2.organization.domain.model.OrganizationRef
import io.komune.registry.f2.user.domain.model.UserRef
import io.komune.registry.s2.catalogue.domain.model.CatalogueModel
import io.komune.registry.s2.commons.model.CertificationId
import io.komune.registry.s2.commons.model.EvidenceTypeIdentifier
import io.komune.registry.s2.commons.model.InformationConceptIdentifier
import io.komune.registry.s2.commons.model.OrganizationId
import io.komune.registry.s2.commons.model.UserId

suspend fun Certification.toRef(
    getCatalogue: suspend (CertificationId) -> CertificationCatalogueRef?,
    getOrganization: suspend (OrganizationId) -> OrganizationRef,
    getUser: suspend (UserId) -> UserRef
) = CertificationRef(
    id = id,
    protocol = requirementCertifications.first().requirement.toProtocolRef(),
    catalogue = getCatalogue(id),
    completionRate = 0.0, // TODO
    badges = requirementCertifications.extractBadges(),
    creator = creatorUserId?.let { getUser(it) },
    creatorOrganization = creatorOrganizationId?.let { getOrganization(it) },
    status = status
)

suspend fun Certification.toDTO(
    getCatalogue: suspend (CertificationId) -> CertificationCatalogueRef?,
    getOrganization: suspend (OrganizationId) -> OrganizationRef,
    getUser: suspend (UserId) -> UserRef
): CertificationDTOBase {
    val allValues = mutableMapOf<InformationConceptIdentifier, String?>()
    val allEvidences = mutableMapOf<EvidenceTypeIdentifier, String?>()
    fun RequirementCertification.extractValuesAndEvidences() {
        values.forEach { allValues[it.concept.identifier] = it.value }
        evidences.forEach { allEvidences[it.evidenceType.identifier] = CertificationEndpoint.evidenceDownloadPath(id, it.id) }
        subCertifications.forEach { it.extractValuesAndEvidences() }
    }
    requirementCertifications.forEach { it.extractValuesAndEvidences() }

    return CertificationDTOBase(
        id = id,
        protocol = CccevToProtocolConverter.convert(requirementCertifications.first().requirement),
        catalogue = getCatalogue(id),
        completionRate = 0.0, // TODO
        values = allValues + allEvidences,
        badges = requirementCertifications.extractBadges(),
        status = status,
        creator = creatorUserId?.let { getUser(it) },
        creatorOrganization = creatorOrganizationId?.let { getOrganization(it) },
        auditor = auditorUserId?.let { getUser(it) },
        auditorOrganization = auditorOrganizationId?.let { getOrganization(it) },
        rejectReason = comment,
        creationDate = creationDate,
        modificationDate = lastModificationDate
    )
}

fun List<RequirementCertification>.extractBadges(): List<BadgeCertificationDTOBase> = flatMap { requirementCertification ->
    requirementCertification.badges.mapNotNull { badge ->
        badge.takeIf { it.level != null }?.toDTO()
    } + requirementCertification.subCertifications.extractBadges()
}

fun CatalogueModel.toRef() = CertificationCatalogueRef(
    id = id,
    identifier = identifier,
    title = title,
    type = type
)
