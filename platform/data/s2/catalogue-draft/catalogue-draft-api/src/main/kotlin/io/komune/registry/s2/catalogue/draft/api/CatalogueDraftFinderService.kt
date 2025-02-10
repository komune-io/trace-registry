package io.komune.registry.s2.catalogue.draft.api

import f2.spring.exception.NotFoundException
import io.komune.registry.s2.catalogue.draft.api.entity.CatalogueDraftRepository
import io.komune.registry.s2.catalogue.draft.api.entity.toModel
import io.komune.registry.s2.catalogue.draft.domain.CatalogueDraftId
import io.komune.registry.s2.catalogue.draft.domain.model.CatalogueDraftModel
import org.springframework.stereotype.Service

@Service
class CatalogueDraftFinderService(
    private val catalogueDraftRepository: CatalogueDraftRepository
) {
    suspend fun getOrNull(id: CatalogueDraftId): CatalogueDraftModel? {
        return catalogueDraftRepository.findById(id)
            .orElse(null)
            ?.toModel()
    }

    suspend fun get(id: CatalogueDraftId): CatalogueDraftModel {
        return getOrNull(id)
            ?: throw NotFoundException("CatalogueDraft", id)
    }
}
