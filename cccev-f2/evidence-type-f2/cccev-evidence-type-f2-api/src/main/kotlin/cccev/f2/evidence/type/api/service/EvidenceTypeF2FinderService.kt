package cccev.f2.evidence.type.api.service

import cccev.core.evidencetype.EvidenceTypeFinderService
import cccev.core.evidencetype.entity.EvidenceType
import cccev.core.evidencetype.model.EvidenceTypeId
import org.springframework.stereotype.Service

@Service
class EvidenceTypeF2FinderService(
    private val evidenceTypeFinderService: EvidenceTypeFinderService
) {
    suspend fun getOrNull(id: EvidenceTypeId): EvidenceType? {
        return evidenceTypeFinderService.getOrNull(id)
    }

    suspend fun get(id: EvidenceTypeId): EvidenceType {
        return evidenceTypeFinderService.get(id)
    }
}
