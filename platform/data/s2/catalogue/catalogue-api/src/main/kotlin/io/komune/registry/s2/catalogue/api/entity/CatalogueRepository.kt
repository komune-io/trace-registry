package io.komune.registry.s2.catalogue.api.entity

import io.komune.registry.infra.redis.RedisRepository
import io.komune.registry.s2.commons.model.CatalogueId
import org.springframework.stereotype.Repository

@Repository
interface CatalogueRepository: RedisRepository<CatalogueEntity, CatalogueId> {
    fun findByIdentifier(identifier: String): CatalogueEntity?
}
