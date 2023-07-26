package city.smartb.registry.program.f2.chat.api

import city.smartb.registry.program.f2.chat.api.service.VectorpediaClient
import city.smartb.registry.program.f2.chat.domain.ChatApi
import city.smartb.registry.program.f2.chat.domain.query.ChatAskQuestionFunction
import city.smartb.registry.program.f2.chat.domain.query.ChatAskQuestionResult
import f2.dsl.fnc.f2Function
import jakarta.annotation.security.PermitAll
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import s2.spring.utils.logger.Logger

@Configuration
class ChatEndpoint(
    private val vectorpediaClient: VectorpediaClient
): ChatApi {
    private val logger by Logger()

    @PermitAll
    @Bean
    override fun chatAskQuestion(): ChatAskQuestionFunction = f2Function { query ->
        logger.info("chatAskQuestion: $query")
        vectorpediaClient.knowledgeAsk(
            question = query.question,
            metadata = query.metadata,
            history = query.history
        ).let(::ChatAskQuestionResult)
    }
}
