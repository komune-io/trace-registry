package city.smartb.registry.program.s2.protocol.api.query

import city.smartb.registry.program.api.commons.extention.toPage
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO
import city.smartb.registry.program.api.commons.model.Match
import city.smartb.registry.program.s2.protocol.api.entity.ProtocolEntity
import city.smartb.registry.program.s2.protocol.api.entity.ProtocolRepository
import city.smartb.registry.program.s2.protocol.domain.model.ProtocolId
import f2.dsl.cqrs.page.Page
import org.springframework.stereotype.Repository

@Repository
class ProtocolPageQueryDB(
    val repository: ProtocolRepository
) {
    fun execute(
        id: Match<ProtocolId>? = null,
        offset: OffsetPagination? = null
    ): PageDTO<ProtocolEntity> {
        val page = offset.toPage()
        val items = repository.findAll(page)
        return Page(
            total = items.totalElements.toInt(),
            items =  items.toList()
        )
    }
}
