package io.komune.registry.s2.cccev.api.entity.unit

import io.komune.registry.infra.redis.RedisRepository
import io.komune.registry.s2.commons.model.DataUnitId
import org.springframework.stereotype.Repository

@Repository
interface DataUnitRepository: RedisRepository<DataUnitEntity, DataUnitId> {
    fun findByIdentifier(identifier: String): DataUnitEntity?
}
