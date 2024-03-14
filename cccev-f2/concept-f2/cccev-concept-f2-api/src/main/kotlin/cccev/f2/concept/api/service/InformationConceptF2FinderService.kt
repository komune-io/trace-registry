package cccev.f2.concept.api.service

import cccev.core.concept.InformationConceptFinderService
import cccev.core.concept.entity.InformationConcept
import cccev.core.concept.model.InformationConceptId
import org.springframework.stereotype.Service

@Service
class InformationConceptF2FinderService(
    private val informationConceptFinderService: InformationConceptFinderService,
) {
    suspend fun getOrNull(id: InformationConceptId): InformationConcept? {
        return informationConceptFinderService.getOrNull(id)
    }

    suspend fun get(id: InformationConceptId): InformationConcept {
        return informationConceptFinderService.get(id)
    }

    suspend fun getByIdentifierOrNull(identifier: InformationConceptId): InformationConcept? {
        return informationConceptFinderService.getByIdentifierOrNull(identifier)
    }

    suspend fun getByIdentifier(identifier: InformationConceptId): InformationConcept {
        return informationConceptFinderService.getByIdentifier(identifier)
    }

    // TODO move to request-f2 module?
//    suspend fun getInformationConcepts(
//        requestId: RequestId, requirementId: RequirementId, evidenceTypeId: EvidenceTypeId? = null
//    ): List<RequestInformationConceptDTO> {
//        val requirement = deprecatedRequirementFinderService.list(
//            parent = requirementId,
//            evidenceType = evidenceTypeId
//        )
//
//        try {
//            RequestInitCommand(id = requestId, frameworkId = requirementId)
//                .let { command -> requestAggregateService.init(command) }
//                .let { event -> logger.info("Request [${event.id}] initialized") }
//        } catch (e: DuplicateKeyException) {
//            logger.info("Request exists")
//        }
//
//        val request = requestFinderService.get(requestId)!!
//        return requirement.informationConcepts(request)
//    }
//
//    private fun List<Requirement>.informationConcepts(request: Request): List<RequestInformationConceptDTO> {
//        return flatMap { requirement -> requirement.hasConcept.orEmpty().toDTOs(requirement, request) }
//    }
//
//    private fun List<InformationConceptBase>.toDTOs(parent: Requirement, request: Request): List<RequestInformationConceptDTOBase> {
//        val evidenceTypes = parent.hasEvidenceTypeList?.toDTOs(request.evidences).orEmpty()
//        return map { ic -> ic.toRequestDTO(evidenceTypes, request.supportedValues[ic.identifier]) }
//    }
}
