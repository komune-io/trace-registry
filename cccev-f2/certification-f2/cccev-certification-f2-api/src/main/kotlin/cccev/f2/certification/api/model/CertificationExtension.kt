package cccev.f2.certification.api.model

import cccev.core.certification.entity.Certification
import cccev.core.certification.model.CertificationId
import cccev.f2.certification.domain.model.CertificationFlat
import cccev.f2.commons.FlatGraph
import f2.spring.exception.NotFoundException

fun Certification.flattenTo(graph: FlatGraph): CertificationId {
    graph.certifications[id] = CertificationFlat(
        id = id,
        requirementCertificationIds = requirementCertifications.map { it.flattenTo(graph) },
    )
    return id
}

fun CertificationFlat.unflatten(graph: FlatGraph): Certification {
    return Certification().also { certification ->
        certification.id = id
        requirementCertificationIds.forEach { requirementCertificationId ->
            val requirementCertification = graph.requirementCertifications[requirementCertificationId]
                ?.unflatten(graph)
                ?: throw NotFoundException("RequirementCertification", requirementCertificationId)

            certification.requirementCertifications.add(requirementCertification)
        }
    }
}
