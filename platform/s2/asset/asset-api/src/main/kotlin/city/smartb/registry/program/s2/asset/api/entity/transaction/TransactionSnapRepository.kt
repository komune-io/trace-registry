package city.smartb.registry.program.s2.asset.api.entity.transaction

import city.smartb.registry.program.s2.asset.domain.automate.TransactionId
import org.springframework.stereotype.Service
import s2.sourcing.dsl.snap.SnapRepository

@Service
class TransactionSnapRepository(
    private val repository: TransactionRepository
): SnapRepository<TransactionEntity, TransactionId> {
    override suspend fun get(id: TransactionId): TransactionEntity? {
        return repository.findById(id).orElse(null)
    }

    override suspend fun remove(id: TransactionId): Boolean {
        repository.deleteById(id)
        return true
    }

    override suspend fun save(entity: TransactionEntity): TransactionEntity {
        return repository.save(entity)
    }

    fun clean() {
        repository.deleteAll()
    }
}
