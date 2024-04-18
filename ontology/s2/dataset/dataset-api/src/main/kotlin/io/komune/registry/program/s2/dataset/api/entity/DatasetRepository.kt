package io.komune.registry.program.s2.dataset.api.entity

import io.komune.registry.infra.redis.RedisRepository
import io.komune.registry.s2.dataset.domain.automate.DatasetId
import java.util.Optional
import org.springframework.stereotype.Repository

@Repository
interface DatasetRepository: RedisRepository<DatasetEntity, DatasetId> {
    fun findByIdentifier(identifier: String): Optional<DatasetEntity>
}
