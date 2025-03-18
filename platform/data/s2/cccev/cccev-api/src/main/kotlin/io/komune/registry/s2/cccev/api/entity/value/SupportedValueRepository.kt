package io.komune.registry.s2.cccev.api.entity.value

import io.komune.registry.infra.redis.RedisRepository
import io.komune.registry.s2.commons.model.SupportedValueId
import org.springframework.stereotype.Repository

@Repository
interface SupportedValueRepository: RedisRepository<SupportedValueEntity, SupportedValueId>
