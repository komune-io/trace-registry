package io.komune.registry.control.f2.certification.domain.model

import io.komune.registry.control.f2.protocol.domain.model.ProtocolRefDTO
import io.komune.registry.s2.commons.model.CertificationId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface CertificationRefDTO {
    val id: CertificationId
    val protocol: ProtocolRefDTO
    val completionRate: Double
}

@Serializable
data class CertificationRef(
    override val id: CertificationId,
    override val protocol: ProtocolRefDTO,
    override val completionRate: Double
) : CertificationRefDTO
