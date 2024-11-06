package io.komune.registry.f2.dcs.domain.query

import cccev.dsl.model.CertificationId
import cccev.dsl.model.InformationConceptIdentifier
import cccev.dsl.model.RequirementIdentifier
import f2.dsl.fnc.F2Function
import io.komune.registry.f2.dcs.domain.model.DataCollectionStep
import io.komune.registry.f2.dcs.domain.model.DataCollectionStepDTO
import kotlin.js.JsExport
import kotlinx.serialization.Serializable

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
