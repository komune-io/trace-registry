package city.smartb.registry.program.f2.chat.api.service

import city.smartb.fs.s2.file.client.Client
import city.smartb.registry.program.api.commons.utils.toJson
import city.smartb.registry.program.f2.chat.domain.model.ChatMessage
import io.ktor.client.plugins.HttpTimeout
import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

class VectorpediaClient(baseUrl: String): Client(baseUrl, {
    install(HttpTimeout) {
        requestTimeoutMillis = 60000
    }
}) {
    suspend fun knowledgeAsk(question: String, metadata: Map<String, String>, history: List<ChatMessage>): String {
        // TODO metadata
        return post("ask", mapOf(
            "question" to question,
            "messages" to history.map { message -> mapOf(
                "content" to message.content,
                "type" to message.type,
                "additional_kwargs" to emptyMap<String, String>()
            ) }
        ).toJson())
    }
}

@Configuration
class VectorpediaConfiguration {
    @Value("\${vectorpedia.url}")
    lateinit var vectorpediaUrl: String

    @Bean
    fun vectorpediaClient() = VectorpediaClient(vectorpediaUrl)
}
