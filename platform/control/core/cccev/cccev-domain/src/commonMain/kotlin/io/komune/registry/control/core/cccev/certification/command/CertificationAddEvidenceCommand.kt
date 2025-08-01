package io.komune.registry.control.core.cccev.certification.command

import f2.dsl.fnc.F2Function
import io.komune.fs.s2.file.domain.model.FilePath
import io.komune.fs.s2.file.domain.model.FilePathDTO
import io.komune.registry.s2.commons.model.CertificationId
import io.komune.registry.s2.commons.model.EvidenceId
import io.komune.registry.s2.commons.model.EvidenceTypeId
import io.komune.registry.s2.commons.model.RequirementCertificationId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * Provide data for the information concepts specified in the requirements a certification has to fulfill.
 * @d2 function
 * @parent [io.komune.registry.control.core.cccev.certification.D2CertificationPage]
 * @order 40
 */
typealias CertificationAddEvidenceFunction = F2Function<CertificationAddEvidenceCommand, CertificationAddedEvidenceEvent>

/**
 * @d2 command
 * @parent [CertificationAddEvidenceFunction]
 */
@JsExport
interface CertificationAddEvidenceCommandDTO {
    /**
     * Id of the certification for which to add the evidence.
     */
    val id: CertificationId

    /**
     * Optional RequirementCertification id in which to add the evidence. <br />
     * The given evidence will only be used to fill the EvidenceTypes under it. If null, the whole certification will be filled.
     */
    val rootRequirementCertificationId: RequirementCertificationId?

    /**
     * The evidence type to which the evidence conforms.
     */
    val evidenceTypeId: EvidenceTypeId

    /**
     * The path at which to upload the evidence. If null, it will be uploaded to a default path.
     */
    val filePath: FilePathDTO?

    /**
     * Whether to store the evidence file in a vector store.
     */
    val vectorize: Boolean
}

/**
 * @d2 inherit
 */
@Serializable
data class CertificationAddEvidenceCommand(
    override val id: CertificationId,
    override val rootRequirementCertificationId: RequirementCertificationId?,
    override val evidenceTypeId: EvidenceTypeId,
    override val filePath: FilePath?,
    override val vectorize: Boolean = false
): CertificationAddEvidenceCommandDTO

/**
 * @d2 event
 * @parent [CertificationAddEvidenceFunction]
 */
@JsExport
interface CertificationAddedEvidenceEventDTO {
    /**
     * Id of the certification to which the values have been added.
     */
    val id: CertificationId

    /**
     * TODO
     */
    val rootRequirementCertificationId: RequirementCertificationId?

    /**
     * Id of the evidence that has been added.
     */
    val evidenceId: EvidenceId

    /**
     * The path at which the evidence has been uploaded.
     */
    val filePath: FilePathDTO
}

/**
 * @d2 inherit
 */
@Serializable
data class CertificationAddedEvidenceEvent(
    override val id: CertificationId,
    override val rootRequirementCertificationId: RequirementCertificationId?,
    override val evidenceId: EvidenceId,
    override val filePath: FilePath
): CertificationAddedEvidenceEventDTO
