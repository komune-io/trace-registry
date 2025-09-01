package io.komune.registry.control.f2.certification.domain.command

import f2.dsl.fnc.F2Function
import io.komune.registry.control.core.cccev.certification.command.CertificationSubmitCommand
import io.komune.registry.control.core.cccev.certification.command.CertificationSubmitCommandDTO
import io.komune.registry.control.core.cccev.certification.command.CertificationSubmittedEvent
import io.komune.registry.control.core.cccev.certification.command.CertificationSubmittedEventDTO
import kotlin.js.JsExport

typealias CertificationSubmitFunction = F2Function<CertificationSubmitCommandDTOBase, CertificationSubmittedEventDTOBase>

@JsExport
interface CertificationSubmitCommandDTO: CertificationSubmitCommandDTO

typealias CertificationSubmitCommandDTOBase = CertificationSubmitCommand

@JsExport
interface CertificationSubmittedEventDTO: CertificationSubmittedEventDTO

typealias CertificationSubmittedEventDTOBase = CertificationSubmittedEvent
