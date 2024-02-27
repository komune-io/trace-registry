package cccev.core.certification.command

import cccev.core.certification.model.CertificationId
import cccev.core.certification.model.RequirementCertificationId
import cccev.s2.concept.domain.InformationConceptIdentifier
import kotlinx.serialization.Serializable
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * @d2 command
 */
@JsExport
@JsName("CertificationFillValuesCommandDTO")
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
): CertificationFillValuesCommandDTO

/**
 * @d2 event
 */
@JsExport
@JsName("CertificationAddedValuesEventDTO")
interface CertificationAddedValuesEventDTO {
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
data class CertificationAddedValuesEvent(
    override val id: CertificationId,
    override val rootRequirementCertificationId: RequirementCertificationId?
): CertificationAddedValuesEventDTO
