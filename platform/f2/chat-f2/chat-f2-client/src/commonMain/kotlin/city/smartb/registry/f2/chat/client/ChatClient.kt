package city.smartb.registry.f2.chat.client

import city.smartb.registry.f2.chat.domain.ChatApi
import city.smartb.registry.f2.chat.domain.query.ChatAskQuestionFunction
import f2.client.F2Client
import f2.client.function
import f2.dsl.fnc.F2SupplierSingle
import kotlin.js.JsExport
import kotlin.js.JsName

expect fun F2Client.chatClient(): F2SupplierSingle<ChatClient>
expect fun chatClient(urlBase: String, accessToken: String): F2SupplierSingle<ChatClient>

@JsName("ChatClient")
@JsExport
open class ChatClient constructor(private val client: F2Client) : ChatApi {
    override fun chatAskQuestion(): ChatAskQuestionFunction = client.function(::chatAskQuestion.name)
}
