package io.komune.registry.f2.entity.domain

import io.komune.registry.f2.entity.domain.query.EntityRefGetFunction

interface EntityRefApi : EntityRefQueryApi, EntityRefCommandApi

interface EntityRefQueryApi {
    fun entityRefGet(): EntityRefGetFunction
}

interface EntityRefCommandApi
