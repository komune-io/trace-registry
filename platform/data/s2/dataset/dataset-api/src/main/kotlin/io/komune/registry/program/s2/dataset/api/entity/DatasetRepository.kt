package io.komune.registry.program.s2.dataset.api.entity

import io.komune.registry.infra.redis.RedisRepository
import io.komune.registry.s2.dataset.domain.automate.DatasetId
import org.springframework.stereotype.Repository
import java.util.Optional

@Repository
interface DatasetRepository: RedisRepository<DatasetEntity, DatasetId> {
    fun findByIdentifierAndLanguage(identifier: String, language: String): Optional<DatasetEntity>
}
