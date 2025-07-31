package io.komune.registry.control.core.cccev.evidencetype.command

import f2.dsl.fnc.F2Function
import io.komune.registry.s2.commons.model.EvidenceTypeId
import io.komune.registry.s2.commons.model.EvidenceTypeIdentifier
import io.komune.registry.s2.commons.model.InformationConceptId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Create an evidence type
 * @d2 function
 * @parent [D2EvidenceTypePage]
 */
typealias EvidenceTypeCreateFunction = F2Function<EvidenceTypeCreateCommand, EvidenceTypeCreatedEvent>

/**
 * @d2 command
 */
@JsExport
@JsName("EvidenceTypeCreateCommandDTO")
interface EvidenceTypeCreateCommandDTO {
    /**
     * Custom unique identifier for the evidence type. If null, a random id will be generated.
     */
    val identifier: EvidenceTypeIdentifier?

    /**
     * Name of the evidence type
     * @example "Weather report"
     */
    val name: String

    /**
     * Id of the supported information concepts
     */
    val conceptIds: List<InformationConceptId>
}

/**
 * @d2 inherit
 */
@Serializable
data class EvidenceTypeCreateCommand(
    override val identifier: EvidenceTypeIdentifier?,
    override val name: String,
    override val conceptIds: List<InformationConceptId> = emptyList()
): EvidenceTypeCreateCommandDTO

/**
 * @d2 event
 */
@JsExport
@JsName("EvidenceTypeCreatedEventDTO")
interface EvidenceTypeCreatedEventDTO {
    val id: EvidenceTypeId

    /**
     * Identifier of the evidence type as specified in the command, or random if not.
     */
    val identifier: EvidenceTypeIdentifier
}

/**
 * @d2 inherit
 */
@Serializable
data class EvidenceTypeCreatedEvent(
    override val id: EvidenceTypeId,
    override val identifier: EvidenceTypeIdentifier
): EvidenceTypeCreatedEventDTO
