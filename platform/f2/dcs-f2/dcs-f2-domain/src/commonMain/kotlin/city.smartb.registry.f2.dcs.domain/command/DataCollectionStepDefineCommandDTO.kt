package city.smartb.registry.f2.dcs.domain.command

import cccev.s2.requirement.domain.RequirementIdentifier
import city.smartb.registry.f2.dcs.domain.model.DataSection
import city.smartb.registry.f2.dcs.domain.model.DataSectionDTO
import f2.dsl.fnc.F2Function
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

typealias DataCollectionStepDefineFunction = F2Function<DataCollectionStepDefineCommand, DataCollectionStepDefinedEvent>

@JsExport
interface DataCollectionStepDefineCommandDTO {
    val identifier: RequirementIdentifier
    val label: String
    val description: String?
    val sections: List<DataSectionDTO>
    val properties: Map<String, String>?
}

@Serializable
data class DataCollectionStepDefineCommand(
    override val identifier: RequirementIdentifier,
    override val label: String,
    override val description: String?,
    override val sections: List<DataSection>,
    override val properties: Map<String, String>?
): DataCollectionStepDefineCommandDTO

@JsExport
interface DataCollectionStepDefinedEventDTO {
    val identifier: RequirementIdentifier
}

data class DataCollectionStepDefinedEvent(
    override val identifier: RequirementIdentifier
): DataCollectionStepDefinedEventDTO
