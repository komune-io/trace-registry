package io.komune.registry.f2.dcs.domain.command

import cccev.dsl.model.CertificationId
import cccev.dsl.model.InformationConceptIdentifier
import cccev.dsl.model.RequirementIdentifier
import f2.dsl.fnc.F2Function
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

typealias DataCollectionStepFillFunction = F2Function<DataCollectionStepFillCommand, DataCollectionStepFilledEvent>

@JsExport
interface DataCollectionStepFillCommandDTO {
    val identifier: RequirementIdentifier
    val certificationId: CertificationId
    val values: Map<InformationConceptIdentifier, String?>
}

@Serializable
data class DataCollectionStepFillCommand(
    override val identifier: RequirementIdentifier,
    override val certificationId: CertificationId,
    override val values: Map<InformationConceptIdentifier, String?>
): DataCollectionStepFillCommandDTO

@JsExport
interface DataCollectionStepFilledEventDTO {
    val identifier: RequirementIdentifier
    val certificationId: CertificationId
}

data class DataCollectionStepFilledEvent(
    override val identifier: RequirementIdentifier,
    override val certificationId: CertificationId
): DataCollectionStepFilledEventDTO
