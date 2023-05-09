package city.smartb.registry.program.f2.activity.api.model

import cccev.f2.concept.domain.model.InformationConceptDTOBase
import cccev.s2.certification.domain.model.Certification
import city.smartb.registry.program.f2.activity.domain.model.ActivityStep

fun InformationConceptDTOBase.toStep(certification: Certification?): ActivityStep {
    val value = certification?.supportedValues?.get(id)
    val evidences = certification?.evidences
    return ActivityStep(
        id = id,
        identifier = identifier ?: "",
        name = name,
        description = description,
        value = value,
        evidences = evidences?.toTypedArray(),
        completed = value != null,
        hasConcept = this
    )
}
