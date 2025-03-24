package io.komune.registry.f2.entity.domain.query

import f2.dsl.fnc.F2Function
import io.komune.registry.f2.entity.domain.model.EntityRef
import io.komune.registry.f2.entity.domain.model.EntityRefDTO
import io.komune.registry.f2.entity.domain.model.EntityType
import io.komune.registry.s2.commons.model.Language
import kotlin.js.JsExport

typealias EntityRefGetFunction = F2Function<EntityRefGetQuery, EntityRefGetResult>

@JsExport
interface EntityRefGetQueryDTO {
    val id: String
    val type: EntityType
    val language: Language
    val otherLanguageIfAbsent: Boolean?
}

data class EntityRefGetQuery(
    override val id: String,
    override val type: EntityType,
    override val language: Language,
    override val otherLanguageIfAbsent: Boolean = false
) : EntityRefGetQueryDTO

@JsExport
interface EntityRefGetQueryResultDTO {
    val item: EntityRefDTO?
}

data class EntityRefGetResult(
    override val item: EntityRef?
) : EntityRefGetQueryResultDTO
