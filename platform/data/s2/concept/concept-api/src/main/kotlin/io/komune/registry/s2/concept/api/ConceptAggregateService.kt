package io.komune.registry.s2.concept.api

import io.komune.registry.s2.commons.utils.truncateLanguage
import io.komune.registry.s2.concept.api.entity.ConceptAutomateExecutor
import io.komune.registry.s2.concept.domain.command.ConceptCreateCommand
import io.komune.registry.s2.concept.domain.command.ConceptCreatedEvent
import io.komune.registry.s2.concept.domain.command.ConceptUpdateCommand
import io.komune.registry.s2.concept.domain.command.ConceptUpdatedEvent
import org.springframework.stereotype.Service
import java.util.UUID

@Service
class ConceptAggregateService(
    private val automate: ConceptAutomateExecutor,
) {
    suspend fun create(command: ConceptCreateCommand) = automate.init(command) {
        ConceptCreatedEvent(
            id = UUID.randomUUID().toString(),
            identifier = command.identifier ?: UUID.randomUUID().toString(),
            prefLabels = command.prefLabels.mapKeys { (key) -> key.truncateLanguage() },
            definitions = command.definitions.mapKeys { (key) -> key.truncateLanguage() },
            schemes = command.schemes,
            date = System.currentTimeMillis()
        )
    }

    suspend fun update(command: ConceptUpdateCommand) = automate.transition(command) {
        ConceptUpdatedEvent(
            id = command.id,
            prefLabels = command.prefLabels.mapKeys { (key) -> key.truncateLanguage() },
            definitions = command.definitions.mapKeys { (key) -> key.truncateLanguage() },
            schemes = command.schemes,
            date = System.currentTimeMillis()
        )
    }
}
