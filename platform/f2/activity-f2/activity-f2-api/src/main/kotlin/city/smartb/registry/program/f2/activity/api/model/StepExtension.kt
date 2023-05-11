package city.smartb.registry.program.f2.activity.api.model

import cccev.f2.concept.domain.model.InformationConceptDTOBase
import cccev.s2.certification.domain.model.Certification
import city.smartb.registry.program.f2.activity.domain.model.ActivityStep

fun InformationConceptDTOBase.toStep(certification: Certification?): ActivityStep {
    val value = certification?.supportedValues?.get(id)
    return ActivityStep(
        id = id,
        identifier = identifier ?: "",
        name = name,
        description = description,
        value = value,
        evidences = certification?.evidences?.get(id).orEmpty(),
        completed = value != null,
        hasConcept = this
    )
}
