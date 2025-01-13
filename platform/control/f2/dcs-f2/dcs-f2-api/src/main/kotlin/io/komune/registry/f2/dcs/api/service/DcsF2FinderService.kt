package io.komune.registry.f2.dcs.api.service

import cccev.dsl.client.CCCEVClient
import cccev.dsl.client.model.unflatten
import cccev.dsl.model.CertificationId
import cccev.dsl.model.InformationConceptIdentifier
import cccev.dsl.model.RequirementCertification
import cccev.dsl.model.RequirementIdentifier
import cccev.f2.certification.query.CertificationGetQuery
import cccev.f2.requirement.query.RequirementGetByIdentifierQuery
import f2.dsl.fnc.invokeWith
import f2.spring.exception.NotFoundException
import io.komune.registry.f2.dcs.api.converter.CccevToDcsConverter
import io.komune.registry.f2.dcs.domain.model.DataCollectionStep
import org.springframework.stereotype.Service

@Service
class DcsF2FinderService(
    private val cccevClient: CCCEVClient
) {
    suspend fun getOrNull(identifier: RequirementIdentifier): DataCollectionStep? {
        return RequirementGetByIdentifierQuery(identifier = identifier)
            .invokeWith(cccevClient.requirementClient.requirementGetByIdentifier())
            .unflatten()
            .let { CccevToDcsConverter.convert(it) }
    }

    suspend fun get(identifier: RequirementIdentifier): DataCollectionStep {
        return getOrNull(identifier)
            ?: throw NotFoundException("DataCollectionStep with identifier", identifier)
    }

    suspend fun getValues(
        identifier: RequirementIdentifier, certificationId: CertificationId
    ): Map<InformationConceptIdentifier, String?> {
        val certification = CertificationGetQuery(certificationId)
            .invokeWith(cccevClient.certificationClient.certificationGet())
            .unflatten()
            ?: throw NotFoundException("Certification", certificationId)

        val dcsCertification = certification.requirementCertifications
            .firstOrNull { it.requirement.identifier == identifier }
            ?: throw NotFoundException("RequirementCertification of Requirement", identifier)

        return dcsCertification.allValues()
    }

    private fun RequirementCertification.allValues(): Map<InformationConceptIdentifier, String?> {
        val valuesMap = mutableMapOf<InformationConceptIdentifier, String?>()
        values.forEach { valuesMap[it.providesValueFor] = it.value }
        subCertifications.forEach { valuesMap.putAll(it.allValues()) }
        return valuesMap
    }
}
