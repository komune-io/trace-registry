package io.komune.registry.f2.entity.domain.model

import io.komune.registry.s2.commons.model.Language
import kotlin.js.JsExport

@JsExport
interface EntityRefDTO {
    val id: String
    val identifier: String
    val type: EntityType
    val name: String
    val language: Language?
    val availableLanguages: List<Language>
}

data class EntityRef(
    override val id: String,
    override val identifier: String,
    override val type: EntityType,
    override val name: String,
    override val language: Language?,
    override val availableLanguages: List<Language>
) : EntityRefDTO
