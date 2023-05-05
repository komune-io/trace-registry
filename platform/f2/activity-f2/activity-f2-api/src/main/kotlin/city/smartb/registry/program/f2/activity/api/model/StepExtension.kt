package city.smartb.registry.program.f2.activity.api.model

import cccev.dsl.model.Evidence
import cccev.f2.concept.domain.model.InformationConceptDTOBase
import city.smartb.registry.program.f2.activity.domain.model.ActivityStep

fun InformationConceptDTOBase.toStep(value: String?, file: List<Evidence>? = null): ActivityStep {
    return ActivityStep(
        id = id,
        identifier = identifier ?: "",
        name = name,
        description = description,
        value = value,
        files = file,
        completed = value != null,
        hasConcept = this
    )
}
