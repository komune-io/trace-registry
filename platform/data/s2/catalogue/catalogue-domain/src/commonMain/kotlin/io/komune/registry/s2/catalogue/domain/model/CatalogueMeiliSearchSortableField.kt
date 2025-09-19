package io.komune.registry.s2.catalogue.domain.model

import io.komune.registry.s2.commons.model.MeiliSearchField
import io.komune.registry.s2.commons.model.Sort
import kotlin.js.JsExport

typealias CatalogueMeiliSearchSort = Sort<CatalogueMeiliSearchSortableField>

@JsExport
enum class CatalogueMeiliSearchSortableField(override val identifier: String): MeiliSearchField {
    BADGE_NUMERICAL_VALUES(CatalogueSearchableEntity::badgeNumericalValues.name),
    MODIFICATION_DATE(CatalogueSearchableEntity::modified.name)
}
