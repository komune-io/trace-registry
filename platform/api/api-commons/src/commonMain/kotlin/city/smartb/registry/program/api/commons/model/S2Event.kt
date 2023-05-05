package city.smartb.registry.program.api.commons.model

import s2.dsl.automate.Evt
import s2.dsl.automate.WithId
import s2.dsl.automate.model.WithS2Id

interface S2SourcingEvent<ID>: Evt, WithId<ID>, WithS2Id<ID> {
    val date: Long

    override fun s2Id() = id
}
