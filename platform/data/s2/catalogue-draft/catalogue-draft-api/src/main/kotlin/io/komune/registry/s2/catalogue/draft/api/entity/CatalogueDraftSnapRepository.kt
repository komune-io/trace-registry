package io.komune.registry.s2.catalogue.draft.api.entity

import io.komune.registry.s2.commons.model.CatalogueDraftId
import org.springframework.stereotype.Service
import s2.sourcing.dsl.snap.SnapRepository

@Service
class CatalogueDraftSnapRepository(
    private val repository: CatalogueDraftRepository,
    private val searchRepository: CatalogueDraftSnapMeiliSearchRepository
): SnapRepository<CatalogueDraftEntity, CatalogueDraftId> {
    override suspend fun get(id: CatalogueDraftId): CatalogueDraftEntity? {
        return repository.findById(id).orElse(null)
    }

    override suspend fun remove(id: CatalogueDraftId): Boolean {
        repository.deleteById(id).also { searchRepository.remove(id) }
        return true
    }

    override suspend fun save(entity: CatalogueDraftEntity): CatalogueDraftEntity {
        return repository.save(entity).also { searchRepository.save(it) }
    }
}
