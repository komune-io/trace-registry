package cccev.f2.evidence.type.domain.command

import cccev.core.evidencetype.command.EvidenceTypeCreateCommand
import cccev.core.evidencetype.command.EvidenceTypeCreatedEvent
import cccev.f2.evidence.type.domain.D2EvidenceTypeF2Page
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Create an evidence type
 * @d2 function
 * @parent [D2EvidenceTypeF2Page]
 */
typealias EvidenceTypeCreateFunction = F2Function<EvidenceTypeCreateCommand, EvidenceTypeCreatedEvent>

/**
 * @d2 command
 * @parent [EvidenceTypeCreateFunction]
 */
@JsExport
@JsName("EvidenceTypeCreateCommandDTO")
interface EvidenceTypeCreateCommandDTO: cccev.core.evidencetype.command.EvidenceTypeCreateCommandDTO

/**
 * @d2 event
 * @parent [EvidenceTypeCreateFunction]
 */
@JsExport
@JsName("EvidenceTypeCreatedEventDTO")
interface EvidenceTypeCreatedEventDTO: cccev.core.evidencetype.command.EvidenceTypeCreatedEventDTO
