import { TableCellLangue } from "./TableCellLangue"
import { TableCellType } from "./TableCellType"
import { TableCellIdentifier } from "./TableCellIdentifier"
import { TableCellCatalogues } from "./TableCellCatalogues"

export * from "./TableCellType"
export * from "./TableCellIdentifier"
export * from "./TableCellLangue"
export * from "./TableCellCatalogues"

export const catalogueTableColumns = {
    type: TableCellType,
    language: TableCellLangue,
    identifier: TableCellIdentifier,
    catalogues: TableCellCatalogues
}