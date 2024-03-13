package cccev.f2.certification.api.model

import cccev.core.certification.entity.SupportedValue
import cccev.core.certification.model.SupportedValueId
import cccev.f2.certification.domain.model.SupportedValueFlat
import cccev.f2.commons.CccevFlatGraph
import cccev.f2.concept.api.model.flattenTo

fun SupportedValue.flattenTo(graph: CccevFlatGraph): SupportedValueId {
    graph.supportedValues[id] = SupportedValueFlat(
        id = id,
        value = value,
        conceptIdentifier = concept.flattenTo(graph),
    )
    return id
}
