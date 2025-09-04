package io.komune.registry.control.core.cccev.certification.command

import io.komune.registry.s2.commons.model.CertificationId
import kotlinx.serialization.Serializable
import s2.dsl.automate.S2Command
import kotlin.js.JsExport

@JsExport
interface CertificationValidateCommandDTO {
    val id: CertificationId
}

@Serializable
data class CertificationValidateCommand(
    override val id: CertificationId
) : CertificationValidateCommandDTO, S2Command<CertificationId>

@JsExport
interface CertificationValidatedEventDTO {
    val id: CertificationId
}

@Serializable
data class CertificationValidatedEvent(
    override val id: CertificationId
) : CertificationValidatedEventDTO
