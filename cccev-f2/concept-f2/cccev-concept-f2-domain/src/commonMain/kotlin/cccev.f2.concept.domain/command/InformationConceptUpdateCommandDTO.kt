package cccev.f2.concept.domain.command

import cccev.f2.concept.domain.D2InformationConceptF2Page
import cccev.s2.concept.domain.command.InformationConceptUpdateCommand
import cccev.s2.concept.domain.command.InformationConceptUpdatedEvent
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Create an information concept.
 * @d2 function
 * @parent [D2InformationConceptF2Page]
 */
typealias InformationConceptUpdateFunction = F2Function<InformationConceptUpdateCommand, InformationConceptUpdatedEvent>

/**
 * @d2 command
 * @parent [InformationConceptUpdateFunction]
 */
@JsExport
@JsName("InformationConceptUpdateCommandDTO")
interface InformationConceptUpdateCommandDTO: cccev.s2.concept.domain.command.InformationConceptUpdateCommandDTO

/**
 * @d2 event
 * @parent [InformationConceptUpdateFunction]
 */
@JsExport
@JsName("InformationConceptUpdatedEventDTO")
interface InformationConceptUpdatedEventDTO: cccev.s2.concept.domain.command.InformationConceptUpdatedEventDTO
