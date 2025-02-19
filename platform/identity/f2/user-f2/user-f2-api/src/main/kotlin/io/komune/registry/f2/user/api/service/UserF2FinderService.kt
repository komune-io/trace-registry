package io.komune.registry.f2.user.api.service

import f2.dsl.fnc.invokeWith
import f2.spring.exception.NotFoundException
import io.komune.im.f2.user.domain.model.User
import io.komune.im.f2.user.domain.query.UserGetQuery
import io.komune.registry.f2.user.api.model.toRef
import io.komune.registry.f2.user.domain.model.UserRef
import io.komune.registry.infra.im.ImClient
import io.komune.registry.s2.commons.model.UserId
import org.springframework.stereotype.Service

@Service
class UserF2FinderService(
    private val imClient: ImClient
) {
    suspend fun get(id: UserId): User {
        return UserGetQuery(id)
            .invokeWith(imClient.user.userGet())
            .item
            ?: throw NotFoundException("User", id)
    }

    suspend fun getRef(id: UserId): UserRef {
        return get(id).toRef()
    }
}
