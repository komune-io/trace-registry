package cccev.f2.certification.api.model

import cccev.core.certification.entity.SupportedValue
import cccev.core.certification.model.SupportedValueId
import cccev.f2.certification.domain.model.SupportedValueFlat
import cccev.f2.commons.FlatGraph
import cccev.f2.concept.api.model.flattenTo
import cccev.f2.concept.api.model.unflatten
import f2.spring.exception.NotFoundException

fun SupportedValue.flattenTo(graph: FlatGraph): SupportedValueId {
    graph.values[id] = SupportedValueFlat(
        id = id,
        value = value,
        conceptIdentifier = concept.flattenTo(graph),
    )
    return id
}

fun SupportedValueFlat.unflatten(graph: FlatGraph): SupportedValue {
    return SupportedValue().also { supportedValue ->
        supportedValue.id = id
        supportedValue.value = value
        supportedValue.concept = graph.concepts[conceptIdentifier]
            ?.unflatten(graph)
            ?: throw NotFoundException("InformationConcept", conceptIdentifier)
    }
}
