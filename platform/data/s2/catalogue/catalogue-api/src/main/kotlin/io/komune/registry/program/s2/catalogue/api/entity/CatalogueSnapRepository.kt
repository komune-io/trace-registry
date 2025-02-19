package io.komune.registry.program.s2.catalogue.api.entity

import io.komune.registry.s2.commons.model.CatalogueId
import org.springframework.stereotype.Service
import s2.sourcing.dsl.snap.SnapRepository

@Service
class CatalogueSnapRepository(
    private val repository: CatalogueRepository,
    private val searchRepository: CatalogueSnapMeiliSearchRepository
): SnapRepository<CatalogueEntity, CatalogueId> {
    override suspend fun get(id: CatalogueId): CatalogueEntity? {
        return repository.findById(id).orElse(null)
    }

    override suspend fun remove(id: CatalogueId): Boolean {
        repository.deleteById(id).also { searchRepository.remove(id) }
        return true
    }

    override suspend fun save(entity: CatalogueEntity): CatalogueEntity {
        return repository.save(entity).also { searchRepository.save(it) }
    }
}
