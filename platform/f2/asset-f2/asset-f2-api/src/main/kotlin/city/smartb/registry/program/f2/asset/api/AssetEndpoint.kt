package city.smartb.registry.program.f2.asset.api

import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.fnc.f2Function
import city.smartb.registry.program.f2.asset.api.service.AssetPoliciesEnforcer
import city.smartb.registry.program.f2.asset.domain.AssetCommandApi
import city.smartb.registry.program.f2.asset.domain.AssetQueryApi
import city.smartb.registry.program.f2.asset.domain.command.AssetCreateFunction
import city.smartb.registry.program.f2.asset.domain.command.AssetUpdateFunction
import city.smartb.registry.program.f2.asset.domain.query.AssetGetFunction
import city.smartb.registry.program.f2.asset.domain.query.AssetGetResult
import city.smartb.registry.program.f2.asset.domain.query.AssetPageFunction
import city.smartb.registry.program.f2.asset.domain.query.AssetPageResult
import city.smartb.registry.program.s2.asset.api.AssetAggregateService
import city.smartb.registry.program.s2.asset.api.AssetFinderService
import javax.annotation.security.PermitAll
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import s2.spring.utils.logger.Logger

@RestController
@RequestMapping
@Configuration
class AssetEndpoint(
    private val assetFinderService: AssetFinderService,
    private val assetAggregateService: AssetAggregateService,
    private val assetPoliciesEnforcer: AssetPoliciesEnforcer
): AssetQueryApi, AssetCommandApi {

    private val logger by Logger()

    @PermitAll
    @Bean
    override fun assetGet(): AssetGetFunction = f2Function { query ->
        logger.info("assetGet: $query")
        assetFinderService.getOrNull(query.id).let(::AssetGetResult)
    }

    @PermitAll
    @Bean
    override fun assetPage(): AssetPageFunction = f2Function { query ->
        logger.info("assetPage: $query")
        assetPoliciesEnforcer.checkList()
        assetFinderService.page(
            offset = OffsetPagination(
                offset = query.page * query.size,
                limit = query.size
            )
        ).let { page ->
            AssetPageResult(
                items = page.items,
                total = page.total
            )
        }
    }

    @PermitAll
    @Bean
    override fun assetCreate(): AssetCreateFunction = f2Function { command ->
        logger.info("assetCreate: $command")
//        assetPoliciesEnforcer.checkCreate()
        assetAggregateService.create(command)
    }

    @PermitAll
    @Bean
    override fun assetUpdate(): AssetUpdateFunction = f2Function { command ->
        logger.info("assetUpdateDetails: $command")
//        assetPoliciesEnforcer.checkUpdate(command.id)
        assetAggregateService.update(command)
    }

//    @Bean
//    override fun assetDelete(): AssetDeleteFunction = f2Function { command ->
//        logger.info("assetDelete: $command")
//        assetPoliciesEnforcer.checkDelete(command.id)
//        assetF2AggregateService.delete(command)
//    }

}
