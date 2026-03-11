package io.komune.registry.infra.slack

import com.slack.api.Slack
import com.slack.api.methods.request.search.SearchMessagesRequest
import com.slack.api.webhook.Payload
import kotlinx.coroutines.DelicateCoroutinesApi
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import org.springframework.beans.factory.annotation.Value
import org.springframework.stereotype.Service
import s2.spring.utils.logger.Logger

@Service
class SlackService {

    @Value("\${platform.slack.webhook-url}")
    var webhookUrl: String? = null

    @Value("\${platform.slack.token}")
    var token: String? = null

    private val logger by Logger()

    private val slackMethodsClient by lazy {
        token?.let { slackClient.methods(it) }
    }

    companion object {
        private val slackClient = Slack.getInstance()
    }

    // Runs in a separate thread to avoid blocking the caller thread with the potential delay
    @OptIn(DelicateCoroutinesApi::class)
    suspend fun sendMessages(sameThread: Boolean, vararg messages: String) = GlobalScope.launch(Dispatchers.IO) {
        if (messages.isEmpty()) {
            return@launch
        }

        if (webhookUrl.isNullOrEmpty() && token.isNullOrEmpty()) {
            logger.warn("Slack webhook URL or API token is not configured. Messages not sent: [$messages]")
            return@launch
        }

        var thread: String? = null
        messages.forEach { message ->
            sendMessage(message, thread)

            if (sameThread && thread == null) {
                delay(10000) // Wait to ensure the message is sent
                val response = slackMethodsClient?.searchMessages(
                    SearchMessagesRequest.builder()
                        .query(message.replace(Regex("[^\\w\\s-:_]"), ""))
                        .sort("timestamp")
                        .sortDir("desc")
                        .build()
                )
                thread = response?.messages?.matches?.firstOrNull()?.ts
            }
        }
    }

    private fun sendMessage(message: String, thread: String?) {
        try {
            val payload = Payload.builder()
                .text(message)
                .apply {
                    if (thread != null) { threadTs(thread) }
                }
                .build()
            slackClient.send(webhookUrl, payload)
        } catch (e: Exception) {
            logger.error("Unexpected error while sending a Slack message [$message] on thread: [$thread]: [${e.message}]")
        }
    }
}
