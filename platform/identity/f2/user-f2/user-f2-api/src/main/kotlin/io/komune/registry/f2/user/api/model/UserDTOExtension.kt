package io.komune.registry.f2.user.api.model

import io.komune.im.f2.user.domain.model.User
import io.komune.registry.f2.user.domain.model.UserRef

fun User.toRef() = UserRef(
    id = id,
    email = email,
    givenName = givenName,
    familyName = familyName,
    memberOf = memberOf!!.id
)
