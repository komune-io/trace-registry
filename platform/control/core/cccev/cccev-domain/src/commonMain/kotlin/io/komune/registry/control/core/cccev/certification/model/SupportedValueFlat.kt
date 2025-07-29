package io.komune.registry.control.core.cccev.certification.model

import io.komune.registry.s2.commons.model.InformationConceptIdentifier
import io.komune.registry.s2.commons.model.SupportedValueId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * TODO
 * @d2 model
 * @parent [cccev.f2.certification.domain.D2CertificationApiPage]
 * @order 30
 */
@JsExport
interface SupportedValueFlatDTO {
    val id: SupportedValueId
    val value: String?
    val conceptIdentifier: InformationConceptIdentifier
}

@Serializable
data class SupportedValueFlat(
    override val id: SupportedValueId,
    override val value: String?,
    override val conceptIdentifier: InformationConceptIdentifier
): SupportedValueFlatDTO
