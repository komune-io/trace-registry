package io.komune.registry.s2.asset.api.entity.transaction

import io.komune.registry.infra.redis.RedisRepository
import io.komune.registry.s2.asset.domain.automate.AssetTransactionId
import org.springframework.stereotype.Repository

@Repository
interface AssetTransactionRepository: RedisRepository<AssetTransactionEntity, AssetTransactionId>
