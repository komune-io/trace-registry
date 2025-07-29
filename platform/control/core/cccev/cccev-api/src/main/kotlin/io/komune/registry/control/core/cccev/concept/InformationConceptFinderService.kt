package io.komune.registry.control.core.cccev.concept

import f2.spring.exception.NotFoundException
import io.komune.registry.control.core.cccev.concept.entity.InformationConcept
import io.komune.registry.control.core.cccev.concept.entity.InformationConceptRepository
import io.komune.registry.s2.commons.model.InformationConceptId
import org.springframework.stereotype.Service

@Service
class InformationConceptFinderService(
    private val informationConceptRepository: InformationConceptRepository,
) {
    suspend fun getOrNull(id: InformationConceptId): InformationConcept? {
        return informationConceptRepository.findById(id)
    }

    suspend fun get(id: InformationConceptId): InformationConcept {
        return getOrNull(id)
            ?: throw NotFoundException("InformationConcept", id)
    }

    suspend fun getByIdentifierOrNull(identifier: InformationConceptId): InformationConcept? {
        return informationConceptRepository.findByIdentifier(identifier)
    }

    suspend fun getByIdentifier(identifier: InformationConceptId): InformationConcept {
        return getByIdentifierOrNull(identifier)
            ?: throw NotFoundException("InformationConcept with identifier", identifier)
    }
}
