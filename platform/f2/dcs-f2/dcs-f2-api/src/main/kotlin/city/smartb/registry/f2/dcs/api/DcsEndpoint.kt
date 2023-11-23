package city.smartb.registry.f2.dcs.api

import city.smartb.registry.f2.dcs.api.service.DcsF2AggregateService
import city.smartb.registry.f2.dcs.api.service.DcsF2FinderService
import city.smartb.registry.f2.dcs.domain.DcsApi
import city.smartb.registry.f2.dcs.domain.command.DataCollectionStepDefineFunction
import f2.dsl.fnc.f2Function
import jakarta.annotation.security.PermitAll
import org.springframework.context.annotation.Bean
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import s2.spring.utils.logger.Logger

@RestController
@RequestMapping
class DcsEndpoint(
    private val dcsF2AggregateService: DcsF2AggregateService,
    private val dcsF2FinderService: DcsF2FinderService
): DcsApi {
    private val logger by Logger()

    @PermitAll
    @Bean
    override fun dataCollectionStepDefine(): DataCollectionStepDefineFunction = f2Function { command ->
        logger.info("dataCollectionStepDefine: $command")
//        dcsPoliciesEnforcer.checkDefine()
        dcsF2AggregateService.define(command)
    }
}
