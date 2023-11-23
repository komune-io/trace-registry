package city.smartb.registry.f2.dcs.api.service

import cccev.dsl.client.CCCEVClient
import city.smartb.registry.f2.dcs.api.converter.DcsToCccevConverter
import city.smartb.registry.f2.dcs.domain.command.DataCollectionStepDefineCommand
import city.smartb.registry.f2.dcs.domain.command.DataCollectionStepDefinedEvent
import city.smartb.registry.f2.dcs.domain.model.DataCollectionStep
import kotlinx.coroutines.flow.collect
import kotlinx.coroutines.flow.flowOf
import org.springframework.stereotype.Service

@Service
class DcsF2AggregateService(
    private val cccevClient: CCCEVClient
) {
    suspend fun define(command: DataCollectionStepDefineCommand): DataCollectionStepDefinedEvent {
        val dcs = DataCollectionStep(
            identifier = command.identifier,
            label = command.label,
            description = command.description,
            sections = command.sections,
            properties = command.properties,
        )
        val cccev = DcsToCccevConverter.convert(dcs)
        cccevClient.graphClient.save(flowOf(cccev)).collect()

        return DataCollectionStepDefinedEvent(dcs.identifier)
    }
}
