package cccev.f2.certification.api.model

import cccev.core.certification.entity.Certification
import cccev.f2.certification.domain.model.CertificationFlat
import cccev.f2.commons.CertificationFlatGraph

fun Certification.flatten(): CertificationFlatGraph {
    return CertificationFlatGraph().also { graph ->
        graph.certification = CertificationFlat(
            id = id,
            requirementCertificationIds = requirementCertifications.map { it.flattenTo(graph) },
        )
    }
}
