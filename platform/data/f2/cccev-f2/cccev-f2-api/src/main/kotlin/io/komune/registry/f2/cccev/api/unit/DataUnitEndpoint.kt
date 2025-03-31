package io.komune.registry.f2.cccev.api.unit

import f2.dsl.fnc.f2Function
import io.komune.registry.f2.cccev.api.unit.service.DataUnitF2FinderService
import io.komune.registry.f2.cccev.api.unit.service.DataUnitPoliciesEnforcer
import io.komune.registry.f2.cccev.domain.unit.DataUnitApi
import io.komune.registry.f2.cccev.domain.unit.command.DataUnitCreateFunction
import io.komune.registry.f2.cccev.domain.unit.command.DataUnitCreatedEventDTOBase
import io.komune.registry.f2.cccev.domain.unit.query.DataUnitGetByIdentifierFunction
import io.komune.registry.f2.cccev.domain.unit.query.DataUnitGetByIdentifierResult
import io.komune.registry.f2.cccev.domain.unit.query.DataUnitListFunction
import io.komune.registry.f2.cccev.domain.unit.query.DataUnitListResult
import io.komune.registry.s2.cccev.api.CccevAggregateService
import org.springframework.context.annotation.Bean
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import s2.spring.utils.logger.Logger

@RestController
@RequestMapping
class DataUnitEndpoint(
    private val cccevAggregateService: CccevAggregateService,
    private val dataUnitF2FinderService: DataUnitF2FinderService,
    private val dataUnitPoliciesEnforcer: DataUnitPoliciesEnforcer
) : DataUnitApi {
    private val logger by Logger()

    @Bean
    override fun dataUnitGetByIdentifier(): DataUnitGetByIdentifierFunction = f2Function { query ->
        logger.info("dataUnitGetByIdentifier: $query")
        dataUnitF2FinderService.getByIdentifierOrNull(query.identifier)
            .let(::DataUnitGetByIdentifierResult)
    }

    @Bean
    override fun dataUnitList(): DataUnitListFunction = f2Function { query ->
        logger.info("dataUnitList: $query")
        dataUnitF2FinderService.list(query.language)
            .let(::DataUnitListResult)
    }

    @Bean
    override fun dataUnitCreate(): DataUnitCreateFunction = f2Function { command ->
        logger.info("dataUnitCreate: $command")
        dataUnitPoliciesEnforcer.checkCreate()
        cccevAggregateService.createUnit(command)
            .let { DataUnitCreatedEventDTOBase(it.id) }
    }
}
