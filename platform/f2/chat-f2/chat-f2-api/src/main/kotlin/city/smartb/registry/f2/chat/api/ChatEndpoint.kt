package city.smartb.registry.f2.chat.api

import city.smartb.fs.s2.file.client.FileClient
import city.smartb.fs.s2.file.domain.features.query.FileAskQuestionQuery
import city.smartb.fs.s2.file.domain.model.FileAskMessage
import city.smartb.fs.s2.file.domain.model.FileAskMetadata
import city.smartb.registry.f2.chat.domain.ChatApi
import city.smartb.registry.f2.chat.domain.query.ChatAskQuestionFunction
import city.smartb.registry.f2.chat.domain.query.ChatAskQuestionResult
import f2.dsl.fnc.f2Function
import jakarta.annotation.security.PermitAll
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import s2.spring.utils.logger.Logger

@Configuration
class ChatEndpoint(
    private val fileClient: FileClient
): ChatApi {
    private val logger by Logger()

    @PermitAll
    @Bean
    override fun chatAskQuestion(): ChatAskQuestionFunction = f2Function { query ->
        logger.info("chatAskQuestion: $query")
        fileClient.fileAskQuestion(
            listOf(FileAskQuestionQuery(
                question = query.question,
                metadata = FileAskMetadata(
                    targetedFiles =query.metadata.targetedFiles,
                ),
                history = query.history.map { message ->
                    FileAskMessage(
                        content = message.content,
                        type = message.type
                    ) }
            ))
        ).first().let {
            ChatAskQuestionResult(
               item = it.item,
            )
        }
    }
}
