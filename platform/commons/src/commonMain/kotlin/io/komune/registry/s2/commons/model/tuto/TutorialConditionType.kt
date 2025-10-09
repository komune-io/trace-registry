package io.komune.registry.s2.commons.model.tuto

import kotlin.js.JsExport

@JsExport
enum class TutorialConditionType {
    CATALOGUE_EMPTY_DATASET,
    CATALOGUE_NO_CERTIFICATION,
    CATALOGUE_PENDING_CERTIFICATION,
    CATALOGUE_PENDING_DRAFT
}
