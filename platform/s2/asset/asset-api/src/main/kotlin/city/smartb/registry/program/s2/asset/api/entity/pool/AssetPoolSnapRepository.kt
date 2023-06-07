package city.smartb.registry.program.s2.asset.api.entity.pool

import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolId
import org.springframework.stereotype.Service
import s2.sourcing.dsl.snap.SnapRepository

@Service
class AssetPoolSnapRepository(
    private val repository: AssetPoolRepository
): SnapRepository<AssetPoolEntity, AssetPoolId> {
    override suspend fun get(id: AssetPoolId): AssetPoolEntity? {
        return repository.findById(id).orElse(null)
    }

    override suspend fun remove(id: AssetPoolId): Boolean {
        repository.deleteById(id)
        return true
    }

    override suspend fun save(entity: AssetPoolEntity): AssetPoolEntity {
        return repository.save(entity)
    }

    fun clean() {
        repository.deleteAll()
    }
}
