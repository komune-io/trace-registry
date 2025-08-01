package io.komune.registry.s2.cccev.api.entity.concept

import io.komune.registry.s2.commons.model.InformationConceptId
import org.springframework.stereotype.Service
import s2.sourcing.dsl.snap.SnapRepository

@Service
class InformationConceptSnapRepository(
    private val repository: InformationConceptOldRepository
): SnapRepository<InformationConceptEntity, InformationConceptId> {
    override suspend fun get(id: InformationConceptId): InformationConceptEntity? {
        return repository.findById(id).orElse(null)
    }

    override suspend fun remove(id: InformationConceptId): Boolean {
        repository.deleteById(id)
        return true
    }

    override suspend fun save(entity: InformationConceptEntity): InformationConceptEntity {
        return repository.save(entity)
    }
}
