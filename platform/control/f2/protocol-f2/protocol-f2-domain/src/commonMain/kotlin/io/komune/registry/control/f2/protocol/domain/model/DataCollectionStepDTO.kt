package io.komune.registry.control.f2.protocol.domain.model

import io.komune.registry.s2.commons.model.RequirementId
import io.komune.registry.s2.commons.model.RequirementIdentifier
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
sealed interface DataCollectionStepDTO: ProtocolDTO {
    val sections: List<DataSectionDTO>
}

@Serializable
data class DataCollectionStep(
    override val id: RequirementId = "",
    override val identifier: RequirementIdentifier,
    override val label: String?,
    override val description: String?,
    override val sections: List<DataSection>,
    override val conditions: List<DataCondition>?,
    override val properties: String?,
    override val badges: List<BadgeDTOBase>?,
): DataCollectionStepDTO {
    override val steps: List<ProtocolDTO>? = null
    override val type: String = ReservedProtocolTypes.DATA_COLLECTION_STEP
}
