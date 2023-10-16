package city.smartb.registry.program.s2.dataset.api.entity

import city.smartb.registry.s2.dataset.domain.automate.DatasetId
import org.springframework.stereotype.Service
import s2.sourcing.dsl.snap.SnapRepository

@Service
class DatasetSnapRepository(
    private val repository: DatasetRepository
): SnapRepository<DatasetEntity, DatasetId> {
    override suspend fun get(id: DatasetId): DatasetEntity? {
        return repository.findById(id).orElse(null)
    }

    override suspend fun remove(id: DatasetId): Boolean {
        repository.deleteById(id)
        return true
    }

    override suspend fun save(entity: DatasetEntity): DatasetEntity {
        return repository.save(entity)
    }
}
