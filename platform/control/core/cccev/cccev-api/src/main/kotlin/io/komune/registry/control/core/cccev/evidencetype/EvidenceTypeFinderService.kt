package io.komune.registry.control.core.cccev.evidencetype

import f2.spring.exception.NotFoundException
import io.komune.registry.control.core.cccev.evidencetype.entity.EvidenceType
import io.komune.registry.control.core.cccev.evidencetype.entity.EvidenceTypeRepository
import io.komune.registry.s2.commons.model.EvidenceTypeId
import io.komune.registry.s2.commons.model.EvidenceTypeIdentifier
import org.springframework.stereotype.Service

@Service
class EvidenceTypeFinderService(
    private val evidenceTypeRepository: EvidenceTypeRepository
) {
    suspend fun getOrNull(id: EvidenceTypeId): EvidenceType? {
        return evidenceTypeRepository.findById(id)
    }

    suspend fun get(id: EvidenceTypeId): EvidenceType {
        return getOrNull(id)
            ?: throw NotFoundException("EvidenceType", id)
    }

    suspend fun getByIdentifierOrNull(identifier: EvidenceTypeIdentifier): EvidenceType? {
        return evidenceTypeRepository.findByIdentifier(identifier)
    }

    suspend fun getByIdentifier(identifier: EvidenceTypeIdentifier): EvidenceType {
        return getByIdentifierOrNull(identifier)
            ?: throw NotFoundException("EvidenceType", identifier)
    }
}
