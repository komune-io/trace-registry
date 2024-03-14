package cccev.f2.concept.api.service

import cccev.core.concept.InformationConceptAggregateService
import cccev.core.concept.InformationConceptFinderService
import cccev.core.concept.command.InformationConceptCreateCommand
import cccev.core.concept.command.InformationConceptCreatedEvent
import cccev.core.concept.command.InformationConceptUpdateCommand
import cccev.core.concept.command.InformationConceptUpdatedEvent
import cccev.s2.unit.api.DataUnitFinderService
import cccev.s2.unit.domain.DataUnitId
import org.springframework.stereotype.Service

@Service
class InformationConceptF2AggregateService(
    private val dataUnitFinderService: DataUnitFinderService,
    private val informationConceptAggregateService: InformationConceptAggregateService,
    private val informationConceptFinderService: InformationConceptFinderService
) {
    suspend fun create(command: InformationConceptCreateCommand): InformationConceptCreatedEvent {
        checkConceptsExist(command.dependsOn)
        checkUnitExists(command.hasUnit)
        return informationConceptAggregateService.create(command)
    }

    suspend fun update(command: InformationConceptUpdateCommand): InformationConceptUpdatedEvent {
        checkConceptsExist(command.dependsOn)
        return informationConceptAggregateService.update(command)
    }

    private suspend fun checkConceptsExist(ids: Collection<DataUnitId>?) {
        ids?.forEach { informationConceptFinderService.get(it) }
    }

    private suspend fun checkUnitExists(id: DataUnitId?) {
        id?.let { dataUnitFinderService.get(id) }
    }
}
