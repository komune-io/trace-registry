package city.smartb.registry.program.f2.activity.api.model

import cccev.f2.concept.domain.model.InformationConceptDTOBase
import city.smartb.registry.program.f2.activity.domain.model.ActivityStep

fun InformationConceptDTOBase.toStep(value: String?): ActivityStep {
    return ActivityStep(
        id = id,
        identifier = identifier ?: "",
        name = name,
        description = description,
        value = value,
        file = null,
        completed = value != null,
        hasConcept = this
    )
}
