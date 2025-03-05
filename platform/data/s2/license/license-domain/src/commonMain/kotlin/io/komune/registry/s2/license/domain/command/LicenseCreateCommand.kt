package io.komune.registry.s2.license.domain.command

import io.komune.registry.s2.license.domain.LicenseId
import io.komune.registry.s2.license.domain.LicenseIdentifier
import kotlin.js.JsExport
import kotlinx.serialization.Serializable

/**
 * Create a license.
 * @d2 command
 */
@JsExport
interface LicenseCreateCommandDTO {
    /**
     * Custom identifier of the new license.
     * @example "mit"
     */
    val identifier: LicenseIdentifier?

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
data class LicenseCreateCommand(
    override val identifier: LicenseIdentifier?,
    override val name: String,
    override val url: String?
) : LicenseInitCommand, LicenseCreateCommandDTO

sealed interface LicenseDataEvent : LicenseEvent {
    override val id: LicenseId
    override val date: Long
    val name: String
    val url: String?
}

@Serializable
data class LicenseCreatedEvent(
    override val id: LicenseId,
    override val date: Long,
    val identifier: LicenseIdentifier,
    override val name: String,
    override val url: String?
) : LicenseDataEvent
