package io.komune.registry.s2.license.domain.command

import io.komune.registry.s2.license.domain.LicenseId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * Update a license.
 * @d2 command
 */
@JsExport
interface LicenseUpdateCommandDTO : LicenseCommand {
    /**
     * Id of the license to update.
     */
    override val id: LicenseId

    /**
     * Name of the license.
     * @example "MIT v2"
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
data class LicenseUpdateCommand(
    override val id: LicenseId,
    override val name: String,
    override val url: String?
) : LicenseUpdateCommandDTO

@Serializable
data class LicenseUpdatedEvent(
    override val id: LicenseId,
    override val date: Long,
    override val name: String,
    override val url: String?
) : LicenseDataEvent
