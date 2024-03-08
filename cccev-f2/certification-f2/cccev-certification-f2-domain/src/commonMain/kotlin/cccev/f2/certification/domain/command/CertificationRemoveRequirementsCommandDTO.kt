package cccev.f2.certification.domain.command

import cccev.core.certification.command.CertificationRemoveRequirementsCommand
import cccev.core.certification.command.CertificationRemovedRequirementsEvent
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport

/**
 * Remove requirements to fulfill from a request.
 * @d2 function
 * @parent [cccev.f2.certification.domain.D2CertificationApiPage]
 * @child [cccev.core.certification.command.CertificationRemoveRequirementsCommandDTO]
 * @child [cccev.core.certification.command.CertificationRemovedRequirementsEventDTO]
 * @order 21
 */
typealias CertificationRemoveRequirementsFunction
        = F2Function<CertificationRemoveRequirementsCommand, CertificationRemovedRequirementsEvent>

@JsExport
interface CertificationRemoveRequirementsCommandDTO: cccev.core.certification.command.CertificationRemoveRequirementsCommandDTO

@JsExport
interface CertificationRemovedRequirementsEventDTO: cccev.core.certification.command.CertificationRemovedRequirementsEventDTO
