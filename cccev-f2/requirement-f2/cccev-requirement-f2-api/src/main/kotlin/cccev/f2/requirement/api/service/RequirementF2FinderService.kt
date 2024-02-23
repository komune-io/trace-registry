package cccev.f2.requirement.api.service

import cccev.commons.model.SimpleCache
import cccev.dsl.model.EvidenceTypeId
import cccev.f2.concept.api.service.InformationConceptF2FinderService
import cccev.f2.evidence.type.api.service.EvidenceTypeF2FinderService
import cccev.f2.requirement.api.model.toDTO
import cccev.f2.requirement.domain.model.RequirementDTOBase
import cccev.s2.concept.domain.InformationConceptId
import cccev.s2.requirement.api.RequirementFinderService
import cccev.s2.requirement.domain.RequirementId
import cccev.s2.requirement.domain.model.Requirement
import cccev.s2.requirement.domain.model.RequirementIdentifier
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.map
import org.springframework.stereotype.Service

@Service
class RequirementF2FinderService(
    private val evidenceTypeF2FinderService: EvidenceTypeF2FinderService,
    private val informationConceptF2FinderService: InformationConceptF2FinderService,
    private val requirementFinderService: RequirementFinderService
) {
    suspend fun getOrNull(id: RequirementId): RequirementDTOBase? {
        return requirementFinderService.getOrNull(id)?.toDTO()
    }

    suspend fun get(id: RequirementId): RequirementDTOBase {
        return requirementFinderService.get(id).toDTO()
    }
    suspend fun getOrNullByIdentifier(identifier: RequirementIdentifier): RequirementDTOBase? {
        return requirementFinderService.getOrNullByIdentifier(identifier)?.toDTO()
    }

    suspend fun listByIdsAndType(ids: List<RequirementId>, type: String): List<RequirementDTOBase> {
        return requirementFinderService.listByIdWithChildrenOfType(ids, type).map { it.toDTO() }
    }

    suspend fun list(
        isRequirementOf: RequirementId?,
        concept: InformationConceptId?,
        evidenceType: EvidenceTypeId?
    ): Flow<RequirementDTOBase> {
        return requirementFinderService.list(isRequirementOf, concept, evidenceType).toDTOs()
    }

    private suspend fun Flow<Requirement>.toDTOs(cache: Cache = Cache()) = map { it.toDTO(cache) }
    private suspend fun Requirement.toDTO(cache: Cache = Cache()): RequirementDTOBase = toDTO(
        getEvidenceTypeList = cache.evidenceTypeLists::get,
    )

    private inner class Cache {
        val evidenceTypeLists = SimpleCache(evidenceTypeF2FinderService::getList)
    }
}
