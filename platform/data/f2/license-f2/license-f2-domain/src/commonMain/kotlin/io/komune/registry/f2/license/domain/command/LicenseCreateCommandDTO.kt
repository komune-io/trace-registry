package io.komune.registry.f2.license.domain.command

import f2.dsl.fnc.F2Function
import io.komune.registry.s2.license.domain.LicenseId
import io.komune.registry.s2.license.domain.LicenseIdentifier
import io.komune.registry.s2.license.domain.command.LicenseCreateCommand
import kotlin.js.JsExport
import kotlinx.serialization.Serializable

/**
 * Create a license.
 * @d2 function
 * @parent [io.komune.registry.f2.license.domain.D2LicenseF2Page]
 * @order 10
 * @child [io.komune.registry.s2.license.domain.command.LicenseCreateCommandDTO]
 */
typealias LicenseCreateFunction = F2Function<LicenseCreateCommand, LicenseCreatedEventDTOBase>

/**
 * @d2 inherit
 */
@JsExport
interface LicenseCreateCommandDTO : io.komune.registry.s2.license.domain.command.LicenseCreateCommandDTO

/**
 * @d2 event
 * @parent [LicenseCreateFunction]
 */
@JsExport
interface LicenseCreatedEventDTO {
    /**
     * Id of the created license.
     */
    val id: LicenseId

    /**
     * Identifier of the created license.
     */
    val identifier: LicenseIdentifier
}

/**
 * @d2 inherit
 */
@Serializable
data class LicenseCreatedEventDTOBase(
    override val id: LicenseId,
    override val identifier: LicenseIdentifier
) : LicenseCreatedEventDTO
