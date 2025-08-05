package io.komune.registry.control.f2.certification.domain.command

import io.komune.registry.s2.commons.model.CertificationId
import io.komune.registry.s2.commons.model.InformationConceptIdentifier
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface CertificationFillCommandDTO {
    val id: CertificationId
    val values: Map<InformationConceptIdentifier, String?>
}

@Serializable
data class CertificationFillCommandDTOBase(
    override val id: CertificationId,
    override val values: Map<InformationConceptIdentifier, String?>
) : CertificationFillCommandDTO

@JsExport
interface CertificationFilledEventDTO {
    val id: CertificationId
}

@Serializable
data class CertificationFilledEventDTOBase(
    override val id: CertificationId
) : CertificationFilledEventDTO
