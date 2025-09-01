package io.komune.registry.control.f2.certification.domain.command

import f2.dsl.fnc.F2Function
import io.komune.registry.control.core.cccev.certification.command.CertificationRejectCommand
import io.komune.registry.control.core.cccev.certification.command.CertificationRejectCommandDTO
import io.komune.registry.control.core.cccev.certification.command.CertificationRejectedEvent
import io.komune.registry.control.core.cccev.certification.command.CertificationRejectedEventDTO
import kotlin.js.JsExport

typealias CertificationRejectFunction = F2Function<CertificationRejectCommandDTOBase, CertificationRejectedEventDTOBase>

@JsExport
interface CertificationRejectCommandDTO: CertificationRejectCommandDTO

typealias CertificationRejectCommandDTOBase = CertificationRejectCommand

@JsExport
interface CertificationRejectedEventDTO: CertificationRejectedEventDTO

typealias CertificationRejectedEventDTOBase = CertificationRejectedEvent
