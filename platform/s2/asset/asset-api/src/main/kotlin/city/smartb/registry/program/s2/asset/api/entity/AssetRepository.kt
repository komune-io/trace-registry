package city.smartb.registry.program.s2.asset.api.entity

import city.smartb.registry.program.s2.asset.domain.model.AssetId
import com.redis.om.spring.repository.RedisDocumentRepository
import java.util.Optional
import org.springframework.stereotype.Repository

interface AssetRepository: RedisDocumentRepository<AssetEntity, AssetId> {
    override fun findById(id: AssetId): Optional<AssetEntity>

}
