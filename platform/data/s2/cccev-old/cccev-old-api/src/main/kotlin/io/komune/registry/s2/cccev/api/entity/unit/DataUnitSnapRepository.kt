package io.komune.registry.s2.cccev.api.entity.unit

import io.komune.registry.s2.commons.model.DataUnitId
import org.springframework.stereotype.Service
import s2.sourcing.dsl.snap.SnapRepository

@Service
class DataUnitSnapRepository(
    private val repository: DataUnitOldRepository
): SnapRepository<DataUnitEntity, DataUnitId> {
    override suspend fun get(id: DataUnitId): DataUnitEntity? {
        return repository.findById(id).orElse(null)
    }

    override suspend fun remove(id: DataUnitId): Boolean {
        repository.deleteById(id)
        return true
    }

    override suspend fun save(entity: DataUnitEntity): DataUnitEntity {
        return repository.save(entity)
    }
}
