package io.komune.registry.f2.license.domain.model

import io.komune.registry.s2.license.domain.LicenseId
import io.komune.registry.s2.license.domain.LicenseIdentifier
import kotlin.js.JsExport
import kotlinx.serialization.Serializable

/**
 * @d2 model
 * @parent [io.komune.registry.f2.license.domain.D2LicenseF2Page]
 * @order 10
 */
@JsExport
interface LicenseDTO {
    /**
     * Id of the license.
     */
    val id: LicenseId

    /**
     * Identifier of the license.
     * @example "mit"
     */
    val identifier: LicenseIdentifier

    /**
     * Name of the license.
     * @example "MIT"
     */
    val name: String

    /**
     * URL to a description of the license.
     * @example "https://opensource.org/licenses/MIT"
     */
    val url: String?
}

/**
 * @d2 inherit
 */
@Serializable
data class LicenseDTOBase(
    override val id: LicenseId,
    override val identifier: LicenseIdentifier,
    override val name: String,
    override val url: String?
) : LicenseDTO
