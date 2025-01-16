package io.komune.registry.program.s2.catalogue.api.entity

import io.komune.registry.infra.redis.RedisRepository
import io.komune.registry.s2.catalogue.domain.automate.CatalogueId
import org.springframework.stereotype.Repository
import java.util.Optional

@Repository
interface CatalogueRepository: RedisRepository<CatalogueEntity, CatalogueId> {
    fun findByIdentifierAndLanguage(identifier: String, language: String): Optional<CatalogueEntity>
    fun findByIdentifier(identifier: String): List<CatalogueEntity>
}
