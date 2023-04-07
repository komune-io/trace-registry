package city.smartb.registry.program.f2.activity.api

import cccev.dsl.client.CCCEVClient
import cccev.f2.request.client.requestAddEvidence
import cccev.f2.request.domain.command.RequestAddEvidenceCommandDTOBase
import cccev.s2.request.domain.command.RequestAddValuesCommand
import city.smartb.fs.spring.utils.contentByteArray
import city.smartb.registry.program.f2.activity.api.service.ActivityF2ExecutorService
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.fnc.f2Function
import city.smartb.registry.program.f2.activity.api.service.ActivityF2FinderService
import city.smartb.registry.program.f2.activity.api.service.ActivityPoliciesEnforcer
import city.smartb.registry.program.f2.activity.domain.ActivityApi
import city.smartb.registry.program.f2.activity.domain.command.ActivityCreateFunction
import city.smartb.registry.program.f2.activity.domain.command.ActivityCreatedEvent
import city.smartb.registry.program.f2.activity.domain.command.ActivityStepCreateFunction
import city.smartb.registry.program.f2.activity.domain.command.ActivityStepCreatedEvent
import city.smartb.registry.program.f2.activity.domain.command.ActivityStepFulfillCommand
import city.smartb.registry.program.f2.activity.domain.command.ActivityStepFulfillFunction
import city.smartb.registry.program.f2.activity.domain.command.ActivityStepFulfilledEvent
import city.smartb.registry.program.f2.activity.domain.query.ActivityPageFunction
import city.smartb.registry.program.f2.activity.domain.query.ActivityStepPageFunction
import f2.dsl.fnc.invokeWith
import javax.annotation.security.PermitAll
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.http.codec.multipart.FilePart
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestPart
import org.springframework.web.bind.annotation.RestController
import s2.spring.utils.logger.Logger

@RestController
@RequestMapping
@Configuration
class ActivityEndpoint(
    private val cccevClient: CCCEVClient,
    private val activityExecutorService: ActivityF2ExecutorService,
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

    @PermitAll
    @Bean
    override fun activityCreate(): ActivityCreateFunction = f2Function { cmd ->
        activityPoliciesEnforcer.checkCreation()
        activityExecutorService.createActivity(cmd).let { identifier ->
            ActivityCreatedEvent(identifier = identifier)
        }
    }

    @PermitAll
    @Bean
    override fun activityStepCreate(): ActivityStepCreateFunction = f2Function { cmd ->
        activityPoliciesEnforcer.checkStepCreation()
        activityExecutorService.createActivity(cmd).let { identifier ->
            ActivityStepCreatedEvent(identifier = identifier)
        }
    }


    override fun activityFulfillTask(): ActivityStepFulfillFunction = f2Function { cmd ->
        activityPoliciesEnforcer.checkCanFulfillTask()
        ActivityStepFulfilledEvent(
            identifier = cmd.identifier,
            value = cmd.value,
            file = null,
//            evidence = null,
        )
    }


    @PostMapping("/activityFulfillTask")
    suspend fun activityFulfillTask(
        @RequestPart("command") cmd: ActivityStepFulfillCommand,
        @RequestPart("file") file: FilePart?
    ): ActivityStepFulfilledEvent {
        activityPoliciesEnforcer.checkCanFulfillTask()
        val step = activityF2FinderService.stepGet(cmd.identifier) ?: throw IllegalArgumentException("Step not found")

        step.hasConcept?.let { concept ->
            RequestAddValuesCommand(
                id = cmd.requestId,
                values = mapOf(
                    concept.id to cmd.value,
                )
            ).invokeWith(cccevClient.requestClient.requestAddValues())
        }
        return ActivityStepFulfilledEvent(
            identifier = cmd.identifier,
            value = cmd.value,
            file = null
        )
    }
}
