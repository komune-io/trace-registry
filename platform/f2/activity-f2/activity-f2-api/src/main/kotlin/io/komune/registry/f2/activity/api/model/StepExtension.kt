package io.komune.registry.f2.activity.api.model

import cccev.f2.commons.CertificationFlatGraph
import cccev.f2.concept.domain.model.InformationConceptDTOBase
import io.komune.registry.f2.activity.domain.model.ActivityStep
import io.komune.registry.infra.fs.FsService

suspend fun InformationConceptDTOBase.toStep(certification: CertificationFlatGraph?, fsService: FsService): ActivityStep {
    // TODO wait until evidences are reimplemented in cccev
//    val evidences = certification?.evidences?.get(id).orEmpty().mapNotNull { evidence ->
//        val file = evidence.file?.let {fsService.getFile(it)}
//        evidence.takeIf {
//            file?.metadata?.get(ActivityStepEvidenceFulfillCommandDTOBase::isPublic.name.lowercase()).toBoolean()
//        }
//    }
    val value = certification?.supportedValues
        ?.values
        ?.firstOrNull { it.conceptIdentifier == identifier }
        ?.value

    return ActivityStep(
        id = id,
        identifier = identifier ?: "",
        name = name,
        description = description,
        value = value,
//        evidences = evidences,
        completed = value != null,
        hasConcept = this
    )
}
