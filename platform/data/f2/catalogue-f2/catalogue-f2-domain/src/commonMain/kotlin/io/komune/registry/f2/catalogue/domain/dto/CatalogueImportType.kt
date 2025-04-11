package io.komune.registry.f2.catalogue.domain.dto

import kotlin.js.JsExport

@JsExport
enum class CatalogueImportType(val catalogueType: String) {
    M100_PROJECTS("100m-project"),
}
