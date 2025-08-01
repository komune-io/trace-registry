package io.komune.registry.s2.cccev.api

import io.komune.registry.api.commons.utils.mapAsync
import io.komune.registry.s2.cccev.api.entity.concept.InformationConceptAutomateExecutor
import io.komune.registry.s2.cccev.api.entity.unit.DataUnitAutomateExecutor
import io.komune.registry.s2.cccev.api.entity.value.SupportedValueAutomateExecutor
import io.komune.registry.s2.cccev.api.entity.value.SupportedValueOldRepository
import io.komune.registry.s2.cccev.api.processor.Processor
import io.komune.registry.s2.cccev.domain.SupportedValueState
import io.komune.registry.s2.cccev.domain.command.concept.InformationConceptComputeValueCommand
import io.komune.registry.s2.cccev.domain.command.concept.InformationConceptComputedValueEvent
import io.komune.registry.s2.cccev.domain.command.concept.InformationConceptCreateCommand
import io.komune.registry.s2.cccev.domain.command.concept.InformationConceptCreatedEvent
import io.komune.registry.s2.cccev.domain.command.concept.InformationConceptDeleteCommand
import io.komune.registry.s2.cccev.domain.command.concept.InformationConceptDeletedEvent
import io.komune.registry.s2.cccev.domain.command.concept.InformationConceptUpdateCommand
import io.komune.registry.s2.cccev.domain.command.concept.InformationConceptUpdatedEvent
import io.komune.registry.s2.cccev.domain.command.unit.DataUnitCreateCommand
import io.komune.registry.s2.cccev.domain.command.unit.DataUnitCreatedEvent
import io.komune.registry.s2.cccev.domain.command.value.SupportedValueCreateCommand
import io.komune.registry.s2.cccev.domain.command.value.SupportedValueCreatedEvent
import io.komune.registry.s2.cccev.domain.command.value.SupportedValueDeprecateCommand
import io.komune.registry.s2.cccev.domain.command.value.SupportedValueDeprecatedEvent
import io.komune.registry.s2.cccev.domain.command.value.SupportedValueUpdateValueCommand
import io.komune.registry.s2.cccev.domain.command.value.SupportedValueUpdatedValueEvent
import io.komune.registry.s2.cccev.domain.command.value.SupportedValueValidateCommand
import io.komune.registry.s2.cccev.domain.command.value.SupportedValueValidatedEvent
import io.komune.registry.s2.commons.utils.truncateLanguage
import org.springframework.stereotype.Service
import java.util.UUID

@Service
class CccevOldAggregateService(
    private val conceptAutomate: InformationConceptAutomateExecutor,
    private val unitAutomate: DataUnitAutomateExecutor,
    private val valueAutomate: SupportedValueAutomateExecutor,
    private val valueRepository: SupportedValueOldRepository,
) {
    suspend fun createConcept(command: InformationConceptCreateCommand) = conceptAutomate.init(command) {
        InformationConceptCreatedEvent(
            id = UUID.randomUUID().toString(),
            date = System.currentTimeMillis(),
            identifier = command.identifier,
            name = command.name.mapKeys { (key) -> key.truncateLanguage() },
            unit = command.unit,
            aggregator = command.aggregator,
            themeIds = command.themeIds.toSet()
        )
    }

    suspend fun updateConcept(command: InformationConceptUpdateCommand) = conceptAutomate.transition(command) {
        InformationConceptUpdatedEvent(
            id = command.id,
            date = System.currentTimeMillis(),
            name = command.name.mapKeys { (key) -> key.truncateLanguage() },
            unit = command.unit,
            aggregator = command.aggregator,
            themeIds = command.themeIds.toSet()
        )
    }

    suspend fun deleteConcept(command: InformationConceptDeleteCommand) = conceptAutomate.transition(command) {
        valueRepository.findAllByConceptIdAndStatusNot(command.id, SupportedValueState.DEPRECATED)
            .mapAsync { deprecateValue(SupportedValueDeprecateCommand(it.id)) }
        InformationConceptDeletedEvent(
            id = command.id,
            date = System.currentTimeMillis()
        )
    }

    suspend fun createUnit(command: DataUnitCreateCommand) = unitAutomate.init(command) {
        DataUnitCreatedEvent(
            id = UUID.randomUUID().toString(),
            date = System.currentTimeMillis(),
            identifier = command.identifier,
            type = command.type,
            name = command.name.mapKeys { (key) -> key.truncateLanguage() },
            abbreviation = command.abbreviation,
        )
    }

    suspend fun computeValue(command: InformationConceptComputeValueCommand) = conceptAutomate.transition(command) { concept ->
        val value = Processor.compute(command.processorInput)

        val valueId = SupportedValueCreateCommand(
            conceptId = concept.id,
            unit = command.unit,
            isRange = false,
            value = value,
            query = command.processorInput.query,
            description = null
        ).let { createValue(it).id }

        InformationConceptComputedValueEvent(
            id = command.id,
            date = System.currentTimeMillis(),
            supportedValueId = valueId
        )
    }

    suspend fun createValue(command: SupportedValueCreateCommand) = valueAutomate.init(command) {
        SupportedValueCreatedEvent(
            id = UUID.randomUUID().toString(),
            date = System.currentTimeMillis(),
            conceptId = command.conceptId,
            unit = command.unit,
            isRange = command.isRange,
            value = command.value,
            query = command.query,
            description = command.description
        )
    }

    suspend fun updateValue(command: SupportedValueUpdateValueCommand) = valueAutomate.transition(command) {
        SupportedValueUpdatedValueEvent(
            id = command.id,
            date = System.currentTimeMillis(),
            value = command.value
        )
    }

    suspend fun validateValue(command: SupportedValueValidateCommand) = valueAutomate.transition(command) {
        SupportedValueValidatedEvent(
            id = command.id,
            date = System.currentTimeMillis(),
        )
    }

    suspend fun deprecateValue(command: SupportedValueDeprecateCommand) = valueAutomate.transition(command) {
        SupportedValueDeprecatedEvent(
            id = command.id,
            date = System.currentTimeMillis(),
        )
    }
}
