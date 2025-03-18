package io.komune.registry.s2.cccev.api

import io.komune.registry.s2.cccev.api.entity.concept.InformationConceptAutomateExecutor
import io.komune.registry.s2.cccev.api.entity.unit.DataUnitAutomateExecutor
import io.komune.registry.s2.cccev.api.entity.value.SupportedValueAutomateExecutor
import io.komune.registry.s2.cccev.api.processor.Processor
import io.komune.registry.s2.cccev.domain.command.concept.InformationConceptComputeValueCommand
import io.komune.registry.s2.cccev.domain.command.concept.InformationConceptComputedValueEvent
import io.komune.registry.s2.cccev.domain.command.concept.InformationConceptCreateCommand
import io.komune.registry.s2.cccev.domain.command.concept.InformationConceptCreatedEvent
import io.komune.registry.s2.cccev.domain.command.unit.DataUnitCreateCommand
import io.komune.registry.s2.cccev.domain.command.unit.DataUnitCreatedEvent
import io.komune.registry.s2.cccev.domain.command.value.SupportedValueCreateCommand
import io.komune.registry.s2.cccev.domain.command.value.SupportedValueCreatedEvent
import org.springframework.stereotype.Service
import java.util.UUID

@Service
class CccevAggregateService(
    private val conceptAutomate: InformationConceptAutomateExecutor,
    private val unitAutomate: DataUnitAutomateExecutor,
    private val valueAutomate: SupportedValueAutomateExecutor
) {
    suspend fun createConcept(command: InformationConceptCreateCommand) = conceptAutomate.init(command) {
        InformationConceptCreatedEvent(
            id = UUID.randomUUID().toString(),
            date = System.currentTimeMillis(),
            identifier = command.identifier,
            name = command.name,
            unitId = command.unitId,
        )
    }

    suspend fun createUnit(command: DataUnitCreateCommand) = unitAutomate.init(command) {
        DataUnitCreatedEvent(
            id = UUID.randomUUID().toString(),
            date = System.currentTimeMillis(),
            identifier = command.identifier,
            type = command.type,
            name = command.name,
            abbreviation = command.abbreviation,
        )
    }

    suspend fun computeValue(command: InformationConceptComputeValueCommand) = conceptAutomate.transition(command) { concept ->
        val value = Processor.compute(command.processorInput)

        val valueId = SupportedValueCreateCommand(
            conceptId = concept.id,
            value = value,
            query = command.processorInput.query
        ).let { createValue(it).id }

        InformationConceptComputedValueEvent(
            id = command.id,
            date = System.currentTimeMillis(),
            supportedValueId = valueId
        )
    }

    private suspend fun createValue(command: SupportedValueCreateCommand) = valueAutomate.init(command) {
        SupportedValueCreatedEvent(
            id = UUID.randomUUID().toString(),
            date = System.currentTimeMillis(),
            conceptId = command.conceptId,
            value = command.value,
            query = command.query
        )
    }
}
