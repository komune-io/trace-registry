package cccev.f2.certification.domain.command

import cccev.core.certification.command.CertificationAddRequirementsCommand
import cccev.core.certification.command.CertificationAddedRequirementsEvent
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport

/**
 * Add requirements to fulfill in a certification.
 * @d2 function
 * @parent [cccev.f2.certification.domain.D2CertificationApiPage]
 * @child [cccev.core.certification.command.CertificationAddRequirementsCommandDTO]
 * @child [cccev.core.certification.command.CertificationAddedRequirementsEventDTO]
 * @order 20
 */
typealias CertificationAddRequirementsFunction = F2Function<CertificationAddRequirementsCommand, CertificationAddedRequirementsEvent>

@JsExport
interface CertificationAddRequirementsCommandDTO: cccev.core.certification.command.CertificationAddRequirementsCommandDTO

@JsExport
interface CertificationAddedRequirementsEventDTO: cccev.core.certification.command.CertificationAddedRequirementsEventDTO
