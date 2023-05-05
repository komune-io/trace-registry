package city.smartb.registry.program.s2.asset.api.entity.transaction

import city.smartb.registry.program.infra.redis.RedisRepository
import city.smartb.registry.program.s2.asset.domain.automate.TransactionId
import org.springframework.stereotype.Repository

@Repository
interface TransactionRepository: RedisRepository<TransactionEntity, TransactionId>
