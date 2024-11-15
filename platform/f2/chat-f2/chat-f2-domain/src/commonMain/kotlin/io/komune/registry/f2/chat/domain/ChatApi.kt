package io.komune.registry.f2.chat.domain

import io.komune.registry.f2.chat.domain.query.ChatAskQuestionFunction

/**
 * @d2 api
 * @order 1
 * @parent [io.komune.registry.f2.chat.domain.D2ChatF2Page]
 */
interface ChatApi {
    fun chatAskQuestion(): ChatAskQuestionFunction
}
