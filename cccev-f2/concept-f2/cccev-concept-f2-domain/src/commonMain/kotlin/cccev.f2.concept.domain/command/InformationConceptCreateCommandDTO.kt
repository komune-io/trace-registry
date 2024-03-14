package cccev.f2.concept.domain.command

import cccev.core.concept.command.InformationConceptCreateCommand
import cccev.core.concept.command.InformationConceptCreatedEvent
import cccev.f2.concept.domain.D2InformationConceptF2Page
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Create an information concept.
 * @d2 function
 * @parent [D2InformationConceptF2Page]
 */
typealias InformationConceptCreateFunction = F2Function<InformationConceptCreateCommand, InformationConceptCreatedEvent>

/**
 * @d2 command
 * @parent [InformationConceptCreateFunction]
 */
@JsExport
@JsName("InformationConceptCreateCommandDTO")
interface InformationConceptCreateCommandDTO: cccev.core.concept.command.InformationConceptCreateCommandDTO

/**
 * @d2 event
 * @parent [InformationConceptCreateFunction]
 */
@JsExport
@JsName("InformationConceptCreatedEventDTO")
interface InformationConceptCreatedEventDTO: cccev.core.concept.command.InformationConceptCreatedEventDTO
