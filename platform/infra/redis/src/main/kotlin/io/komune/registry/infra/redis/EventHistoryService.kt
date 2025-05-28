package io.komune.registry.infra.redis

import io.komune.registry.s2.commons.history.EventHistory
import kotlinx.coroutines.flow.toList
import s2.dsl.automate.Evt
import s2.dsl.automate.model.WithS2Id
import s2.sourcing.dsl.event.EventRepository
import s2.sourcing.dsl.view.View

/**
 * Service for retrieving events with their corresponding entity states.
 * @param eventRepository Repository for retrieving events.
 * @param view View for evolving entity state based on events.
 */
abstract class EventHistoryService<EVENT, ENTITY, ID>(
    private val eventRepository: EventRepository<EVENT, ID>,
    private val view: View<EVENT, ENTITY>
) where EVENT : Evt, EVENT : WithS2Id<ID> {

    /**
     * Retrieves all events for the given object ID and constructs the entity state for each event.
     * @param id The object ID.
     * @return A list of EventWithState objects, each containing the event index, the event itself, and the entity state.
     */
    suspend fun getEventsWithState(id: ID): List<EventHistory<EVENT, ENTITY & Any>> {
        val events = eventRepository.load(id).toList().sortedWith(sortBy())

        val playedEvents = mutableListOf<EVENT>()
        return events.mapIndexed { index, currentEvent ->
            currentEvent::class.simpleName

            playedEvents.add(currentEvent)
            val currentState = playedEvents.fold(null as ENTITY?) { acc, event ->
                view.evolve(event, acc)
            }

            EventHistory(
                indexEvent = index,
                event = currentEvent,
                eventType = currentEvent::class.simpleName ?: "Unknown",
                model = currentState!!
            )
        }.toList()
    }

    abstract fun <EVENT> sortBy(): Comparator<EVENT>

}
