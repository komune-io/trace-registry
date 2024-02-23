package cccev.f2.unit.api

import cccev.f2.unit.api.service.DataUnitF2AggregateService
import cccev.f2.unit.api.service.DataUnitF2FinderService
import cccev.f2.unit.domain.D2DataUnitF2Page
import cccev.f2.unit.domain.DataUnitApi
import cccev.f2.unit.domain.command.DataUnitCreateFunction
import cccev.f2.unit.domain.command.DataUnitUpdateFunction
import cccev.f2.unit.domain.query.DataUnitGetByIdentifierFunction
import cccev.f2.unit.domain.query.DataUnitGetByIdentifierResultDTOBase
import cccev.f2.unit.domain.query.DataUnitGetFunction
import cccev.f2.unit.domain.query.DataUnitGetResultDTOBase
import f2.dsl.fnc.f2Function
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import s2.spring.utils.logger.Logger

/**
 * @d2 api
 * @parent [D2DataUnitF2Page]
 */
@Configuration
class DataUnitEndpoint(
    private val dataUnitF2AggregateService: DataUnitF2AggregateService,
    private val dataUnitF2FinderService: DataUnitF2FinderService
): DataUnitApi {
    private val logger by Logger()

    @Bean
    override fun dataUnitGet(): DataUnitGetFunction = f2Function { query ->
        logger.info("dataUnitGet: $query")
        dataUnitF2FinderService.getOrNull(query.id).let(::DataUnitGetResultDTOBase)
    }

    @Bean
    override fun dataUnitGetByIdentifier(): DataUnitGetByIdentifierFunction = f2Function { query ->
        logger.info("dataUnitGet: $query")
        dataUnitF2FinderService.getOrNullByIdentifier(query.identifier).let(::DataUnitGetByIdentifierResultDTOBase)
    }

    @Bean
    override fun dataUnitCreate(): DataUnitCreateFunction = f2Function { command ->
        logger.info("dataUnitCreate: $command")
        dataUnitF2AggregateService.create(command)
    }

    @Bean
    override fun dataUnitUpdate(): DataUnitUpdateFunction = f2Function { command ->
        logger.info("dataUnitUpdate: $command")
        dataUnitF2AggregateService.update(command)
    }
}
