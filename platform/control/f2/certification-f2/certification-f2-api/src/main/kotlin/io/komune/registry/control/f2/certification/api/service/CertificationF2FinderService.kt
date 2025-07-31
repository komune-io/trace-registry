package io.komune.registry.control.f2.certification.api.service

import io.komune.registry.control.core.cccev.certification.CertificationFinderService
import io.komune.registry.control.f2.certification.api.model.toRef
import io.komune.registry.control.f2.certification.domain.model.CertificationRef
import io.komune.registry.control.f2.protocol.api.service.ProtocolF2FinderService
import io.komune.registry.s2.commons.model.CertificationId
import org.springframework.stereotype.Service

@Service
class CertificationF2FinderService(
    private val certificationFinderService: CertificationFinderService,
    private val protocolF2FinderService: ProtocolF2FinderService
) {
    suspend fun getRefOrNull(id: CertificationId): CertificationRef? {
        return certificationFinderService.getOrNullWithRootRequirements(id)
            ?.toRef(protocolF2FinderService::getRef)
    }
}
