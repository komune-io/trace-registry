package city.smartb.registry.f2.dcs.api.service

import cccev.core.certification.entity.RequirementCertification
import cccev.core.certification.model.CertificationId
import cccev.dsl.client.CCCEVClient
import cccev.dsl.client.model.toCertificationFlatGraph
import cccev.dsl.client.model.unflatten
import cccev.dsl.model.RequirementIdentifier
import cccev.f2.certification.domain.query.CertificationGetQuery
import cccev.f2.requirement.domain.query.RequirementGetByIdentifierQueryDTOBase
import cccev.s2.concept.domain.InformationConceptIdentifier
import city.smartb.registry.f2.dcs.api.converter.CccevToDcsConverter
import city.smartb.registry.f2.dcs.domain.model.DataCollectionStep
import f2.dsl.fnc.invokeWith
import f2.spring.exception.NotFoundException
import org.springframework.stereotype.Service

@Service
class DcsF2FinderService(
    private val cccevClient: CCCEVClient
) {
    suspend fun getOrNull(identifier: RequirementIdentifier): DataCollectionStep? {
        return RequirementGetByIdentifierQueryDTOBase(identifier = identifier)
            .invokeWith(cccevClient.requirementClient.requirementGetByIdentifier())
            .item
            ?.let { CccevToDcsConverter.convert(it) }
    }

    suspend fun get(identifier: RequirementIdentifier): DataCollectionStep {
        return getOrNull(identifier)
            ?: throw NotFoundException("DataCollectionStep with identifier", identifier)
    }

    suspend fun getValues(identifier: RequirementIdentifier, certificationId: CertificationId): Map<InformationConceptIdentifier, String?> {
        val certificationGraph = CertificationGetQuery(certificationId)
            .invokeWith(cccevClient.certificationClient.certificationGet())
            .toCertificationFlatGraph()
            ?: throw NotFoundException("Certification", certificationId)

        val dcsCertification = certificationGraph.requirementCertifications
            .values
            .firstOrNull { it.requirementIdentifier == identifier }
            ?.unflatten(certificationGraph)
            ?: throw NotFoundException("RequirementCertification of Requirement", identifier)

        return dcsCertification.allValues()
    }

    private fun RequirementCertification.allValues(): Map<InformationConceptIdentifier, String?> {
        val valuesMap = mutableMapOf<InformationConceptIdentifier, String?>()
        values.forEach { valuesMap[it.concept.identifier] = it.value }
        subCertifications.forEach { valuesMap.putAll(it.allValues()) }
        return valuesMap
    }
}
