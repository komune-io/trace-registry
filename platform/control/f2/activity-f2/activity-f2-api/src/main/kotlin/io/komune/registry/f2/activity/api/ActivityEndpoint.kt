package io.komune.registry.f2.activity.api

import cccev.dsl.client.CCCEVClient
import cccev.dsl.client.model.unflatten
import cccev.f2.certification.command.CertificationFillValuesCommand
import cccev.f2.certification.query.CertificationGetQuery
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.fnc.f2Function
import f2.dsl.fnc.invokeWith
import io.komune.fs.s2.file.client.FileClient
import io.komune.fs.spring.utils.serveFile
import io.komune.registry.api.commons.exception.NotFoundException
import io.komune.registry.f2.activity.api.service.ActivityF2ExecutorService
import io.komune.registry.f2.activity.api.service.ActivityF2FinderService
import io.komune.registry.f2.activity.api.service.ActivityPoliciesEnforcer
import io.komune.registry.f2.activity.api.service.CertificateService
import io.komune.registry.f2.activity.domain.ActivityApi
import io.komune.registry.f2.activity.domain.command.ActivityCreateFunction
import io.komune.registry.f2.activity.domain.command.ActivityCreatedEventDTOBase
import io.komune.registry.f2.activity.domain.command.ActivityStepCreateFunction
import io.komune.registry.f2.activity.domain.command.ActivityStepCreatedEventDTOBase
import io.komune.registry.f2.activity.domain.command.ActivityStepEvidenceFulfillCommandDTOBase
import io.komune.registry.f2.activity.domain.command.ActivityStepEvidenceFulfilledEventDTOBase
import io.komune.registry.f2.activity.domain.command.ActivityStepFulfillFunction
import io.komune.registry.f2.activity.domain.command.ActivityStepFulfilledEventDTOBase
import io.komune.registry.f2.activity.domain.query.ActivityPageFunction
import io.komune.registry.f2.activity.domain.query.ActivityStepEvidenceDownloadQuery
import io.komune.registry.f2.activity.domain.query.ActivityStepPageFunction
import jakarta.annotation.security.PermitAll
import org.slf4j.LoggerFactory
import org.springframework.context.annotation.Bean
import org.springframework.core.io.InputStreamResource
import org.springframework.http.ResponseEntity
import org.springframework.http.codec.multipart.FilePart
import org.springframework.http.server.reactive.ServerHttpResponse
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestPart
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping
class ActivityEndpoint(
    private val cccevClient: CCCEVClient,
    private val certificateService: CertificateService,
    private val activityExecutorService: ActivityF2ExecutorService,
    private val activityF2FinderService: ActivityF2FinderService,
    private val activityPoliciesEnforcer: ActivityPoliciesEnforcer,
    private val fileClient: FileClient,
): ActivityApi {

    private val logger = LoggerFactory.getLogger(javaClass)

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
        logger.info("activityStepPage: $query")
        activityPoliciesEnforcer.checkPageStep()
        activityF2FinderService.pageSteps(
            offset = OffsetPagination(
                offset = query.offset ?: 0,
                limit = query.limit ?: 1000
            ),
            activityIdentifier = query.activityIdentifier,
            certificationId = query.certificationId
        )
    }

    @PermitAll
    @Bean
    override fun activityCreate(): ActivityCreateFunction = f2Function { cmd ->
        logger.info("activityCreate: $cmd")
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
        logger.info("activityStepFulfill: $cmd")
        activityPoliciesEnforcer.checkCanFulfillStep()

        val certificationGraph = CertificationGetQuery(
            id = cmd.certificationId
        ).invokeWith(cccevClient.certificationClient.certificationGet())
            .unflatten()
            ?: throw NotFoundException("Certification with identifier", cmd.certificationId)

        val step = activityF2FinderService.getStep(cmd.identifier, certificationGraph)
            ?: throw NotFoundException("Step with identifier", cmd.identifier)

        val value = step.hasConcept?.let { concept ->
            CertificationFillValuesCommand(
                id = certificationGraph.id,
                rootRequirementCertificationId = null,
                values = mapOf(
                    concept.identifier to cmd.value,
                )
            ).invokeWith(cccevClient.certificationClient.certificationFillValues())
            cmd.value
        }

        ActivityStepFulfilledEventDTOBase(
            identifier = cmd.identifier,
            value = value,
            file = null,
        )
    }

    @PostMapping("/activityStepEvidenceFulfill")
    suspend fun activityStepEvidenceFulfill(
        @RequestPart("command") cmd: ActivityStepEvidenceFulfillCommandDTOBase,
        @RequestPart("file") file: FilePart?
    ): ActivityStepEvidenceFulfilledEventDTOBase {
        logger.info("activityStepEvidenceFulfill: $cmd")
        activityPoliciesEnforcer.checkCanFulfillEvidenceStep()

        val certificationGraph = certificateService.getGraph(cmd.certificationId)

        val step = activityF2FinderService.getStep(cmd.identifier, certificationGraph)
            ?: throw NotFoundException("Step with identifier", cmd.identifier)

        // TODO wait until evidences are reimplemented in cccev
//        val part = file?.let {
//            (CertificationAddEvidenceCommand(
//                id = certification.id,
//                name = file.filename(),
//                url = null,
//                isConformantTo = emptyList(),
//                supportsConcept = listOf(step.id),
//                metadata = mapOf("isPublic" to cmd.isPublic.toString(), "certificationId" to certification.id),
//                vectorize = true
//            ) to file.contentByteArray()).invokeWith(
//                cccevClient.certificationClient.certificationAddEvidence()
//            )
//        }

        return ActivityStepEvidenceFulfilledEventDTOBase(
            file = null, //part?.file,
            identifier = cmd.identifier,
        )
    }

    @PostMapping("/activityStepEvidenceDownload")
    suspend fun activityStepEvidenceDownload(
        @RequestBody query: ActivityStepEvidenceDownloadQuery,
        response: ServerHttpResponse
    ): ResponseEntity<InputStreamResource> = serveFile(fileClient) {
        logger.info("assetCertificateDownload: $query")

        // TODO wait until evidences are reimplemented in cccev
//        certificateService.getOrNull(query.certificationId)
//            ?.getEvidence(query.evidenceId)
//            ?.file
//            ?.takeIf { path ->
//                val file = fsService.getFile(path)
//                file?.metadata?.get(ActivityStepEvidenceFulfillCommandDTOBase::isPublic.name.lowercase()).toBoolean()
//            }
        null
    }

}
