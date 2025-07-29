package io.komune.registry.control.core.cccev.evidencetype

import f2.spring.exception.NotFoundException
import io.komune.registry.control.core.cccev.evidencetype.entity.EvidenceType
import io.komune.registry.control.core.cccev.evidencetype.entity.EvidenceTypeRepository
import io.komune.registry.s2.commons.model.EvidenceTypeId
import org.springframework.stereotype.Service

@Service
class EvidenceTypeFinderService(
    private val evidenceTypeRepository: EvidenceTypeRepository
) {
    suspend fun getOrNull(id: EvidenceTypeId): EvidenceType? {
        return evidenceTypeRepository.findById(id)
    }

    suspend fun get(id: EvidenceTypeId): EvidenceType {
        return evidenceTypeRepository.findById(id)
            ?: throw NotFoundException("EvidenceType", id)
    }
}
