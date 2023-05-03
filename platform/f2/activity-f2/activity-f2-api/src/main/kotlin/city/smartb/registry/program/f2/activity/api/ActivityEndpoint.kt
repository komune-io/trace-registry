package city.smartb.registry.program.f2.activity.api

import cccev.dsl.client.CCCEVClient
import cccev.f2.certification.client.certificationAddEvidence
import cccev.f2.certification.domain.command.CertificationAddEvidenceCommandDTOBase
import cccev.f2.certification.domain.query.CertificationGetByIdentifierQueryDTOBase
import cccev.s2.certification.domain.command.CertificationAddValuesCommand
import city.smartb.fs.spring.utils.contentByteArray
import city.smartb.registry.program.api.commons.exception.NotFoundException
import city.smartb.registry.program.f2.activity.api.service.ActivityF2ExecutorService
import city.smartb.registry.program.f2.activity.api.service.ActivityF2FinderService
import city.smartb.registry.program.f2.activity.api.service.ActivityPoliciesEnforcer
import city.smartb.registry.program.f2.activity.domain.ActivityApi
import city.smartb.registry.program.f2.activity.domain.command.ActivityCreateFunction
import city.smartb.registry.program.f2.activity.domain.command.ActivityCreatedEventDTOBase
import city.smartb.registry.program.f2.activity.domain.command.ActivityStepCreateFunction
import city.smartb.registry.program.f2.activity.domain.command.ActivityStepCreatedEventDTOBase
import city.smartb.registry.program.f2.activity.domain.command.ActivityStepEvidenceFulfillCommandDTOBase
import city.smartb.registry.program.f2.activity.domain.command.ActivityStepEvidenceFulfilledEventDTOBase
import city.smartb.registry.program.f2.activity.domain.command.ActivityStepFulfillFunction
import city.smartb.registry.program.f2.activity.domain.command.ActivityStepFulfilledEventDTOBase
import city.smartb.registry.program.f2.activity.domain.query.ActivityPageFunction
import city.smartb.registry.program.f2.activity.domain.query.ActivityStepPageFunction
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.fnc.f2Function
import f2.dsl.fnc.invokeWith
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import s2.spring.utils.logger.Logger
import javax.annotation.security.PermitAll
import org.springframework.http.codec.multipart.FilePart
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestPart

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

        activityF2FinderService.page(
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
        activityF2FinderService.pageSteps(
            offset = OffsetPagination(
                offset = query.offset ?: 0,
                limit = query.limit ?: 1000
            ),
            activityIdentifier = query.activityIdentifier,
            certificationIdentifier = query.certificationIdentifier
        )
    }

    @PermitAll
    @Bean
    override fun activityCreate(): ActivityCreateFunction = f2Function { cmd ->
        logger.info("activityPage: $cmd")
        activityPoliciesEnforcer.checkCreation()
        activityExecutorService.createActivity(cmd).let { identifier ->
            ActivityCreatedEventDTOBase(identifier = identifier)
        }
    }

    @PermitAll
    @Bean
    override fun activityStepCreate(): ActivityStepCreateFunction = f2Function { cmd ->
        logger.info("activityStepCreate: $cmd")
        activityPoliciesEnforcer.checkStepCreation()
        activityExecutorService.createActivity(cmd).let { identifier ->
            ActivityStepCreatedEventDTOBase(identifier = identifier)
        }
    }

    @Bean
    override fun activityStepFulfill(): ActivityStepFulfillFunction = f2Function { cmd ->
        logger.info("activityFulfillStep: $cmd")
        activityPoliciesEnforcer.checkCanFulfillStep()

        val certification = CertificationGetByIdentifierQueryDTOBase(
            identifier = cmd.certificationIdentifier
        ).invokeWith(cccevClient.certificationClient.certificationGetByIdentifier()).item
            ?: throw NotFoundException("Certification with identifier", cmd.certificationIdentifier)

        val step = activityF2FinderService.getStep(cmd.identifier, certification.identifier)
            ?: throw NotFoundException("Step with identifier", cmd.identifier)

        val value = step.hasConcept?.let { concept ->
            val result = CertificationAddValuesCommand(
                id = certification.id,
                values = mapOf(
                    concept.id to cmd.value,
                )
            ).invokeWith(cccevClient.certificationClient.certificationAddValues())
            result.values[concept.id]
        }

        ActivityStepFulfilledEventDTOBase(
            identifier = cmd.identifier,
            value = value,
            file = null,
//            evidence = null,
        )
    }

    @PostMapping("/activityStepEvidenceFulfill")
    suspend fun activityStepEvidenceFulfill(
        @RequestPart("command") cmd: ActivityStepEvidenceFulfillCommandDTOBase,
        @RequestPart("file") file: FilePart?
    ): ActivityStepEvidenceFulfilledEventDTOBase {
        logger.info("activityFulfillTaskFile: $cmd")
        activityPoliciesEnforcer.checkCanFulfillEvidenceStep()

        val certification = CertificationGetByIdentifierQueryDTOBase(
            identifier = cmd.certificationIdentifier
        ).invokeWith(cccevClient.certificationClient.certificationGetByIdentifier()).item
            ?: throw NotFoundException("Certification with identifier", cmd.certificationIdentifier)

        val part = file?.let {
            (CertificationAddEvidenceCommandDTOBase(
                id = certification.id,
                name = file.name(),
                url = null,
                isConformantTo = emptyList()
            ) to file.contentByteArray()).invokeWith(
                cccevClient.certificationClient.certificationAddEvidence()
            )
        }
        return ActivityStepEvidenceFulfilledEventDTOBase(
            file = part?.file,
            identifier = cmd.identifier,
        )
    }
}
