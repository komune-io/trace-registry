package city.smartb.registry.f2.dcs.api.service

import cccev.dsl.client.CCCEVClient
import cccev.dsl.model.RequirementIdentifier
import cccev.f2.requirement.domain.query.RequirementGetByIdentifierQueryDTOBase
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
}
