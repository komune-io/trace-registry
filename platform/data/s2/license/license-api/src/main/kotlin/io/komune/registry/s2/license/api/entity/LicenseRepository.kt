package io.komune.registry.s2.license.api.entity

import io.komune.registry.infra.redis.RedisRepository
import io.komune.registry.s2.license.domain.LicenseId
import org.springframework.stereotype.Repository

@Repository
interface LicenseRepository: RedisRepository<LicenseEntity, LicenseId> {
    fun findByIdentifier(identifier: String): LicenseEntity?
}
