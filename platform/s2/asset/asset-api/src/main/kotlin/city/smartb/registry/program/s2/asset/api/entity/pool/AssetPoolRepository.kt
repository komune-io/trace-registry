package city.smartb.registry.program.s2.asset.api.entity.pool

import city.smartb.registry.program.infra.redis.RedisRepository
import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolId
import org.springframework.stereotype.Repository

@Repository
interface AssetPoolRepository: RedisRepository<AssetPoolEntity, AssetPoolId>
