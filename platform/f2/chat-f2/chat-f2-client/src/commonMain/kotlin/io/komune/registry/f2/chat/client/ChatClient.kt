package io.komune.registry.f2.chat.client

import f2.client.F2Client
import f2.client.domain.AuthRealm
import f2.client.function
import f2.client.ktor.F2ClientBuilder
import f2.client.ktor.http.plugin.F2Auth
import f2.dsl.fnc.F2SupplierSingle
import f2.dsl.fnc.f2SupplierSingle
import io.komune.registry.f2.chat.domain.ChatApi
import io.komune.registry.f2.chat.domain.query.ChatAskQuestionFunction
import kotlin.js.JsExport
import kotlin.js.JsName

fun F2Client.chatClient(): F2SupplierSingle<ChatClient> = f2SupplierSingle {
    ChatClient(this)
}
typealias AuthRealmProvider = suspend () -> AuthRealm
fun chatClient(
    urlBase: String,
    authRealmProvider: AuthRealmProvider,
): F2SupplierSingle<ChatClient> = f2SupplierSingle {
    ChatClient(
        F2ClientBuilder.get(urlBase) {
            install(F2Auth) {
                this.getAuth = authRealmProvider
            }
        }
    )
}

@JsName("ChatClient")
@JsExport
open class ChatClient(private val client: F2Client) : ChatApi {
    override fun chatAskQuestion(): ChatAskQuestionFunction = client.function(::chatAskQuestion.name)
}
