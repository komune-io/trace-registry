package io.komune.registry.s2.commons.model

import s2.dsl.automate.Evt
import s2.dsl.automate.WithId
import s2.dsl.automate.model.WithS2Id

interface S2SourcingEvent<ID>: Evt, WithId<ID & Any>, WithS2Id<ID & Any>, Comparable<S2SourcingEvent<ID>> {
    val date: Long

    override fun s2Id() = id

    override operator fun compareTo(other: S2SourcingEvent<ID>): Int {
        return date.compareTo(other.date)
    }
}
