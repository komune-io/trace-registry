package io.komune.registry.s2.commons.model

import f2.dsl.cqrs.page.PageDTO
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

data class FacetPageModel<out T>(
    override val total: Int,
    override val items: List<T>,
    val distribution: Map<String, Map<String, Int>>
): PageDTO<T>

@JsExport
interface FacetPageDTO<out T>: PageDTO<T> {
    override val total: Int
    override val items: List<T>
    val facets: List<FacetDTO>
}

@Serializable
data class FacetPageDTOBase<out T>(
    override val total: Int,
    override val items: List<T>,
    override val facets: List<Facet>
): FacetPageDTO<T>

@JsExport
interface FacetDTO {
    val key: String
    val label: String
    val values: List<FacetValueDTO>
}

@Serializable
data class Facet(
    override val key: String,
    override val label: String,
    override val values: List<FacetValue>
): FacetDTO

@JsExport
interface FacetValueDTO {
    val key: String
    val label: String
    val count: Int
}

@Serializable
data class FacetValue(
    override val key: String,
    override val label: String,
    override val count: Int
): FacetValueDTO
