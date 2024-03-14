package cccev.f2.concept.domain.command

import cccev.core.concept.command.InformationConceptUpdateCommand
import cccev.core.concept.command.InformationConceptUpdatedEvent
import cccev.f2.concept.domain.D2InformationConceptF2Page
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
interface InformationConceptUpdateCommandDTO: cccev.core.concept.command.InformationConceptUpdateCommandDTO

/**
 * @d2 event
 * @parent [InformationConceptUpdateFunction]
 */
@JsExport
@JsName("InformationConceptUpdatedEventDTO")
interface InformationConceptUpdatedEventDTO: cccev.core.concept.command.InformationConceptUpdatedEventDTO
