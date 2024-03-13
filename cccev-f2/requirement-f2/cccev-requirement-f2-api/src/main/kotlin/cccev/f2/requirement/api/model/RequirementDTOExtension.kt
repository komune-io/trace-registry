package cccev.f2.requirement.api.model

import cccev.core.requirement.entity.Requirement
import cccev.core.requirement.model.RequirementIdentifier
import cccev.f2.commons.CccevFlatGraph
import cccev.f2.concept.api.model.flattenTo
import cccev.f2.requirement.domain.model.RequirementFlat

fun Requirement.flattenTo(graph: CccevFlatGraph): RequirementIdentifier {
    graph.requirements[identifier] = RequirementFlat(
        id = id,
        identifier = identifier,
        kind = kind.name,
        description = description,
        type = type,
        name = name,
        hasRequirement = hasRequirement.map { it.flattenTo(graph) },
        hasConcept = hasConcept.map { it.flattenTo(graph) },
        hasEvidenceTypeList = emptyList(), // TODO
        enablingCondition = enablingCondition,
        enablingConditionDependencies = enablingConditionDependencies.map { it.flattenTo(graph) },
        required = required,
        validatingCondition = validatingCondition,
        validatingConditionDependencies = validatingConditionDependencies.map { it.flattenTo(graph) },
        order = order,
        properties = properties
    )
    return identifier
}
