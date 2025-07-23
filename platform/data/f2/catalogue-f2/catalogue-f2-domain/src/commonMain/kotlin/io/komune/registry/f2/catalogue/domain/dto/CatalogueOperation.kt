package io.komune.registry.f2.catalogue.domain.dto

import kotlin.js.JsExport

@JsExport
enum class CatalogueOperation {
    ALL,
    CLAIM_OWNERSHIP,
    RELATION,
    SEARCH,
    UPDATE
}
