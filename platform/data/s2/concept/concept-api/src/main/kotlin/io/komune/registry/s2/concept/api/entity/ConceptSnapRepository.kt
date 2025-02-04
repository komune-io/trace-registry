package io.komune.registry.s2.concept.api.entity

import io.komune.registry.s2.concept.domain.ConceptId
import org.springframework.stereotype.Service
import s2.sourcing.dsl.snap.SnapRepository

@Service
class ConceptSnapRepository(
    private val repository: ConceptRepository
): SnapRepository<ConceptEntity, ConceptId> {
    override suspend fun get(id: ConceptId): ConceptEntity? {
        return repository.findById(id).orElse(null)
    }

    override suspend fun remove(id: ConceptId): Boolean {
        repository.deleteById(id)
        return true
    }

    override suspend fun save(entity: ConceptEntity): ConceptEntity {
        return repository.save(entity)
    }
}
