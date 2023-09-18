package city.smartb.registry.s2.asset.api.entity.transaction

import city.smartb.registry.infra.redis.RedisRepository
import city.smartb.registry.s2.asset.domain.automate.AssetTransactionId
import org.springframework.stereotype.Repository

@Repository
interface AssetTransactionRepository: RedisRepository<AssetTransactionEntity, AssetTransactionId>
