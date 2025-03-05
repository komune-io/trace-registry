package io.komune.registry.f2.user.api.service

import io.komune.im.f2.user.domain.model.User
import io.komune.registry.f2.user.api.model.toRef
import io.komune.registry.f2.user.domain.model.UserRef
import io.komune.registry.infra.im.ImService
import io.komune.registry.s2.commons.model.UserId
import org.springframework.stereotype.Service

@Service
class UserF2FinderService(
    private val imService: ImService
) {

    suspend fun get(id: UserId): User {
        return imService.getUser(id)
    }

    suspend fun getRef(id: UserId): UserRef {
        return get(id).toRef()
    }
}
