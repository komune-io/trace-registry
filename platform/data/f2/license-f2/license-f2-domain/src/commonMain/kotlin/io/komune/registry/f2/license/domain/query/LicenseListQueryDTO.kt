package io.komune.registry.f2.license.domain.query

import f2.dsl.fnc.F2Function
import io.komune.registry.f2.license.domain.model.LicenseDTO
import io.komune.registry.f2.license.domain.model.LicenseDTOBase
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * List all licenses.
 * @d2 function
 * @parent [io.komune.registry.f2.license.domain.D2LicenseF2Page]
 * @order 20
 */
typealias LicenseListFunction = F2Function<LicenseListQuery, LicenseListResult>

/**
 * @d2 query
 * @parent [LicenseListFunction]
 */
@JsExport
interface LicenseListQueryDTO

/**
 * @d2 inherit
 */
@Serializable
class LicenseListQuery : LicenseListQueryDTO

/**
 * @d2 result
 * @parent [LicenseListFunction]
 */
@JsExport
interface LicenseListResultDTO {
    /**
     * The list of licenses.
     */
    val items: List<LicenseDTO>
}

/**
 * @d2 inherit
 */
data class LicenseListResult(
    override val items: List<LicenseDTOBase>
) : LicenseListResultDTO
