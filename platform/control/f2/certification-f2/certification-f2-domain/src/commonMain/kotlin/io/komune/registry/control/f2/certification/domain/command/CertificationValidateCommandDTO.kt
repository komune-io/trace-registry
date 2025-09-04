package io.komune.registry.control.f2.certification.domain.command

import f2.dsl.fnc.F2Function
import kotlin.js.JsExport

typealias CertificationValidateFunction = F2Function<CertificationValidateCommandDTOBase, CertificationValidatedEventDTOBase>

@JsExport
interface CertificationValidateCommandDTO: io.komune.registry.control.core.cccev.certification.command.CertificationValidateCommandDTO

typealias CertificationValidateCommandDTOBase = io.komune.registry.control.core.cccev.certification.command.CertificationValidateCommand

@JsExport
interface CertificationValidatedEventDTO: io.komune.registry.control.core.cccev.certification.command.CertificationValidatedEventDTO

typealias CertificationValidatedEventDTOBase = io.komune.registry.control.core.cccev.certification.command.CertificationValidatedEvent
