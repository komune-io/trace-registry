package io.komune.registry.control.f2.certification.api

import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.fnc.f2Function
import io.komune.registry.api.commons.utils.extractCommandPart
import io.komune.registry.api.commons.utils.extractFileParts
import io.komune.registry.control.f2.certification.api.service.CertificationF2AggregateService
import io.komune.registry.control.f2.certification.api.service.CertificationF2FinderService
import io.komune.registry.control.f2.certification.api.service.CertificationPoliciesEnforcer
import io.komune.registry.control.f2.certification.domain.command.CertificationFillCommandDTOBase
import io.komune.registry.control.f2.certification.domain.command.CertificationFilledEventDTOBase
import io.komune.registry.control.f2.certification.domain.command.CertificationRejectFunction
import io.komune.registry.control.f2.certification.domain.command.CertificationSubmitFunction
import io.komune.registry.control.f2.certification.domain.command.CertificationValidateFunction
import io.komune.registry.control.f2.certification.domain.query.CertificationGetFunction
import io.komune.registry.control.f2.certification.domain.query.CertificationGetResult
import io.komune.registry.control.f2.certification.domain.query.CertificationPageFunction
import io.komune.registry.control.f2.certification.domain.query.CertificationPageResult
import io.komune.registry.s2.commons.model.EvidenceTypeIdentifier
import org.springframework.context.annotation.Bean
import org.springframework.http.codec.multipart.FilePart
import org.springframework.http.codec.multipart.Part
import org.springframework.util.MultiValueMap
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import s2.spring.utils.logger.Logger

@RestController
@RequestMapping
class CertificationEndpoint(
    private val certificationF2AggregateService: CertificationF2AggregateService,
    private val certificationF2FinderService: CertificationF2FinderService,
    private val certificationPoliciesEnforcer: CertificationPoliciesEnforcer
) {
    private val logger by Logger()

    @Bean
    fun certificationGet(): CertificationGetFunction = f2Function { query ->
        logger.info("certificationGet: $query")
        certificationF2FinderService.getOrNull(query.id)
            ?.let { certificationPoliciesEnforcer.enforceCertification(it) }
            .let(::CertificationGetResult)
    }

    @Bean
    fun certificationPage(): CertificationPageFunction = f2Function { query ->
        logger.info("certificationPage: $query")
        val enforcedQuery = certificationPoliciesEnforcer.enforceQuery(query)
        certificationF2FinderService.page(
            language = enforcedQuery.language,
            rootRequirementName = enforcedQuery.protocolName,
            statuses = enforcedQuery.status,
            creatorOrganizationId = enforcedQuery.creatorOrganizationId,
            offset = OffsetPagination(
                offset = enforcedQuery.offset ?: 0,
                limit = enforcedQuery.limit ?: 10
            )
        ).let {
            CertificationPageResult(it.items, it.total)
        }
    }

    @PostMapping("/control/certificationFill")
    suspend fun certificationFill(
        @RequestBody parts: MultiValueMap<EvidenceTypeIdentifier, Part>
    ): CertificationFilledEventDTOBase {
        val command = parts.extractCommandPart<CertificationFillCommandDTOBase>()

        logger.info("certificationFill: $command")
        certificationPoliciesEnforcer.checkFill(command.id)

        val evidences: Map<EvidenceTypeIdentifier, FilePart> = parts.extractFileParts()
        return certificationF2AggregateService.fill(command, evidences)
    }

    @Bean
    fun certificationSubmit(): CertificationSubmitFunction = f2Function { command ->
        logger.info("certificationSubmit: $command")
        certificationPoliciesEnforcer.checkFill(command.id)
        certificationF2AggregateService.submit(command)
    }

    @Bean
    fun certificationValidate(): CertificationValidateFunction = f2Function { command ->
        logger.info("certificationValidate: $command")
        certificationPoliciesEnforcer.checkAudit()
        certificationF2AggregateService.validate(command)
    }

    @Bean
    fun certificationReject(): CertificationRejectFunction = f2Function { command ->
        logger.info("certificationReject: $command")
        certificationPoliciesEnforcer.checkAudit()
        certificationF2AggregateService.reject(command)
    }
}
