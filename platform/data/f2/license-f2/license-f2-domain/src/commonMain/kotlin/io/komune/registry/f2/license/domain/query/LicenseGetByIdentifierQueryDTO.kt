package io.komune.registry.f2.license.domain.query

import f2.dsl.fnc.F2Function
import io.komune.registry.f2.license.domain.model.LicenseDTO
import io.komune.registry.f2.license.domain.model.LicenseDTOBase
import io.komune.registry.s2.license.domain.LicenseIdentifier
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * Get a license by identifier.
 * @d2 function
 * @parent [io.komune.registry.f2.license.domain.D2LicenseF2Page]
 * @order 11
 */
typealias LicenseGetByIdentifierFunction = F2Function<LicenseGetByIdentifierQuery, LicenseGetByIdentifierResult>

/**
 * @d2 query
 * @parent [LicenseGetByIdentifierFunction]
 */
@JsExport
interface LicenseGetByIdentifierQueryDTO {
    /**
     * Identifier of the license to get.
     */
    val identifier: LicenseIdentifier
}

/**
 * @d2 inherit
 */
@Serializable
data class LicenseGetByIdentifierQuery(
    override val identifier: LicenseIdentifier
) : LicenseGetByIdentifierQueryDTO

/**
 * @d2 result
 * @parent [LicenseGetByIdentifierFunction]
 */
@JsExport
interface LicenseGetByIdentifierResultDTO {
    /**
     * The license that matches the identifier, or null if it does not exist.
     */
    val item: LicenseDTO?
}

/**
 * @d2 inherit
 */
@Serializable
data class LicenseGetByIdentifierResult(
    override val item: LicenseDTOBase?
) : LicenseGetByIdentifierResultDTO
