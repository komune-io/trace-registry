package io.komune.registry.control.core.cccev.certification.command

import io.komune.registry.s2.commons.model.CertificationId
import kotlinx.serialization.Serializable
import s2.dsl.automate.S2Command
import kotlin.js.JsExport

@JsExport
interface CertificationSubmitCommandDTO {
    val id: CertificationId
}

@Serializable
data class CertificationSubmitCommand(
    override val id: CertificationId
) : CertificationSubmitCommandDTO, S2Command<CertificationId>

@JsExport
interface CertificationSubmittedEventDTO {
    val id: CertificationId
}

@Serializable
data class CertificationSubmittedEvent(
    override val id: CertificationId
) : CertificationSubmittedEventDTO
