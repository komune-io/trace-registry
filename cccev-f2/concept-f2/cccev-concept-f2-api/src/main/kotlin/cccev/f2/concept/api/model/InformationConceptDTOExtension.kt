package cccev.f2.concept.api.model

import cccev.core.concept.entity.InformationConcept
import cccev.core.concept.model.InformationConceptIdentifier
import cccev.f2.commons.CccevFlatGraph
import cccev.f2.concept.domain.model.InformationConceptFlat
import cccev.f2.unit.api.model.flattenTo

fun InformationConcept.flattenTo(graph: CccevFlatGraph): InformationConceptIdentifier {
    graph.concepts[identifier] = InformationConceptFlat(
        id = id,
        identifier = identifier,
        name = name,
        unitIdentifier = unit.flattenTo(graph).orEmpty(),
        description = description,
        expressionOfExpectedValue = expressionOfExpectedValue,
        dependsOn = dependencies.map { it.flattenTo(graph) }
    )
    return identifier
}
