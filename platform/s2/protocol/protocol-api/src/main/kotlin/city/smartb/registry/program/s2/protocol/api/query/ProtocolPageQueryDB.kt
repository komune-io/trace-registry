package city.smartb.registry.program.s2.protocol.api.query

import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO
import city.smartb.registry.program.api.commons.model.Match
import city.smartb.registry.program.s2.protocol.api.entity.ProtocolEntity
import city.smartb.registry.program.s2.protocol.domain.model.ProtocolId
import org.springframework.stereotype.Repository

@Repository
class ProtocolPageQueryDB {
    fun execute(
        id: Match<ProtocolId>? = null,
        offset: OffsetPagination? = null
    ): PageDTO<ProtocolEntity> = TODO()
}
