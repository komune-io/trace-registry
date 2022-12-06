package city.smartb.registry.program.s2.protocol.api

import city.smartb.registry.program.api.commons.exception.NotFoundException
import city.smartb.registry.program.api.commons.model.Match
import city.smartb.registry.program.s2.protocol.api.entity.ProtocolEntity
import city.smartb.registry.program.s2.protocol.api.entity.ProtocolRepository
import city.smartb.registry.program.s2.protocol.api.entity.toProtocol
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO
import f2.dsl.cqrs.page.map
import city.smartb.registry.program.s2.protocol.api.query.ProtocolPageQueryDB
import city.smartb.registry.program.s2.protocol.domain.ProtocolFinder
import city.smartb.registry.program.s2.protocol.domain.model.ProtocolId
import city.smartb.registry.program.s2.protocol.domain.model.Protocol
import org.springframework.stereotype.Service

@Service
class ProtocolFinderService(
	private val protocolPageQueryDB: ProtocolPageQueryDB,
	private val protocolRepository: ProtocolRepository
): ProtocolFinder {
	override suspend fun getOrNull(id: ProtocolId): Protocol? {
		return protocolRepository.findById(id).orElse(null)?.toProtocol()
	}

	override suspend fun get(id: ProtocolId): Protocol {
		return getOrNull(id) ?: throw NotFoundException("Protocol", id)
	}

	override suspend fun page(
		id: Match<ProtocolId>?,
		offset: OffsetPagination?
	): PageDTO<Protocol> {
		return protocolPageQueryDB.execute(
			id = id,
			offset = offset
		).map(ProtocolEntity::toProtocol)
	}
}
