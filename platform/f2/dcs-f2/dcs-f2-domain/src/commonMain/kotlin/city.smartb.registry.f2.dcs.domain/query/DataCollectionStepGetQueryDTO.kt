package city.smartb.registry.f2.dcs.domain.query

import cccev.s2.requirement.domain.RequirementIdentifier
import city.smartb.registry.f2.dcs.domain.model.DataCollectionStep
import city.smartb.registry.f2.dcs.domain.model.DataCollectionStepDTO
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface DataCollectionStepGetQueryDTO {
    val identifier: RequirementIdentifier
}

@Serializable
data class DataCollectionStepGetQuery(
    override val identifier: RequirementIdentifier
): DataCollectionStepGetQueryDTO

@JsExport
interface DataCollectionStepGetResultDTO {
    val structure: DataCollectionStepDTO
    val values: Map<String, String>
}

@Serializable
data class DataCollectionStepGetResult(
    override val structure: DataCollectionStep,
    override val values: Map<String, String>
): DataCollectionStepGetResultDTO
