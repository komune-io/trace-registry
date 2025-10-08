package io.komune.registry.s2.commons.model.tuto

import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface TutorialConditionDTO {
    val type: TutorialConditionType
    val data: String?
}

@Serializable
data class TutorialCondition(
    override val type: TutorialConditionType,
    override val data: String?,
) : TutorialConditionDTO
