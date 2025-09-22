package io.komune.registry.control.f2.protocol.api

import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.fnc.f2Function
import io.komune.registry.api.commons.utils.extractCommandPart
import io.komune.registry.api.commons.utils.extractFileParts
import io.komune.registry.control.f2.protocol.api.service.ProtocolDefinitionService
import io.komune.registry.control.f2.protocol.api.service.ProtocolF2FinderService
import io.komune.registry.control.f2.protocol.domain.command.ProtocolDefineCommandDTOBase
import io.komune.registry.control.f2.protocol.domain.command.ProtocolDefinedEventDTOBase
import io.komune.registry.control.f2.protocol.domain.query.ProtocolGetFunction
import io.komune.registry.control.f2.protocol.domain.query.ProtocolGetResult
import io.komune.registry.control.f2.protocol.domain.query.ProtocolPageFunction
import io.komune.registry.control.f2.protocol.domain.query.ProtocolPageResult
import jakarta.annotation.security.PermitAll
import org.springframework.context.annotation.Bean
import org.springframework.http.codec.multipart.Part
import org.springframework.util.MultiValueMap
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import s2.spring.utils.logger.Logger

@RestController
@RequestMapping
class ProtocolEndpoint(
    private val protocolDefinitionService: ProtocolDefinitionService,
    private val protocolF2FinderService: ProtocolF2FinderService
) {
    private val logger by Logger()

    @PermitAll
    @Bean
    fun protocolGet(): ProtocolGetFunction = f2Function { query ->
        logger.info("protocolGet: $query")
        protocolF2FinderService.getOrNull(query.id)
            .let(::ProtocolGetResult)
    }

    @PermitAll
    @Bean
    fun protocolPage(): ProtocolPageFunction = f2Function { query ->
        logger.info("protocolPage: $query")
        protocolF2FinderService.pageRefs(
            type = query.type,
            offset = OffsetPagination(
                offset = query.offset ?: 0,
                limit = query.limit ?: 10
            )
        ).let { page ->
            ProtocolPageResult(
                items = page.items,
                total = page.total
            )
        }
    }

    @PostMapping("/control/protocolDefine")
    suspend fun protocolDefine(
        @RequestBody parts: MultiValueMap<String, Part>
    ): ProtocolDefinedEventDTOBase {
        val command = parts.extractCommandPart<ProtocolDefineCommandDTOBase>()
        logger.info("protocolDefine: $command")

        val files = parts.extractFileParts()
        return protocolDefinitionService.define(command.protocol, files)
            .let(::ProtocolDefinedEventDTOBase)
    }
}
