package cccev.f2.concept.api.service

import cccev.f2.concept.api.model.toDTO
import cccev.f2.concept.domain.model.InformationConceptDTOBase
import cccev.f2.unit.api.service.DataUnitF2FinderService
import cccev.s2.certification.api.CertificationAggregateService
import cccev.s2.certification.api.CertificationFinderService
import cccev.s2.concept.api.InformationConceptFinderService
import cccev.s2.concept.domain.InformationConceptId
import org.springframework.stereotype.Service

@Service
class InformationConceptF2FinderService(
    private val dataUnitF2FinderService: DataUnitF2FinderService,
    private val informationConceptFinderService: InformationConceptFinderService,
    private val certificationAggregateService: CertificationAggregateService,
    private val certificationFinderService: CertificationFinderService,
) {
    suspend fun getOrNull(id: InformationConceptId): InformationConceptDTOBase? {
        return informationConceptFinderService.getOrNull(id)?.toDTO()
    }

    suspend fun get(id: InformationConceptId): InformationConceptDTOBase {
        return informationConceptFinderService.get(id).toDTO()
    }

    suspend fun getByIdentifierOrNull(identifier: InformationConceptId): InformationConceptDTOBase? {
        return informationConceptFinderService.getByIdentifierOrNull(identifier)?.toDTO()
    }

    suspend fun getByIdentifier(identifier: InformationConceptId): InformationConceptDTOBase {
        return informationConceptFinderService.getByIdentifier(identifier).toDTO()
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
