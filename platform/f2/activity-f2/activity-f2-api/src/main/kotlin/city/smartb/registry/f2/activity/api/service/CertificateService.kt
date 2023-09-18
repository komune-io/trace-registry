package city.smartb.registry.f2.activity.api.service

import cccev.dsl.client.CCCEVClient
import cccev.f2.certification.domain.query.CertificationGetByIdentifierQueryDTOBase
import cccev.s2.certification.domain.model.Certification
import cccev.s2.certification.domain.model.CertificationIdentifier
import city.smartb.registry.api.commons.exception.NotFoundException
import f2.dsl.fnc.invoke
import f2.dsl.fnc.invokeWith
import org.springframework.stereotype.Service

@Service
class CertificateService(
    private val cccevClient: CCCEVClient,
) {

    suspend fun get(identifier: CertificationIdentifier): Certification {
        return CertificationGetByIdentifierQueryDTOBase(
            identifier = identifier
        ).invokeWith(cccevClient.certificationClient.certificationGetByIdentifier()).item
            ?: throw NotFoundException("Certification with identifier", identifier)
    }

    suspend fun getOrNull(identifier: CertificationIdentifier?): Certification? {
        return identifier?.let {
            cccevClient.certificationClient.certificationGetByIdentifier()
                .invoke(CertificationGetByIdentifierQueryDTOBase(identifier))
                .item
        }
    }
}
