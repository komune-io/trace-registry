package city.smartb.registry.program.f2.activity.domain.model

import kotlin.js.JsExport

@JsExport
interface ActivityFileDTO {
    val name: String
    val content: ByteArray
    val metadata: Map<String, String>?
}

data class ActivityFile(
    override val name: String,
    override val content: ByteArray,
    override val metadata: Map<String, String>? = null
): ActivityFileDTO
