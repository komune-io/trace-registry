package city.smartb.registry.program.f2.activity.api

import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.fnc.f2Function
import city.smartb.registry.program.f2.activity.api.service.ActivityF2FinderService
import city.smartb.registry.program.f2.activity.api.service.ActivityPoliciesEnforcer
import city.smartb.registry.program.f2.activity.domain.ActivityApi
import city.smartb.registry.program.f2.activity.domain.query.ActivityPageFunction
import city.smartb.registry.program.f2.activity.domain.query.ActivityStepPageFunction
import javax.annotation.security.PermitAll
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import s2.spring.utils.logger.Logger

@RestController
@RequestMapping
@Configuration
class ActivityEndpoint(
    private val activityF2FinderService: ActivityF2FinderService,
    private val activityPoliciesEnforcer: ActivityPoliciesEnforcer,
): ActivityApi {

    private val logger by Logger()

    @PermitAll
    @Bean
    override fun activityPage(): ActivityPageFunction = f2Function { query ->
        logger.info("activityPage: $query")
        activityPoliciesEnforcer.checkPage()

        activityF2FinderService.activityPage(
            offset = OffsetPagination(
                offset = query.offset ?: 0,
                limit = query.limit ?: 1000
            ),
            projectId = query.projectId
        )
    }

    @PermitAll
    @Bean
    override fun activityStepPage(): ActivityStepPageFunction = f2Function { query ->
        logger.info("activityPage: $query")
        activityPoliciesEnforcer.checkPageStep()
        activityF2FinderService.stepPage(
            offset = OffsetPagination(
                offset = query.offset ?: 0,
                limit = query.limit ?: 1000
            ),
            activityId = query.activityId
        )
    }
}
