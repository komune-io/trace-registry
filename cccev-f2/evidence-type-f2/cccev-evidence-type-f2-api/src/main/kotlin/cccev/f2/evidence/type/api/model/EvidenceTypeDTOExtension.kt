package cccev.f2.evidence.type.api.model

import cccev.core.evidencetype.entity.EvidenceType
import cccev.core.evidencetype.model.EvidenceTypeId
import cccev.f2.commons.CccevFlatGraph
import cccev.f2.concept.api.model.flattenTo
import cccev.f2.evidence.type.domain.model.EvidenceTypeFlat

fun EvidenceType.flattenTo(graph: CccevFlatGraph): EvidenceTypeId {
    graph.evidenceTypes[id] = EvidenceTypeFlat(
        id = id,
        name = name,
        conceptIdentifiers = concepts.map { it.flattenTo(graph) }
    )
    return id
}
