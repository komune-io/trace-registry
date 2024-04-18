package io.komune.registry.s2.asset.api.entity.pool

import io.komune.registry.infra.redis.RedisRepository
import io.komune.registry.s2.asset.domain.automate.AssetPoolId
import org.springframework.stereotype.Repository

@Repository
interface AssetPoolRepository: RedisRepository<AssetPoolEntity, AssetPoolId>
