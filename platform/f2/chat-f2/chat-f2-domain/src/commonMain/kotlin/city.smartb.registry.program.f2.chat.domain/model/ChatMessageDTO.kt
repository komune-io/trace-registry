package city.smartb.registry.program.f2.chat.domain.model

import kotlin.js.JsExport
import kotlin.js.JsName
import kotlinx.serialization.Serializable

@JsExport
@JsName("ChatMessageDTO")
interface ChatMessageDTO {
    val content: String
    val type: String
}

@Serializable
data class ChatMessage(
    override val content: String,
    override val type: String
): ChatMessageDTO
