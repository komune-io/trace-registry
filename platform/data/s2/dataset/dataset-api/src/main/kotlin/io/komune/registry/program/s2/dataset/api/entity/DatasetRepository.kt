package io.komune.registry.program.s2.dataset.api.entity

import io.komune.registry.infra.redis.RedisRepository
import io.komune.registry.s2.commons.model.DatasetId
import java.util.Optional
import org.springframework.stereotype.Repository

@Repository
interface DatasetRepository: RedisRepository<DatasetEntity, DatasetId> {
    fun findByIdAndType(id: String, type: String): Optional<DatasetEntity>
    fun findByIdentifierAndLanguage(identifier: String, language: String): Optional<DatasetEntity>
    fun findAllByIdentifier(identifier: String): List<DatasetEntity>
}
