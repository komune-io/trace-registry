package io.komune.registry.core.cccev.certification

import f2.spring.exception.NotFoundException
import io.komune.registry.core.cccev.certification.entity.Certification
import io.komune.registry.core.cccev.certification.entity.CertificationRepository
import io.komune.registry.s2.commons.model.CertificationId
import org.springframework.stereotype.Service

@Service
class CertificationFinderService(
    private val certificationRepository: CertificationRepository
) {
    suspend fun getOrNull(id: CertificationId): Certification? {
        return certificationRepository.findById(id)
    }

    suspend fun get(id: CertificationId): Certification {
        return certificationRepository.findById(id)
            ?: throw NotFoundException("Certification", id)
    }
}
