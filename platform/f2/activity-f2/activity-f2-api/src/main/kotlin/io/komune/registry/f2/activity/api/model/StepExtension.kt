package io.komune.registry.f2.activity.api.model

import cccev.dsl.model.Certification
import cccev.dsl.model.Evidence
import cccev.dsl.model.InformationConcept
import io.komune.registry.f2.activity.domain.model.ActivityStep
import io.komune.registry.infra.fs.FsService

suspend fun InformationConcept.toStep(
    certification: Certification?,
    fsService: FsService
): ActivityStep {
    // TODO wait until evidences are reimplemented in cccev
//    val evidences = certification?.evidences?.get(id).orEmpty().mapNotNull { evidence ->
//        val file = evidence.file?.let {fsService.getFile(it)}
//        evidence.takeIf {
//            file?.metadata?.get(ActivityStepEvidenceFulfillCommandDTOBase::isPublic.name.lowercase()).toBoolean()
//        }
//    }
    val value = certification?.requirementCertifications
        ?.flatMap { it.values }
        ?.firstOrNull { it.providesValueFor == identifier }
        ?.value
    val evidences = emptyList<Evidence>()
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
