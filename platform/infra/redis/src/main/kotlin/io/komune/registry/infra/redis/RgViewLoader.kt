package io.komune.registry.infra.redis

import io.komune.registry.s2.commons.model.S2SourcingEvent
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.asFlow
import kotlinx.coroutines.flow.map
import kotlinx.coroutines.flow.mapNotNull
import kotlinx.coroutines.flow.toList
import kotlinx.coroutines.flow.transform
import s2.sourcing.dsl.event.EventRepository
import s2.sourcing.dsl.view.View
import s2.sourcing.dsl.view.ViewLoader

open class RgViewLoader<EVENT, ENTITY, ID: Any>(
	private val eventRepository: EventRepository<EVENT, ID>,
	view: View<EVENT, ENTITY>
): ViewLoader<EVENT, ENTITY, ID>(eventRepository, view) where
EVENT: S2SourcingEvent<ID> {

	override suspend fun reloadHistory(): List<ENTITY> = eventRepository.loadAll()
		.groupBy( { event -> event.s2Id() }, { event -> event.date })
		.reducePerKey(::load)
		.mapNotNull{it}
		.toList()

	suspend fun <T, K, S: Comparable<S>> Flow<T>.groupBy(
		keySelector: suspend (T) -> K,
		sortSelector: (T) -> S
	): Map<K, Flow<T>> {
		val resultMap = mutableMapOf<K, MutableList<T>>()

		transform { value ->
			val key = keySelector(value)
			val list = resultMap.getOrPut(key) { mutableListOf() }
			list.add(value)
			emit(resultMap)
		}.toList()

		return resultMap.mapValues { values -> values.value.sortedBy { sortSelector(it) }.asFlow() }
	}

	private fun <T, K, R> Map<K, Flow<T>>.reducePerKey(reduce: suspend (Flow<T>) -> R): Flow<R> {
		return this.values.asFlow().map { flow ->
			reduce(flow)
		}
	}
}
