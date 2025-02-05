package io.komune.registry.f2.license.domain.command

import f2.dsl.fnc.F2Function
import io.komune.registry.s2.license.domain.LicenseId
import io.komune.registry.s2.license.domain.command.LicenseUpdateCommand
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * Update a license.
 * @d2 function
 * @parent [io.komune.registry.f2.license.domain.D2LicenseF2Page]
 * @order 20
 * @child [io.komune.registry.s2.license.domain.command.LicenseUpdateCommandDTO]
 */
typealias LicenseUpdateFunction = F2Function<LicenseUpdateCommand, LicenseUpdatedEventDTOBase>

/**
 * @d2 inherit
 */
@JsExport
interface LicenseUpdateCommandDTO : io.komune.registry.s2.license.domain.command.LicenseUpdateCommandDTO

/**
 * @d2 event
 * @parent [LicenseUpdateFunction]
 */
@JsExport
interface LicenseUpdatedEventDTO {
    /**
     * Id of the updated license.
     */
    val id: LicenseId
}

/**
 * @d2 inherit
 */
@Serializable
data class LicenseUpdatedEventDTOBase(
    override val id: LicenseId
) : LicenseUpdatedEventDTO
