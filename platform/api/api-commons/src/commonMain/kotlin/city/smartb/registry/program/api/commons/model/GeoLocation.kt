package city.smartb.registry.program.api.commons.model

import kotlinx.serialization.Serializable
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * @d2 model
 */
@JsExport
@JsName("GeoLocationDTO")
interface GeoLocationDTO {
    /**
     * @example 43.60300922223246
     */
    val lat: Double

    /**
     * @example 3.8793551865079356
     */
    val lon: Double
}

@Serializable
data class GeoLocation(
    override val lat: Double,
    override val lon: Double
): GeoLocationDTO
