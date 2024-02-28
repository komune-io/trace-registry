package cccev.f2.certification.api.model

import cccev.core.certification.entity.RequirementCertification
import cccev.core.certification.model.RequirementCertificationId
import cccev.f2.certification.domain.model.RequirementCertificationFlat
import cccev.f2.commons.FlatGraph
import cccev.f2.requirement.api.model.flattenTo
import cccev.f2.requirement.api.model.unflatten
import f2.spring.exception.NotFoundException

fun RequirementCertification.flattenTo(graph: FlatGraph): RequirementCertificationId {
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

fun RequirementCertificationFlat.unflatten(graph: FlatGraph): RequirementCertification {
    return RequirementCertification().also { requirementCertification ->
        requirementCertification.id = id
        requirementCertification.requirement = graph.requirements[requirementIdentifier]
            ?.unflatten(graph)
            ?: throw NotFoundException("Requirement", requirementIdentifier)

        subCertificationIds.forEach { subCertificationId ->
            val subCertification = graph.requirementCertifications[subCertificationId]
                ?.unflatten(graph)
                ?: throw NotFoundException("RequirementCertification", subCertificationId)

            requirementCertification.subCertifications.add(subCertification)
        }

        valueIds.forEach { valueId ->
            val value = graph.values[valueId]
                ?.unflatten(graph)
                ?: throw NotFoundException("SupportedValue", valueId)

            requirementCertification.values.add(value)
        }

        requirementCertification.isEnabled = isEnabled
        requirementCertification.isValidated = isValidated
        requirementCertification.isFulfilled = isFulfilled
        requirementCertification.hasAllValues = hasAllValues
    }
}
