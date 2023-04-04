package city.smartb.registry.program.f2.activity.api

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
import city.smartb.registry.program.f2.activity.domain.command.ActivityStepFulfillFunction
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

//    @PermitAll
//    @Bean
    override fun activityFulfillTask(): ActivityStepFulfillFunction = f2Function { query ->
        activityPoliciesEnforcer.checkCanFulfillTask()
        TODO("Not yet implemented")
    }


//    @PostMapping("/activityFulfillTask")
//    suspend fun activityFulfillTask(
//        @RequestPart("command") cmd: ActivityStepFulfillCommand,
//        @RequestPart("file") file: FilePart
//    ): ActivityStepFulfilledEvent {
//        activityPoliciesEnforcer.checkCanFulfillTask()
//        val evidenceId = cmd.evidenceId ?: UUID.randomUUID().toString()
//        val fileByteArray = file.contentByteArray()
//        val uploadedFile = fsService.uploadFile(
//            FileUploadCommand(
//            path = toFilePath(cmd.id, evidenceId, file.filename()),
//            metadata = cmd.toMetadata(evidenceId, file.filename()),
//        ), fileByteArray)
//        return ActivityStepFulfilledEvent(
//            ide = cmd.id,
//            evidence = uploadedFile.fromMetadata(),
//        )
//    }
}
