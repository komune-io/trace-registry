package io.komune.registry.control.f2.certification.api.service

import io.komune.registry.control.core.cccev.certification.entity.CertificationRepository
import io.komune.registry.control.f2.certification.api.model.toDTO
import io.komune.registry.control.f2.certification.api.model.toRef
import io.komune.registry.control.f2.certification.domain.model.CertificationDTOBase
import io.komune.registry.control.f2.certification.domain.model.CertificationRef
import io.komune.registry.s2.commons.model.CertificationId
import org.springframework.stereotype.Service

@Service
class CertificationF2FinderService(
    private val certificationRepository: CertificationRepository
) {
    suspend fun getRefOrNull(id: CertificationId): CertificationRef? {
        return certificationRepository.findByIdWithRootRequirements(id)?.toRef()
    }

    suspend fun getOrNull(id: CertificationId): CertificationDTOBase? {
        return certificationRepository.findById(id)?.toDTO()
    }
}
