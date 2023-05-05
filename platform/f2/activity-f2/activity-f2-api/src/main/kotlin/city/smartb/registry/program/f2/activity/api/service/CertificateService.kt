package city.smartb.registry.program.f2.activity.api.service

import cccev.dsl.client.CCCEVClient
import cccev.f2.certification.domain.query.CertificationGetByIdentifierQueryDTOBase
import cccev.f2.concept.domain.model.InformationConceptDTOBase
import cccev.f2.concept.domain.query.InformationConceptGetByIdentifierQueryDTOBase
import cccev.f2.requirement.domain.model.RequirementDTOBase
import cccev.f2.requirement.domain.query.RequirementGetByIdentifierQueryDTOBase
import cccev.f2.requirement.domain.query.RequirementGetQueryDTOBase
import cccev.f2.requirement.domain.query.RequirementListChildrenByTypeQueryDTOBase
import cccev.s2.certification.domain.model.Certification
import cccev.s2.certification.domain.model.CertificationIdentifier
import cccev.s2.requirement.domain.RequirementId
import city.smartb.registry.program.api.commons.exception.NotFoundException
import city.smartb.registry.program.api.commons.model.SimpleCache
import city.smartb.registry.program.f2.activity.api.model.toActivities
import city.smartb.registry.program.f2.activity.api.model.toActivity
import city.smartb.registry.program.f2.activity.api.model.toStep
import city.smartb.registry.program.f2.activity.domain.command.ActivityStepEvidenceFulfillCommandDTOBase
import city.smartb.registry.program.f2.activity.domain.model.Activity
import city.smartb.registry.program.f2.activity.domain.model.ActivityIdentifier
import city.smartb.registry.program.f2.activity.domain.model.ActivityStep
import city.smartb.registry.program.f2.activity.domain.model.ActivityStepIdentifier
import city.smartb.registry.program.f2.activity.domain.query.ActivityPageResult
import city.smartb.registry.program.f2.activity.domain.query.ActivityStepEvidenceDownloadQuery
import city.smartb.registry.program.f2.activity.domain.query.ActivityStepEvidenceDownloadResult
import city.smartb.registry.program.f2.activity.domain.query.ActivityStepPageResult
import city.smartb.registry.program.s2.project.api.ProjectFinderService
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.fnc.invoke
import f2.dsl.fnc.invokeWith
import org.slf4j.LoggerFactory
import org.springframework.http.server.ServerHttpResponse
import org.springframework.stereotype.Service
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody

@Service
class CertificateService(
    private val cccevClient: CCCEVClient,
) {

    suspend fun getNotNullCertification(identifier: CertificationIdentifier): Certification {
        return CertificationGetByIdentifierQueryDTOBase(
            identifier = identifier
        ).invokeWith(cccevClient.certificationClient.certificationGetByIdentifier()).item
            ?: throw NotFoundException("Certification with identifier", identifier)
    }

    suspend fun getCertification(identifier: CertificationIdentifier?): Certification? {
        return identifier?.let {
            cccevClient.certificationClient.certificationGetByIdentifier()
                .invoke(CertificationGetByIdentifierQueryDTOBase(identifier))
                .item
        }
    }
}
