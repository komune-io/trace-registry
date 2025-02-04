package io.komune.registry.s2.concept.api

import io.komune.registry.s2.commons.exception.NotFoundException
import io.komune.registry.s2.concept.api.entity.ConceptRepository
import io.komune.registry.s2.concept.api.entity.toModel
import io.komune.registry.s2.concept.domain.ConceptId
import io.komune.registry.s2.concept.domain.model.ConceptModel
import org.springframework.stereotype.Service

@Service
class ConceptFinderService(
    private val repository: ConceptRepository
) {
    suspend fun getOrNull(id: ConceptId): ConceptModel? {
        return repository.findById(id)
            .orElse(null)
            ?.toModel()
    }

    suspend fun get(id: ConceptId): ConceptModel {
        return getOrNull(id)
            ?: throw NotFoundException("Concept", id)
    }
}
