package cccev.f2.certification.domain.command

import cccev.core.certification.command.CertificationAddedValuesEvent
import cccev.core.certification.command.CertificationFillValuesCommand
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport

/**
 * Provide data for the information concepts specified in the requirements a certification has to fulfill.
 * @d2 function
 * @parent [cccev.f2.certification.domain.D2CertificationApiPage]
 * @child [cccev.core.certification.command.CertificationFillValuesCommandDTO]
 * @child [cccev.core.certification.command.CertificationAddedValuesEventDTO]
 * @order 30
 */
typealias CertificationFillValuesFunction = F2Function<CertificationFillValuesCommand, CertificationAddedValuesEvent>

@JsExport
interface CertificationFillValuesCommandDTO: cccev.core.certification.command.CertificationFillValuesCommandDTO

@JsExport
interface CertificationAddedValuesEventDTO: cccev.core.certification.command.CertificationAddedValuesEventDTO
