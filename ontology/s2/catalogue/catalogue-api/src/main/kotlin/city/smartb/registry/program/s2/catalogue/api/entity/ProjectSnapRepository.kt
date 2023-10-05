package city.smartb.registry.program.s2.catalogue.api.entity

import city.smartb.registry.s2.catalogue.domain.automate.CatalogueId
import org.springframework.stereotype.Service
import s2.sourcing.dsl.snap.SnapRepository

@Service
class CatalogueSnapRepository(
    private val repository: CatalogueRepository
): SnapRepository<CatalogueEntity, CatalogueId> {
    override suspend fun get(id: CatalogueId): CatalogueEntity? {
        return repository.findById(id).orElse(null)
    }

    override suspend fun remove(id: CatalogueId): Boolean {
        repository.deleteById(id)
        return true
    }

    override suspend fun save(entity: CatalogueEntity): CatalogueEntity {
        return repository.save(entity)
    }
}
