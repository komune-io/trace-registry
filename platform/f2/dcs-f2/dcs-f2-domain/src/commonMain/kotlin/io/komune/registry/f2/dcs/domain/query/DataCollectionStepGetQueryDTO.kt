package io.komune.registry.f2.dcs.domain.query

import cccev.core.certification.model.CertificationId
import cccev.s2.concept.domain.InformationConceptIdentifier
import cccev.s2.requirement.domain.RequirementIdentifier
import io.komune.registry.f2.dcs.domain.model.DataCollectionStep
import io.komune.registry.f2.dcs.domain.model.DataCollectionStepDTO
import f2.dsl.fnc.F2Function
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

typealias DataCollectionStepGetFunction = F2Function<DataCollectionStepGetQuery, DataCollectionStepGetResult>

@JsExport
interface DataCollectionStepGetQueryDTO {
    val identifier: RequirementIdentifier
    val certificationId: CertificationId?
}

@Serializable
data class DataCollectionStepGetQuery(
    override val identifier: RequirementIdentifier,
    override val certificationId: CertificationId?
): DataCollectionStepGetQueryDTO

@JsExport
interface DataCollectionStepGetResultDTO {
    val structure: DataCollectionStepDTO
    val values: Map<InformationConceptIdentifier, String?>
}

@Serializable
data class DataCollectionStepGetResult(
    override val structure: DataCollectionStep,
    override val values: Map<InformationConceptIdentifier, String?>
): DataCollectionStepGetResultDTO
