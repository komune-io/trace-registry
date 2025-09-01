package io.komune.registry.control.core.cccev.certification.command

import f2.dsl.fnc.F2Function
import io.komune.registry.s2.commons.model.CertificationId
import io.komune.registry.s2.commons.model.InformationConceptIdentifier
import io.komune.registry.s2.commons.model.RequirementCertificationId
import kotlinx.serialization.Serializable
import s2.dsl.automate.S2Command
import kotlin.js.JsExport

/**
 * Provide data for the information concepts specified in the requirements a certification has to fulfill.
 * @d2 function
 * @parent [cccev.f2.certification.domain.D2CertificationApiPage]
 * @order 30
 */
typealias CertificationFillValuesFunction = F2Function<CertificationFillValuesCommand, CertificationFilledValuesEvent>

/**
 * @d2 command
 * @parent [CertificationFillValuesFunction]
 */
@JsExport
interface CertificationFillValuesCommandDTO {
    /**
     * Id of the certification for which to fill the values.
     */
    val id: CertificationId

    /**
     * Optional RequirementCertification id in which to fill the values. <br />
     * The given values will only be used to fill the InformationConcepts under it. If null, the whole certification will be filled.
     */
    val rootRequirementCertificationId: RequirementCertificationId?

    /**
     * New values for the certification, mapped by the [identifier][cccev.s2.concept.domain.model.InformationConcept.identifier]
     * of the information concept it provides data for. <br />
     * If a value had already been provided for one of the information concepts, it will be overwritten with the new specified one.
     * @example "TODO"
     */
    val values: Map<InformationConceptIdentifier, String?>
}

/**
 * @d2 inherit
 */
@Serializable
data class CertificationFillValuesCommand(
    override val id: CertificationId,
    override val rootRequirementCertificationId: RequirementCertificationId?,
    override val values: Map<InformationConceptIdentifier, String?>
): CertificationFillValuesCommandDTO, S2Command<CertificationId>

/**
 * @d2 event
 * @parent [CertificationFillValuesFunction]
 */
@JsExport
interface CertificationFilledValuesEventDTO {
    /**
     * Id of the certification to which the values have been added.
     */
    val id: CertificationId

    /**
     * TODO
     */
    val rootRequirementCertificationId: RequirementCertificationId?
}

/**
 * @d2 inherit
 */
@Serializable
data class CertificationFilledValuesEvent(
    override val id: CertificationId,
    override val rootRequirementCertificationId: RequirementCertificationId?
): CertificationFilledValuesEventDTO
