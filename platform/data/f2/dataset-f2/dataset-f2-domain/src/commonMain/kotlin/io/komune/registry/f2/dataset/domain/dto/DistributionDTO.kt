package io.komune.registry.f2.dataset.domain.dto

import io.komune.fs.s2.file.domain.model.FilePath
import io.komune.registry.s2.dataset.domain.model.DistributionId
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
     * FS Path to download the content of the distribution.
     */
    val downloadPath: FilePath

    /**
     * Media type of the content of distribution.
     * @example "image/png"
     */
    val mediaType: String

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
    override val downloadPath: FilePath,
    override val mediaType: String,
    override val issued: Long,
    override val modified: Long
) : DistributionDTO
