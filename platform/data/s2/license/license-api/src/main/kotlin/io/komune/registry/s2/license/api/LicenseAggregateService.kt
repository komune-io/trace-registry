package io.komune.registry.s2.license.api

import io.komune.registry.s2.license.api.entity.LicenseAutomateExecutor
import io.komune.registry.s2.license.domain.command.LicenseCreateCommand
import io.komune.registry.s2.license.domain.command.LicenseCreatedEvent
import io.komune.registry.s2.license.domain.command.LicenseUpdateCommand
import io.komune.registry.s2.license.domain.command.LicenseUpdatedEvent
import java.util.UUID
import org.springframework.stereotype.Service

@Service
class LicenseAggregateService(
    private val automate: LicenseAutomateExecutor,
) {
    suspend fun create(command: LicenseCreateCommand) = automate.init(command) {
        LicenseCreatedEvent(
            id = UUID.randomUUID().toString(),
            identifier = command.identifier ?: UUID.randomUUID().toString(),
            name = command.name,
            url = command.url,
            date = System.currentTimeMillis()
        )
    }

    suspend fun update(command: LicenseUpdateCommand) = automate.transition(command) {
        LicenseUpdatedEvent(
            id = command.id,
            name = command.name,
            url = command.url,
            date = System.currentTimeMillis()
        )
    }
}
