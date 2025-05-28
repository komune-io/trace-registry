package io.komune.registry.s2.structure.domain.model

@Deprecated("Use CatalogueStructure instead")
object StructureDefinition {
    const val ORDER = "order"
    const val MENU_ALIAS = "alias"
    const val MENU_TRANSIENT = "transient"
}

@Deprecated("Use CatalogueStructure instead")
object StructureType {
    const val GRID = "grid"
    const val ITEM = "item"
    const val TABLE = "table"
    const val MOSAIC = "mosaic"
    const val MENU_BRANCH = "menu-branch"
    const val MENU_LEAF = "menu-leaf"
    const val MENU = "menu"
    const val HOME = "home"
}
