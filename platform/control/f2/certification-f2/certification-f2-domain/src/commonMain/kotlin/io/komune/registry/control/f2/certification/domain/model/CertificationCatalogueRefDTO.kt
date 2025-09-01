package io.komune.registry.control.f2.certification.domain.model

import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.CatalogueIdentifier
import io.komune.registry.s2.commons.model.CatalogueType
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface CertificationCatalogueRefDTO {
    val id: CatalogueId
    val identifier: CatalogueIdentifier
    val title: String
    val type: CatalogueType
}

@Serializable
data class CertificationCatalogueRef(
    override val id: CatalogueId,
    override val identifier: CatalogueIdentifier,
    override val title: String,
    override val type: CatalogueType
) : CertificationCatalogueRefDTO
