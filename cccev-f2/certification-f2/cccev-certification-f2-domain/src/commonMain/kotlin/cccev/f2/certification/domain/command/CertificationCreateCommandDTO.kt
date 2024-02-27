package cccev.f2.certification.domain.command

import cccev.core.certification.command.CertificationCreateCommand
import cccev.core.certification.command.CertificationCreatedEvent
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport

/**
 * Create a certification.
 * @d2 function
 * @parent [cccev.f2.certification.domain.D2CertificationApiPage]
 * @child [cccev.core.certification.command.CertificationCreateCommandDTO]
 * @child [cccev.core.certification.command.CertificationCreatedEventDTO]
 * @order 10
 */
typealias CertificationCreateFunction = F2Function<CertificationCreateCommand, CertificationCreatedEvent>

@JsExport
interface CertificationCreateCommandDTO: cccev.core.certification.command.CertificationCreateCommandDTO

@JsExport
interface CertificationCreatedEventDTO: cccev.core.certification.command.CertificationCreatedEventDTO
