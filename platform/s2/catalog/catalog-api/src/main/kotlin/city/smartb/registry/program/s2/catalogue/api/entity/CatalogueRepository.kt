package city.smartb.registry.program.s2.catalogue.api.entity

import city.smartb.registry.infra.redis.RedisRepository
import city.smartb.registry.s2.catalogue.domain.automate.CatalogueId
import java.util.Optional
import org.springframework.stereotype.Repository

@Repository
interface CatalogueRepository: RedisRepository<CatalogueEntity, CatalogueId> {
    fun findByIdentifier(identifier: String): Optional<CatalogueEntity>
}
