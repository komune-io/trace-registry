package cccev.f2.certification.api.model

import cccev.core.certification.entity.RequirementCertification
import cccev.core.certification.model.RequirementCertificationId
import cccev.f2.certification.domain.model.RequirementCertificationFlat
import cccev.f2.commons.CccevFlatGraph
import cccev.f2.requirement.api.model.flattenTo

fun RequirementCertification.flattenTo(graph: CccevFlatGraph): RequirementCertificationId {
    graph.requirementCertifications[id] = RequirementCertificationFlat(
        id = id,
        requirementIdentifier = requirement.flattenTo(graph),
        subCertificationIds = subCertifications.map { it.flattenTo(graph) },
        valueIds = values.map { it.flattenTo(graph) },
        isEnabled = isEnabled,
        isValidated = isValidated,
        isFulfilled = isFulfilled,
        hasAllValues = hasAllValues,
    )
    return id
}
