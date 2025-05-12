package io.komune.registry.f2.catalogue.domain.dto.structure

import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
@Serializable
enum class StructureType {
    GRID,
    HOME,
    ITEM,
    MENU,
    MENU_BRANCH,
    MENU_LEAF,
    MOSAIC,
    TABLE
}
