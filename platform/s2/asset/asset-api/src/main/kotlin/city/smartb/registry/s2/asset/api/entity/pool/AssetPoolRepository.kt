package city.smartb.registry.s2.asset.api.entity.pool

import city.smartb.registry.infra.redis.RedisRepository
import city.smartb.registry.s2.asset.domain.automate.AssetPoolId
import org.springframework.stereotype.Repository

@Repository
interface AssetPoolRepository: RedisRepository<AssetPoolEntity, AssetPoolId>
