package io.komune.registry.f2.dataset.domain.dto

import io.komune.fs.s2.file.domain.model.FilePath
import io.komune.registry.f2.cccev.domain.concept.model.InformationConceptComputedDTO
import io.komune.registry.f2.cccev.domain.concept.model.InformationConceptComputedDTOBase
import io.komune.registry.s2.commons.model.DistributionId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * @d2 model
 * @order 20
 */
@JsExport
interface DistributionDTO {
    /**
     * Id of the distribution.
     */
    val id: DistributionId

    /**
     * Name of the distribution, if any.
     */
    val name: String?

    /**
     * FS Path to download the content of the distribution.
     */
    val downloadPath: FilePath?

    /**
     * Media type of the content of distribution.
     * @example "image/png"
     */
    val mediaType: String?

    val aggregators: List<InformationConceptComputedDTO>

    /**
     * Date of issuance of the distribution.
     * @example 1617235200000
     */
    val issued: Long

    /**
     * Date of last modification of the distribution.
     * @example 162935230000
     */
    val modified: Long
}

/**
 * @d2 inherit
 */
@Serializable
data class DistributionDTOBase(
    override val id: DistributionId,
    override val name: String?,
    override val downloadPath: FilePath?,
    override val mediaType: String?,
    override val aggregators: List<InformationConceptComputedDTOBase>,
    override val issued: Long,
    override val modified: Long
) : DistributionDTO
