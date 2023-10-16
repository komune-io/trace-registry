package city.smartb.registry.program.s2.dataset.api.entity

import city.smartb.registry.infra.redis.RedisRepository
import city.smartb.registry.s2.dataset.domain.automate.DatasetId
import java.util.Optional
import org.springframework.stereotype.Repository

@Repository
interface DatasetRepository: RedisRepository<DatasetEntity, DatasetId> {
    fun findByIdentifier(identifier: String): Optional<DatasetEntity>
}
