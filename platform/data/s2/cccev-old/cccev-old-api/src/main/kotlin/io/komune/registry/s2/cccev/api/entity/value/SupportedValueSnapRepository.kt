package io.komune.registry.s2.cccev.api.entity.value

import io.komune.registry.s2.commons.model.SupportedValueId
import org.springframework.stereotype.Service
import s2.sourcing.dsl.snap.SnapRepository

@Service
class SupportedValueSnapRepository(
    private val repository: SupportedValueRepository
): SnapRepository<SupportedValueEntity, SupportedValueId> {
    override suspend fun get(id: SupportedValueId): SupportedValueEntity? {
        return repository.findById(id).orElse(null)
    }

    override suspend fun remove(id: SupportedValueId): Boolean {
        repository.deleteById(id)
        return true
    }

    override suspend fun save(entity: SupportedValueEntity): SupportedValueEntity {
        return repository.save(entity)
    }
}
