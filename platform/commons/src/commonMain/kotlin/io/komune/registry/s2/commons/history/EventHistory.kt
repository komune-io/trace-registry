package io.komune.registry.s2.commons.history

import kotlinx.serialization.Serializable

/**
 * Data class representing an event with its index and corresponding entity state.
 * @param indexEvent The index of the event in the sequence.
 * @param event The event itself.
 * @param model The entity state after applying the event.
 */
@Serializable
data class EventHistory<EVENT, ENTITY>(
    val indexEvent: Int,
    val eventType: String,
    val event: EVENT,
    val model: ENTITY
)


fun <EVENT, ENTITY, RESULT> List<EventHistory<EVENT, ENTITY & Any>>.mapEntities(
    transform: (EventHistory<EVENT, ENTITY & Any>) -> RESULT
) =
    map { eventHistory ->
        eventHistory.mapEntity(transform)
    }

fun <EVENT, ENTITY, RESULT> EventHistory<EVENT, ENTITY & Any>.mapEntity(
    transform: (EventHistory<EVENT, ENTITY & Any>) -> RESULT
): EventHistory<EVENT, RESULT> {
    val model = transform(this)

    return EventHistory(this.indexEvent, this.eventType, this.event, model)
}