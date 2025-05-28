package io.komune.registry.s2.catalogue.domain.model.structure

import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
@Serializable
enum class StructureType {
    FACTORY,
    GRID,
    HOME,
    ITEM,
    MENU,
    MENU_BRANCH,
    MENU_LEAF,
    MOSAIC,
    TABLE,
    TRANSIENT
}
