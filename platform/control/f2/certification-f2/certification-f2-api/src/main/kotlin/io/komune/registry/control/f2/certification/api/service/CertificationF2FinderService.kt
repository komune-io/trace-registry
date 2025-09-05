package io.komune.registry.control.f2.certification.api.service

import f2.dsl.cqrs.filter.ExactMatch
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.Page
import f2.dsl.cqrs.page.map
import io.komune.im.commons.model.OrganizationId
import io.komune.registry.api.commons.model.SimpleCache
import io.komune.registry.control.core.cccev.certification.CertificationState
import io.komune.registry.control.core.cccev.certification.entity.Certification
import io.komune.registry.control.core.cccev.certification.entity.CertificationRepository
import io.komune.registry.control.f2.certification.api.model.toDTO
import io.komune.registry.control.f2.certification.api.model.toRef
import io.komune.registry.control.f2.certification.domain.model.CertificationDTOBase
import io.komune.registry.control.f2.certification.domain.model.CertificationRef
import io.komune.registry.f2.organization.api.service.OrganizationF2FinderService
import io.komune.registry.f2.user.api.service.UserF2FinderService
import io.komune.registry.s2.catalogue.api.CatalogueFinderService
import io.komune.registry.s2.catalogue.api.CatalogueI18nService
import io.komune.registry.s2.commons.model.CertificationId
import io.komune.registry.s2.commons.model.Language
import org.springframework.stereotype.Service

@Service
class CertificationF2FinderService(
    private val catalogueFinderService: CatalogueFinderService,
    private val catalogueI18nService: CatalogueI18nService,
    private val certificationRepository: CertificationRepository,
    private val organizationF2FinderService: OrganizationF2FinderService,
    private val userF2FinderService: UserF2FinderService
) {
    suspend fun getRefOrNull(id: CertificationId, language: Language?): CertificationRef? {
        return certificationRepository.findById(id)?.toRefCached(language)
    }

    suspend fun getOrNull(id: CertificationId): CertificationDTOBase? {
        return certificationRepository.findById(id)?.toDTOCached()
    }

    suspend fun page(
        language: Language,
        ids: Collection<CertificationId>? = null,
        rootRequirementName: String? = null,
        statuses: Collection<CertificationState>? = null,
        creatorOrganizationId: OrganizationId? = null,
        offset: OffsetPagination? = null
    ): Page<CertificationRef> {
        val cache = Cache(language)
        return certificationRepository.findPage(
            ids = ids,
            requirementName = rootRequirementName,
            statuses = statuses,
            creatorOrganizationId = creatorOrganizationId,
            offset = offset
        ).map { it.toRefCached(cache) }
    }

    private suspend fun Certification.toRefCached(language: Language?) = toRefCached(Cache(language))
    private suspend fun Certification.toRefCached(cache: Cache) = toRef(
        getCatalogue = cache.catalogueByCertification::get,
        getOrganization = cache.organizations::get,
        getUser = cache.users::get
    )

    private suspend fun Certification.toDTOCached(cache: Cache = Cache(null)) = toDTO(
        getCatalogue = cache.catalogueByCertification::get,
        getOrganization = cache.organizations::get,
        getUser = cache.users::get
    )

    private inner class Cache(
        val language: Language?
    ) {
        val catalogueByCertification = SimpleCache { certificationId: CertificationId ->
            catalogueFinderService.page(
                certificationIds = ExactMatch(certificationId),
                offset = OffsetPagination(0, 1),
            ).items.firstOrNull()
                ?.let { catalogueI18nService.translate(it, language, true) }
                ?.toRef()
        }

        val organizations = SimpleCache(organizationF2FinderService::getRef)
        val users = SimpleCache(userF2FinderService::getRef)
    }
}
