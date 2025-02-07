package io.komune.registry.s2.catalogue.domain.model

import f2.dsl.cqrs.page.PageDTO

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


