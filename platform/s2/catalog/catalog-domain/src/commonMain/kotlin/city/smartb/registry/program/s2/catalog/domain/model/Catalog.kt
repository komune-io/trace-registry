package city.smartb.registry.program.s2.catalog.domain.model

import city.smartb.registry.program.s2.catalog.domain.automate.CatalogId
import city.smartb.registry.program.s2.catalog.domain.automate.CatalogState

data class Catalog(
    val id: CatalogId,
    val status: CatalogState,
)
