package city.smartb.registry.f2.chat.client

import f2.client.F2Client
import f2.client.ktor.F2ClientBuilder
import f2.client.ktor.get
import f2.dsl.fnc.F2SupplierSingle

import f2.dsl.fnc.f2SupplierSingle
import kotlinx.coroutines.await

@JsName("chatClient")
@JsExport
actual fun chatClient(urlBase: String, accessToken: String): F2SupplierSingle<ChatClient> = f2SupplierSingle {
    F2ClientBuilder.get(urlBase)
        .await()
        .let(::ChatClient)
}

actual fun F2Client.chatClient(): F2SupplierSingle<ChatClient> = f2SupplierSingle {
    ChatClient(this)
}
