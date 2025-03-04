package io.komune.registry.f2.license.domain.query

import f2.dsl.fnc.F2Function
import io.komune.registry.f2.license.domain.model.LicenseDTO
import io.komune.registry.f2.license.domain.model.LicenseDTOBase
import io.komune.registry.s2.license.domain.LicenseId
import kotlin.js.JsExport
import kotlinx.serialization.Serializable

/**
 * Get a license by id.
 * @d2 function
 * @parent [io.komune.registry.f2.license.domain.D2LicenseF2Page]
 * @order 10
 */
typealias LicenseGetFunction = F2Function<LicenseGetQuery, LicenseGetResult>

/**
 * @d2 query
 * @parent [LicenseGetFunction]
 */
@JsExport
interface LicenseGetQueryDTO {
    /**
     * Id of the license to get.
     */
    val id: LicenseId
}

/**
 * @d2 inherit
 */
@Serializable
data class LicenseGetQuery(
    override val id: LicenseId
) : LicenseGetQueryDTO

/**
 * @d2 result
 * @parent [LicenseGetFunction]
 */
@JsExport
interface LicenseGetResultDTO {
    /**
     * The license that matches the id, or null if it does not exist.
     */
    val item: LicenseDTO?
}

/**
 * @d2 inherit
 */
data class LicenseGetResult(
    override val item: LicenseDTOBase?
) : LicenseGetResultDTO
