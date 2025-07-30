package io.komune.registry.control.f2.protocol.api

import f2.dsl.fnc.f2Function
import io.komune.registry.control.f2.protocol.api.service.ProtocolDefinitionService
import io.komune.registry.control.f2.protocol.api.service.ProtocolF2FinderService
import io.komune.registry.control.f2.protocol.domain.command.ProtocolDefineCommandDTOBase
import io.komune.registry.control.f2.protocol.domain.command.ProtocolDefineFunction
import io.komune.registry.control.f2.protocol.domain.command.ProtocolDefinedEventDTOBase
import io.komune.registry.control.f2.protocol.domain.query.ProtocolGetFunction
import io.komune.registry.control.f2.protocol.domain.query.ProtocolGetResult
import jakarta.annotation.security.PermitAll
import org.springframework.context.annotation.Bean
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

//    @Bean
//    fun protocolDefine(): ProtocolDefineFunction = f2Function { command ->
    @PostMapping("/control/protocolDefine")
    suspend fun protocolDefine(@RequestBody command: ProtocolDefineCommandDTOBase): ProtocolDefinedEventDTOBase {
        logger.info("protocolDefine: $command")
        return protocolDefinitionService.define(command.protocol)
            .let(::ProtocolDefinedEventDTOBase)
    }
}
