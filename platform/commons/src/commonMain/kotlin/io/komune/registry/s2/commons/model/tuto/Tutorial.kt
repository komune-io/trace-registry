package io.komune.registry.s2.commons.model.tuto

import io.komune.registry.s2.commons.model.Language
import kotlinx.serialization.Serializable

@Serializable
data class Tutorial(
    val condition: TutorialCondition?,
    val content: Map<Language, String>,
    val image: String?,
)
