package city.smartb.registry.f2.activity.api.model

import cccev.f2.concept.domain.model.InformationConceptDTOBase
import cccev.s2.certification.domain.model.Certification
import city.smartb.registry.f2.activity.domain.command.ActivityStepEvidenceFulfillCommandDTOBase
import city.smartb.registry.f2.activity.domain.model.ActivityStep
import city.smartb.registry.infra.fs.FsService

suspend fun InformationConceptDTOBase.toStep(certification: Certification?, fsService: FsService): ActivityStep {
    val evidences = certification?.evidences?.get(id).orEmpty().mapNotNull { evidence ->
        val file = evidence.file?.let {fsService.getFile(it)}
        evidence.takeIf {
            file?.metadata?.get(ActivityStepEvidenceFulfillCommandDTOBase::isPublic.name.lowercase()).toBoolean()
        }
    }
    val value = certification?.supportedValues?.get(id)
    return ActivityStep(
        id = id,
        identifier = identifier ?: "",
        name = name,
        description = description,
        value = value,
        evidences = evidences,
        completed = value != null,
        hasConcept = this
    )
}
