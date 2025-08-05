package io.komune.registry.control.f2.certification.api.service

import io.komune.registry.api.commons.model.SimpleCache
import io.komune.registry.control.core.cccev.certification.entity.Certification
import io.komune.registry.control.core.cccev.certification.entity.CertificationRepository
import io.komune.registry.control.f2.certification.api.model.toDTO
import io.komune.registry.control.f2.certification.api.model.toRef
import io.komune.registry.control.f2.certification.domain.model.CertificationDTOBase
import io.komune.registry.control.f2.certification.domain.model.CertificationRef
import io.komune.registry.f2.organization.api.service.OrganizationF2FinderService
import io.komune.registry.f2.user.api.service.UserF2FinderService
import io.komune.registry.s2.commons.model.CertificationId
import org.springframework.stereotype.Service

@Service
class CertificationF2FinderService(
    private val certificationRepository: CertificationRepository,
    private val organizationF2FinderService: OrganizationF2FinderService,
    private val userF2FinderService: UserF2FinderService
) {
    suspend fun getRefOrNull(id: CertificationId): CertificationRef? {
        return certificationRepository.findByIdWithRootRequirements(id)?.toRefCached()
    }

    suspend fun getOrNull(id: CertificationId): CertificationDTOBase? {
        return certificationRepository.findById(id)?.toDTOCached()
    }

    suspend fun listRefs(ids: Collection<CertificationId>): List<CertificationRef> {
        val cache = Cache()
        return certificationRepository.findAllByIdWithRootRequirements(ids)
            .map { it.toRefCached(cache) }
    }

    private suspend fun Certification.toRefCached(cache: Cache = Cache()) = toRef(
        getOrganization = cache.organizations::get,
        getUser = cache.users::get
    )

    private suspend fun Certification.toDTOCached(cache: Cache = Cache()) = toDTO(
        getOrganization = cache.organizations::get,
        getUser = cache.users::get
    )

    private inner class Cache {
        val organizations = SimpleCache(organizationF2FinderService::getRef)
        val users = SimpleCache(userF2FinderService::getRef)
    }
}
