package io.komune.registry.control.core.cccev.certification.command

import io.komune.registry.s2.commons.model.CertificationId
import kotlinx.serialization.Serializable
import s2.dsl.automate.S2Command
import kotlin.js.JsExport

@JsExport
interface CertificationRejectCommandDTO {
    val id: CertificationId
    val reason: String
}

@Serializable
data class CertificationRejectCommand(
    override val id: CertificationId,
    override val reason: String
) : CertificationRejectCommandDTO, S2Command<CertificationId>

@JsExport
interface CertificationRejectedEventDTO {
    val id: CertificationId
    val reason: String
}

@Serializable
data class CertificationRejectedEvent(
    override val id: CertificationId,
    override val reason: String
) : CertificationRejectedEventDTO
