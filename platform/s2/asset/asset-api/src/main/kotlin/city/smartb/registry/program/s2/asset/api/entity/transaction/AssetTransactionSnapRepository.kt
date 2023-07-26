package city.smartb.registry.program.s2.asset.api.entity.transaction

import city.smartb.registry.program.s2.asset.domain.automate.AssetTransactionId
import org.springframework.stereotype.Service
import s2.sourcing.dsl.snap.SnapRepository

@Service
class AssetTransactionSnapRepository(
    private val repository: AssetTransactionRepository
): SnapRepository<AssetTransactionEntity, AssetTransactionId> {
    override suspend fun get(id: AssetTransactionId): AssetTransactionEntity? {
        return repository.findById(id).orElse(null)
    }

    override suspend fun remove(id: AssetTransactionId): Boolean {
        repository.deleteById(id)
        return true
    }

    override suspend fun save(entity: AssetTransactionEntity): AssetTransactionEntity {
        return repository.save(entity)
    }

    fun clean() {
        repository.deleteAll()
    }
}
