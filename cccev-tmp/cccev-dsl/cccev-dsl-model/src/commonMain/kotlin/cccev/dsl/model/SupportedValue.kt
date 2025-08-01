package cccev.dsl.model

import kotlin.js.JsExport
import kotlin.js.JsName
import kotlinx.serialization.Serializable

typealias SupportedValueId = String

@JsExport
@JsName("SupportedValueDTO")
interface SupportedValueDTO {
    val identifier: SupportedValueId
    val value: String?
    val query: String?
    val providesValueFor: InformationConceptId
}

@Serializable
open class SupportedValue(
    override val identifier: SupportedValueId,
    override val value: String? = null,
    override val query: String? = null,
    override val providesValueFor: InformationConceptId
): SupportedValueDTO
