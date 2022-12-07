package city.smartb.registry.program.f2.asset.api

import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.fnc.f2Function
import city.smartb.registry.program.f2.asset.api.service.AssetF2AggregateService
import city.smartb.registry.program.f2.asset.api.service.AssetF2FinderService
import city.smartb.registry.program.f2.asset.api.service.AssetPoliciesEnforcer
import city.smartb.registry.program.f2.asset.domain.AssetCommandApi
import city.smartb.registry.program.f2.asset.domain.AssetQueryApi
import city.smartb.registry.program.f2.asset.domain.command.AssetCreateFunction
import city.smartb.registry.program.f2.asset.domain.command.AssetUpdateFunction
import city.smartb.registry.program.f2.asset.domain.query.AssetGetFunction
import city.smartb.registry.program.f2.asset.domain.query.AssetGetResult
import city.smartb.registry.program.f2.asset.domain.query.AssetPageFunction
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import s2.spring.utils.logger.Logger

@RestController
@RequestMapping
@Configuration
class AssetEndpoint(
    private val assetF2FinderService: AssetF2FinderService,
    private val assetF2AggregateService: AssetF2AggregateService,
    private val assetPoliciesEnforcer: AssetPoliciesEnforcer
): AssetQueryApi, AssetCommandApi {

    private val logger by Logger()

    @Bean
    override fun assetGet(): AssetGetFunction = f2Function { query ->
        logger.info("assetGet: $query")
        assetF2FinderService.getOrNull(query.id).let(::AssetGetResult)
    }

    @Bean
    override fun assetPage(): AssetPageFunction = f2Function { query ->
        logger.info("assetPage: $query")
        assetPoliciesEnforcer.checkList()

        assetF2FinderService.page(
            offset = OffsetPagination(
                offset = query.page * query.size,
                limit = query.size
            )
        )
    }

    @Bean
    override fun assetCreate(): AssetCreateFunction = f2Function { command ->
        logger.info("assetCreate: $command")
        assetPoliciesEnforcer.checkCreate()
        assetF2AggregateService.create(command)
    }


    @Bean
    override fun assetUpdate(): AssetUpdateFunction = f2Function { command ->
        logger.info("assetUpdateDetails: $command")
        assetPoliciesEnforcer.checkUpdate(command.id)
        assetF2AggregateService.update(command)
    }

//    @Bean
//    override fun assetDelete(): AssetDeleteFunction = f2Function { command ->
//        logger.info("assetDelete: $command")
//        assetPoliciesEnforcer.checkDelete(command.id)
//        assetF2AggregateService.delete(command)
//    }

}
