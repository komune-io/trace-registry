package cccev.f2.certification.api

import cccev.f2.certification.api.model.flattenTo
import cccev.f2.certification.api.service.CertificationF2AggregateService
import cccev.f2.certification.api.service.CertificationF2FinderService
import cccev.f2.certification.domain.CertificationApi
import cccev.f2.certification.domain.command.CertificationAddRequirementsFunction
import cccev.f2.certification.domain.command.CertificationCreateFunction
import cccev.f2.certification.domain.command.CertificationFillValuesFunction
import cccev.f2.certification.domain.command.CertificationRemoveRequirementsFunction
import cccev.f2.certification.domain.query.CertificationGetFunction
import cccev.f2.certification.domain.query.CertificationGetResult
import cccev.f2.commons.CccevFlatGraph
import city.smartb.fs.s2.file.client.FileClient
import f2.dsl.fnc.f2Function
import org.springframework.context.annotation.Bean
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import s2.spring.utils.logger.Logger

/**
 * @d2 api
 * @parent [D2RequestApiPage]
 */
@RestController
@RequestMapping
class CertificationEndpoint(
    private val fileClient: FileClient,
    private val certificationF2AggregateService: CertificationF2AggregateService,
    private val certificationF2FinderService: CertificationF2FinderService
): CertificationApi {
    private val logger by Logger()

    @Bean
    override fun certificationGet(): CertificationGetFunction = f2Function { query ->
        logger.info("certificationGet: $query")
        val graph = CccevFlatGraph().also {
            certificationF2FinderService.getOrNull(query.id)?.flattenTo(it)
        }
        CertificationGetResult(
            certification = graph.certifications[query.id],
            requirementCertifications = graph.requirementCertifications,
            requirements = graph.requirements,
            concepts = graph.concepts,
            units = graph.units,
            unitOptions = graph.unitOptions,
            supportedValues = graph.supportedValues
        )
    }

//    /** Download an evidence of a certification */
//    @PostMapping("/certificationDownloadEvidence")
//    suspend fun certificationDownloadEvidence(
//        @RequestBody query: CertificationDownloadEvidenceQueryDTOBase,
//    ) = serveFile(fileClient) {
//        logger.info("certificationDownloadEvidence: $query")
//        val certification = certificationF2FinderService.get(query.id)
//        val evidence = certification.evidences.values.flatten().firstOrNull { it.id == query.evidenceId }
//            ?: throw NotFoundException("Evidence", query.evidenceId)
//
//        evidence.file
//    }

    @Bean
    override fun certificationCreate(): CertificationCreateFunction = f2Function { command ->
        logger.info("certificationCreate: $command")
        certificationF2AggregateService.create(command)
    }

    @Bean
    override fun certificationAddRequirements(): CertificationAddRequirementsFunction = f2Function { command ->
        logger.info("certificationAddRequirements: $command")
        certificationF2AggregateService.addRequirements(command)
    }

    @Bean
    override fun certificationRemoveRequirements(): CertificationRemoveRequirementsFunction = f2Function { command ->
        logger.info("certificationRemoveRequirements: $command")
        certificationF2AggregateService.removeRequirements(command)
    }

    @Bean
    override fun certificationFillValues(): CertificationFillValuesFunction = f2Function { command ->
        logger.info("certificationFillValues: $command")
        certificationF2AggregateService.fillValues(command)
    }

//    /** Add an evidence to a certification */
//    @PostMapping("/certificationAddEvidence")
//    suspend fun certificationAddEvidence(
//        @RequestPart("command") command: CertificationAddEvidenceCommandDTOBase,
//        @RequestPart("file", required = false) file: FilePart?,
//    ): CertificationAddedEvidenceEvent {
//        logger.info("certificationAddEvidence: $command")
//        return certificationF2AggregateService.addEvidence(command, file)
//    }

//    @Bean
//    override fun certificationRemoveEvidence(): CertificationRemoveEvidenceFunction = f2Function { command ->
//        logger.info("certificationRemoveEvidence: $command")
//        certificationF2AggregateService.removeEvidence(command)
//    }
}
