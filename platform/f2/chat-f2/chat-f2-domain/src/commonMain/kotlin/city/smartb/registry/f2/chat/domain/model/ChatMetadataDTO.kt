package city.smartb.registry.f2.chat.domain.model

import kotlin.js.JsExport
import kotlin.js.JsName
import kotlinx.serialization.Serializable

@JsExport
@JsName("ChatMetadataDTO")
interface ChatMetadataDTO {
    val targetedFiles: List<String>
}

@Serializable
data class ChatMetadata(
    override val targetedFiles: List<String>
): ChatMetadataDTO
