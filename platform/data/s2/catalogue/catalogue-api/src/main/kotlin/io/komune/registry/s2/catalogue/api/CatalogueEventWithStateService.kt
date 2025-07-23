package io.komune.registry.s2.catalogue.api

import io.komune.registry.infra.redis.EventHistoryService
import io.komune.registry.s2.catalogue.api.entity.CatalogueAutomateConfig
import io.komune.registry.s2.catalogue.api.entity.CatalogueEntity
import io.komune.registry.s2.catalogue.api.entity.toModel
import io.komune.registry.s2.catalogue.domain.command.CatalogueEvent
import io.komune.registry.s2.catalogue.domain.model.CatalogueModel
import io.komune.registry.s2.commons.history.EventHistory
import io.komune.registry.s2.commons.history.mapEntities
import io.komune.registry.s2.commons.model.CatalogueId
import org.springframework.stereotype.Service

@Service
class CatalogueEventWithStateService(
    config: CatalogueAutomateConfig,
    view: CatalogueEvolver
): EventHistoryService<CatalogueEvent, CatalogueEntity, CatalogueId>(config.eventStore(), view) {
    suspend fun getHistory(id: CatalogueId): List<EventHistory<CatalogueEvent, CatalogueModel>> {
        return getEventsWithState(id).mapEntities { it.model.toModel() }
    }

    override fun <EVENT> sortBy(): Comparator<EVENT> = object : Comparator<EVENT> {
        override fun compare(event1: EVENT, event2: EVENT): Int {
            if (event1 is CatalogueEvent && event2 is CatalogueEvent) {
                return event1.date.compareTo(event2.date)
            }
            return 0
        }
    }
}
