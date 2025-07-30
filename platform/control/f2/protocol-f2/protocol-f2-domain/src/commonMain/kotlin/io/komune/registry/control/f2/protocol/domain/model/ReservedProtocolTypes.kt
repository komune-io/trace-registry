package io.komune.registry.control.f2.protocol.domain.model

import kotlin.js.JsExport

@JsExport
object ReservedProtocolTypes {
    const val DATA_COLLECTION_STEP = "data-collection-step"
    const val DATA_SECTION = "data-section"

    fun dataCollectionStep() = DATA_COLLECTION_STEP
    fun dataSection() = DATA_SECTION
}
