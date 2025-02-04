package io.komune.registry.s2.concept.api.entity

import io.komune.registry.infra.redis.RedisRepository
import io.komune.registry.s2.concept.domain.ConceptId
import org.springframework.stereotype.Repository

@Repository
interface ConceptRepository: RedisRepository<ConceptEntity, ConceptId> {
    fun findByIdentifier(identifier: String): ConceptEntity?
}
