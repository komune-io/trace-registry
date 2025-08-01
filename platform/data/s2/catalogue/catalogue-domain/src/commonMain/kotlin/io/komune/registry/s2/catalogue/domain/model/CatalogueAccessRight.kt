package io.komune.registry.s2.catalogue.domain.model

import kotlin.js.JsExport

@JsExport
enum class CatalogueAccessRight {
    PUBLIC, PROTECTED, PRIVATE;

    fun isPublicOrProtected(): Boolean {
        return this == PUBLIC || this == PROTECTED
    }
}
