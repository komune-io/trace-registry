package io.komune.registry.s2.catalogue.domain.model

import f2.dsl.cqrs.page.PageDTO
import kotlin.js.JsExport

@JsExport
interface FacetPageDTO<out T>: PageDTO<T> {
    override val total: Int
    override val items: List<T>
    var distribution: Map<String, Map<String, Int>>
}

class FacetPage<out T>(
    override val total: Int,
    override val items: List<T>,
    override var distribution: Map<String, Map<String, Int>>
): FacetPageDTO<T>

@JsExport
interface DistributionPageDTO<out T>: PageDTO<T> {
    override val total: Int
    override val items: List<T>
    var distribution: Map<String, List<FacetDistributionDTO>>
}

class DistributionPage<out T>(
    override val total: Int,
    override val items: List<T>,
    override var distribution: Map<String, List<FacetDistributionDTO>>
): DistributionPageDTO<T>

@JsExport
interface FacetDistributionDTO{
    val id: String
    val name: String
    val size: Int
}

data class FacetDistribution(
    override val id: String,
    override val name: String,
    override val size: Int
): FacetDistributionDTO
