package city.smartb.registry.program.s2.asset.api.entity

import city.smartb.registry.program.s2.asset.domain.model.AssetId
import com.redis.om.spring.repository.RedisDocumentRepository
import java.util.Optional
import org.springframework.data.repository.CrudRepository
import org.springframework.data.repository.PagingAndSortingRepository
import org.springframework.stereotype.Repository

@Repository
interface AssetRepository:
    CrudRepository<AssetEntity, AssetId>,
    PagingAndSortingRepository<AssetEntity, AssetId>,
    RedisDocumentRepository<AssetEntity, AssetId> {
    override fun findById(id: AssetId): Optional<AssetEntity>

}
