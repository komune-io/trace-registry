package io.komune.registry.s2.cccev.api.entity.concept

import io.komune.registry.infra.redis.RedisRepository
import io.komune.registry.s2.cccev.domain.InformationConceptState
import io.komune.registry.s2.commons.model.InformationConceptId
import org.springframework.stereotype.Repository

@Repository
interface InformationConceptRepository: RedisRepository<InformationConceptEntity, InformationConceptId> {
    fun findByIdentifier(identifier: String): InformationConceptEntity?
    fun findAllByStatus(status: InformationConceptState): List<InformationConceptEntity>
}
