package city.smartb.registry.f2.chat.domain

import city.smartb.registry.f2.chat.domain.query.ChatAskQuestionFunction

/**
 * @d2 api
 * @order 1
 */
interface ChatApi {
    fun chatAskQuestion(): ChatAskQuestionFunction
}
