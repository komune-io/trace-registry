package io.komune.registry.s2.commons.model.tuto

import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface TutorialDTO {
    val condition: TutorialConditionDTO?
    val content: String?
    val image: String?
}

@Serializable
data class TutorialDTOBase(
    override val condition: TutorialCondition?,
    override val content: String?,
    override val image: String?,
) : TutorialDTO
