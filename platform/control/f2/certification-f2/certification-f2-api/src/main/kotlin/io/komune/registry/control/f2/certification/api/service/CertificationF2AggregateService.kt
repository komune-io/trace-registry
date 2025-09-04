package io.komune.registry.control.f2.certification.api.service

import io.komune.fs.spring.utils.contentByteArray
import io.komune.registry.control.core.cccev.certification.CertificationAggregateService
import io.komune.registry.control.core.cccev.certification.command.CertificationAddEvidenceCommand
import io.komune.registry.control.core.cccev.certification.command.CertificationFillValuesCommand
import io.komune.registry.control.f2.certification.domain.command.CertificationFillCommandDTOBase
import io.komune.registry.control.f2.certification.domain.command.CertificationFilledEventDTOBase
import io.komune.registry.control.f2.certification.domain.command.CertificationRejectCommandDTOBase
import io.komune.registry.control.f2.certification.domain.command.CertificationRejectedEventDTOBase
import io.komune.registry.control.f2.certification.domain.command.CertificationSubmitCommandDTOBase
import io.komune.registry.control.f2.certification.domain.command.CertificationSubmittedEventDTOBase
import io.komune.registry.control.f2.certification.domain.command.CertificationValidateCommandDTOBase
import io.komune.registry.control.f2.certification.domain.command.CertificationValidatedEventDTOBase
import io.komune.registry.infra.neo4j.transaction
import io.komune.registry.s2.commons.model.EvidenceTypeIdentifier
import org.neo4j.ogm.session.SessionFactory
import org.springframework.http.codec.multipart.FilePart
import org.springframework.stereotype.Service

@Service
class CertificationF2AggregateService(
    private val certificationAggregateService: CertificationAggregateService,
    private val sessionFactory: SessionFactory
) {
    suspend fun fill(
        command: CertificationFillCommandDTOBase, evidences: Map<EvidenceTypeIdentifier, FilePart>
    ): CertificationFilledEventDTOBase = sessionFactory.transaction { _, _ ->
        CertificationFillValuesCommand(
            id = command.id,
            rootRequirementCertificationId = null,
            values = command.values,
        ).let { certificationAggregateService.fillValues(it) }

        evidences.forEach { (evidenceTypeIdentifier, file) ->
            CertificationAddEvidenceCommand(
                id = command.id,
                rootRequirementCertificationId = null,
                evidenceTypeIdentifier = evidenceTypeIdentifier,
                filePath = null
            ).let { certificationAggregateService.addEvidence(it, file.contentByteArray(), file.filename()) }
        }

        CertificationFilledEventDTOBase(command.id)
    }

    suspend fun submit(command: CertificationSubmitCommandDTOBase): CertificationSubmittedEventDTOBase {
        return certificationAggregateService.submit(command)
    }

    suspend fun validate(command: CertificationValidateCommandDTOBase): CertificationValidatedEventDTOBase {
        return certificationAggregateService.validate(command)
    }

    suspend fun reject(command: CertificationRejectCommandDTOBase): CertificationRejectedEventDTOBase {
        return certificationAggregateService.reject(command)
    }
}
